import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'
import Window from './window/Window'
import Tools from './builder/Tools'

class Builder extends Component {
    render() {
        console.log(`user`, this.props.location.query);
        
        return (
            <div>
                <h1>This is the builder</h1>
                <Window />
                <Tools user={this.props.location.query}/>
            </div>
        )
    }
}

export default Builder; 