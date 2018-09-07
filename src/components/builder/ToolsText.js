import React, { Component } from 'react';

class ToolsText extends Component {
    render() {
        return <div className="tools__container tools__container--text">
            <h1>ToolsText</h1>
            {/* <h2>{this.props.text.h2.color}</h2> */}
            <form>
              <div className="tools__container--text__h1">
                <h3 className="tools__container--text__header" id="headerh1">
                  Main header
                </h3>
                <div className="tools__container__wrapper">
                  <label for="h1Text" clasName="tools__container__label">Enter text</label>
                  <input type="text" clasName="tools__container__input" maxLength="25" id="h1Text" />
                </div>

              <div className="tools__container__wrapper">
                <label for="h1FontSize" clasName="tools__container__label">
                    Font size
                  </label>
                <input type="number" clasName="tools__container__input"  id="h1FontSize" />
              </div>

              <div className="tools__container__wrapper">
                <label for="h1FontFamily" clasName="tools__container__label">
                    Font family
                  </label>
                <input type="number" clasName="tools__container__input" id="h1FontFamily" />
              </div>

              <div className="tools__container__wrapper">
                <label for="h1TextAlign" clasName="tools__container__label">
                    Text alignment{" "}
                  </label>
                <input type="number" clasName="tools__container__input"id="h1TextAlign" />
              </div>
              </div>
              

              <div className="tools__container--text__h2">
                <h3 className="tools__container--text__header">Subheader</h3>

              <div className="tools__container__wrapper">
                <label for="h2Text" clasName="tools__container__label">Enter text</label>
                <input type="text" clasName="tools__container__input" maxLength="25" id="h2Text" />
              </div>

              <div className="tools__container__wrapper">
                <label for="h2FontSize" clasName="tools__container__label">
                    Font size
                  </label>
                <input type="number" clasName="tools__container__input" id="h2FontSize" />
              </div>

              <div className="tools__container__wrapper">
                <label for="h2FontFamily" clasName="tools__container__label">
                    Font family
                  </label>
                <input type="number" clasName="tools__container__input" id="h2FontFamily" />
              </div>

              <div className="tools__container__wrapper">
                <label for="h2TextAlign" clasName="tools__container__label">
                    Text alignment
                  </label>
                <input type="number" clasName="tools__container__input" id="h2TextAlign" />
              </div>
              </div>
            </form>
          </div>;
    }
}

export default ToolsText;