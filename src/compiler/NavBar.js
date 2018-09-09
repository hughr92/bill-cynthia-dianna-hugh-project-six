import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (

            // ternary statement - if not logged in show "login", else show logout
            <div className="navBar">
                <div className="wrapper">
                    <nav>
                        <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li>Sign In</li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavBar; 