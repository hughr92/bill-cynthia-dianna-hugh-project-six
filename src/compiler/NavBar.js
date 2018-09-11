import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'
import firebase from '../firebase';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
    }
    logout = () => {
        firebase.auth().signOut();
        this.props.history.push(`/home`);
        console.log(`logout`);
    }
    render() {
        return (
            // ternary statement - if not logged in show "login", else show logout
            <div className="navBar">
                <div className="wrapper">
                    <div className="logo">
                        <img src="../assets/logo-bw.png" alt=""/>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li>
                                <Link onClick={this.logout}to="/home">Logout</Link>
                            </li>
                            

                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavBar; 