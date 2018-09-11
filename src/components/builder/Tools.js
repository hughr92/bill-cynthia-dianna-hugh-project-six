import React, { Component } from 'react';
import Templates from '../Templates'

import ToolsBackground from './ToolsBackground';
import ToolsText from './ToolsText';
import ToolsSocial from './ToolsSocial';
import ToolsTemplate from './ToolsTemplate';

class Tools extends Component {

    constructor(){
        super();
        this.state = {
            toolTab: 'background',
            
        }
    }

    handleChange = (e) => {
        // console.log(e.target.id);
        this.setState({
            toolTab: e.target.id
        })
    }

    render() {
        // console.log(`propsinTools`, this.props);
        
        return (
            <div>

                <ul>
                    <li><button onClick={this.handleChange} id="background" className="tools__tabs">Background</button></li>
                    <li><button onClick={this.handleChange} id="text" className="tools__tabs">Text</button></li>
                    <li><button onClick={this.handleChange} id="social" className="tools__tabs">Social</button></li>
                </ul>
    
                {
                this.state.toolTab === 'background' && (
                    <ToolsBackground user={this.props.user}/>
                )
                }
    
                {
                this.state.toolTab === 'text' && (
                        <ToolsText user={this.props.user}/>
                )
                }
                {
                this.state.toolTab === 'social' && (
                        <ToolsSocial user={this.props.user}/>
                )
                }
                {
                this.state.toolTab === ‘templates’ && (
                       <Templates user={this.props.user} />
                   )
                }
            </div>

        )
    }
}

export default Tools;