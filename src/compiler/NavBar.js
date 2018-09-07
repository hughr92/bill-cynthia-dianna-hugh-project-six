import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <div className="wrapper">
                    <nav>
                        <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/home/templates">Templates</NavLink></li>
                            <li><NavLink to="/home/builder">Builder</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavBar; 