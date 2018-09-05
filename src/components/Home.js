import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div>
                <h1>This is the Home Page.</h1>
                <Link to="/home/templates">Templates</Link>
                <Link to="/home/builder">Builder</Link>
            </div>
        )
    }
}

export default Home;