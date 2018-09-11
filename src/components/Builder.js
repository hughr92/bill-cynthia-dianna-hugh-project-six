import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'
import Window from './window/Window'
import Tools from './builder/Tools'

class Builder extends Component {

    render() {
        console.log(`user`, this.props.location.query);
        // {!this.props.location.query && ()}
        return (
            <div>
                <div className="wrapper">
                    <h1>This is the builder</h1>
                    <Window user={this.props.match.params.userUID}/>
                    <Tools user={this.props.match.params.userUID}/>
                </div>
            </div>
        )
    }
}

export default Builder; 