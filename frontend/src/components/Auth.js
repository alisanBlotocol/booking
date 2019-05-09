import React, { Component } from 'react';
import './Auth.css';

class AuthPage extends Component {
  state =  {
    isLogin: true
  }

  constructor(props) {
    super(props);
    this.emailElm = React.createRef();    //reacting input elements button to backend 
    this.passwordElm = React.createRef();
  }
  
  switchLogin = () => {
    this.setState(prevState => {
      return {isLogin: !prevState.isLogin};
    })
  }

  submitHandler = event => {
    event.preventDefault();  //prevent default onSubmit
    const email = this.emailElm.current.value;
    const password = this.passwordElm.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    
    let requestBody = {
      query:`
        query {
          login(email:"${email}", password:"${password}"){
            userId
            token
            tokenExpiration
          }
        }
      `
    };

    if (!this.state.isLogin) {
      requestBody = {
        query:`
          mutation{
            createUser(userInput: {email:"${email}", password:"${password}"}) {
              _id
              email
            }
          }
        `
      };
    } 

    
        //you may use axios here for HTTP request
    fetch('http://localhost:4000/graphql', {             
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed');
      }
        return res.json();
    })
    .then(resData => {
      console.log(resData);
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
    <form className="auth-form" onSubmit={this.submitHandler}>
      <div className="form-control">
        <label htmlFor="email">Email Add: </label>
        <input type="email" id="email" placeholder="Email Address" ref={this.emailElm}/>
      </div>
      <div className="form-control">
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" placeholder="Password" ref={this.passwordElm}/>
      </div>
      <div className="form-actions">
      <button type="submit">SignUp</button>
      <button type="button" onClick={this.switchLogin}>
      Switch to {this.state.isLogin ? 'SignUp' : 'Login'} 
      </button>
      </div>

    </form>
    );
  }
}

export default AuthPage;