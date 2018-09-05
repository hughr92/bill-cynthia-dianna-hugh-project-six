import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'

// Import Components
import Home from "./components/Home";
import Templates from "./components/Templates"
import Builder from "./components/Builder"

class Main extends Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <Router>
                <main>                    
                    <Route exact path="/home/" component={Home} />
                    <Route exact path="/home/builder" component={Builder} />
                    <Route exact path="/home/templates" component={Templates} />
                </main>
            </Router>
        )
    }
}

export default Main;