import React, { Component } from 'react';

class ToolsText extends Component {
    render() {
        return (
            <div className="tools__container tools__container--text">
                <h1>ToolsText</h1>
                {/* <h2>{this.props.text.h2.color}</h2> */}
                <div className="tools__container--text__h1">
                    <h3 className="tools__container--text__header">h1</h3>
                    <input type="number" placeholder="size"/>
                </div>
                <div className="tools__container--text__h2">
                    <h3 className="tools__container--text__header">h2</h3>
                    <input type="number" placeholder="size"/>
                    <input type="text" placeholder="text" maxLength="5"/>
                </div>
            </div>
            
        )
    }
}

export default ToolsText;