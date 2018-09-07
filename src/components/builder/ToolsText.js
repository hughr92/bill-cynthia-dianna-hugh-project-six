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
                  <input required type="text" className="tools__container__input" maxLength="25" id="h1Text" />
                  <label for="h1Text" className="tools__container__label">Enter text</label>
                </div>

              <div className="tools__container__wrapper">
                <input required type="number" className="tools__container__input"  id="h1FontSize" />
                <label for="h1FontSize" className="tools__container__label">
                    Font size
                  </label>
              </div>

              <div className="tools__container__wrapper">
                <input required type="text" className="tools__container__input" id="h1FontFamily" />
                <label for="h1FontFamily" className="tools__container__label">
                    Font family
                  </label>
              </div>

              <div className="tools__container__wrapper">
                <input required type="text" className="tools__container__input"id="h1TextAlign" />
                <label for="h1TextAlign" className="tools__container__label">
                    Text alignment{" "}
                  </label>
              </div>
              </div>
              

              <div className="tools__container--text__h2">
                <h3 className="tools__container--text__header">Subheader</h3>

              <div className="tools__container__wrapper">
                <input required type="text" className="tools__container__input" maxLength="25" id="h2Text" />
                <label for="h2Text" className="tools__container__label">Enter text</label>
              </div>

              <div className="tools__container__wrapper">
                <input required type="number" className="tools__container__input" id="h2FontSize" />
                <label for="h2FontSize" className="tools__container__label">
                    Font size
                  </label>
              </div>

              <div className="tools__container__wrapper">
                <input required type="text" className="tools__container__input" id="h2FontFamily" />
                <label for="h2FontFamily" className="tools__container__label">
                    Font family
                  </label>
              </div>

              <div className="tools__container__wrapper">
                <input required type="text" className="tools__container__input" id="h2TextAlign" />
                <label for="h2TextAlign" className="tools__container__label">
                    Text alignment
                  </label>
              </div>
              </div>
            </form>
          </div>;
    }
}

export default ToolsText;