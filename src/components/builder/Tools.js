import React, { Component } from 'react';

import ToolsBackground from './ToolsBackground';
import ToolsText from './ToolsText';
import ToolsSocial from './ToolsSocial';

class Tools extends Component {

    constructor(){
        super();
        this.state = {
            toolTab: 'background',
            background:{
                image: true,
                color: ""
            },
            text: {
                h2:{
                    size: 33,
                    fontFamily:"",
                    color:"",
                    alignment:"",

                },
                h1:{
                    size: 48,
                    fontFamily:"",
                    color:"",
                    alignment:"",

                },
            },
            social: {
                github:"",
                twitter:"",
                linkedin:"",
                email:""
            }
        }
    }

    handleChange = (e) => {
        console.log(e.target.id);
        this.setState({
            toolTab: e.target.id
        })
    }

    render() {
        return (
            <div>

                <ul>
                    <li><button onClick={this.handleChange} id="background" className="tools__tabs">Background</button></li>
                    <li><button onClick={this.handleChange} id="text" className="tools__tabs">Text</button></li>
                    <li><button onClick={this.handleChange} id="social" className="tools__tabs">Social</button></li>
                </ul>
    
                {
                this.state.toolTab === 'background' && (
                    <ToolsBackground />
                )
                }
    
                {
                this.state.toolTab === 'text' && (
                    <ToolsText />
                )
                }
                {
                this.state.toolTab === 'social' && (
                    <ToolsSocial />
                )
                }
            </div>

        )
    }
}

export default Tools;