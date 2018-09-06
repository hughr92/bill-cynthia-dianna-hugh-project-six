import React, { Component } from 'react';

class ToolsText extends Component {
    render() {
        return <div className="tools__container tools__container--text">
            <h1>ToolsText</h1>
            {/* <h2>{this.props.text.h2.color}</h2> */}
            <form>
                <div className="tools__container--text__h1">
                    <h3 className="tools__container--text__header" id="headerh1">
                    h1
                    </h3>

                    <input type="text" placeholder="Enter primary header text" maxLength="5" />
                    <input type="number" placeholder="Size" />
                    <input type="number" placeholder="Font family" />
                    <input type="number" placeholder="Alignment" />
                </div>

                <div className="tools__container--text__h2">
                    <h3 className="tools__container--text__header">h2</h3>

                    <input type="text" placeholder="Enter sub text" maxLength="5" />
                    <input type="number" placeholder="Size" />
                    <input type="number" placeholder="Font family" />
                    <input type="number" placeholder="Alignment" />
                </div>
            </form>
        </div>;
    }
}

export default ToolsText;