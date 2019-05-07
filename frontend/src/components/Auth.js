import React, { Component } from 'react';
import './Auth.css';

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.emailElm = React.createRef();    //reacting input elements button to backend 
    this.passwordElm = React.createRef();
  }
  
  submitHandler = () => {
    const email = this.emailElm.current.value;
    const password = this.passwordElm.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    console.log(email, password);
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
      <button type="button">Signup</button>
      <button type="submit">Submit</button>
      </div>

    </form>
    );
  }
}

export default AuthPage;