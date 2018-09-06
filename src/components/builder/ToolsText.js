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
                <label for="h1Text">Enter primary text</label>
                <input type="text" placeholder="Enter primary header text" maxLength="5" id="h1Text" />

                <label for="h1FontSize">
                  Select primary text font size
                </label>
                <input type="number" placeholder="Size" id="h1FontSize" />

                <label for="h1FontFamily">
                  Select primary text font family
                </label>
                <input type="number" placeholder="Font family" id="h1FontFamily" />

                <label for="h1TextAlign">
                  Select primary text alignment{" "}
                </label>
                <input type="number" placeholder="Alignment" id="h1TextAlign" />
              </div>
              

              <div className="tools__container--text__h2">
                <h3 className="tools__container--text__header">h2</h3>

                <label for="h2Text">Enter sub text</label>
                <input type="text" placeholder="Enter sub text" maxLength="5" id="h2Text" />

                <label for="h2FontSize">
                  Select sub text font size
                </label>
                <input type="number" placeholder="Size" id="h2FontSize" />

                <label for="h2FontFamily">
                  Select sub text font family
                </label>
                <input type="number" placeholder="Font family" id="h2FontFamily" />

                <label for="h2TextAlign">
                  Select sub text alignment
                </label>
                <input type="number" placeholder="Alignment" id="h2TextAlign" />
              </div>
            </form>
          </div>;
    }
}

export default ToolsText;