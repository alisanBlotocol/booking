import React from 'react';
import { NavLink} from 'react-router-dom';
import './MainNav.css';

const mainNavigation = props => (
    <header className="main-navigation">
        <div className="main-nav-logo">
            <h1>Navbar</h1>;
        </div>
        <nav className="main-nav-items">
            <ul>
                <li>
                    <NavLink to="/auth">Authenticate</NavLink>
                </li>
                <li>
                    <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                    <NavLink to="/bookings">Bookings</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)
export default mainNavigation;