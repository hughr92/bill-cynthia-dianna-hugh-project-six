import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Link to="/home" >Home</Link>
                <h1>This is the landing page</h1>
            </div>
        )
    }
}

export default LandingPage; 