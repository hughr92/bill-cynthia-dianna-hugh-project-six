import React, { Component } from 'react';


class ToolsText extends Component {
  constructor (){
    super();
    this.state = {
      h1FontSize: 60,
      h1IsInvalid: false,
    }
  }
  
  handleChange = (e) => {
    // console.log('handle change fired')
    // if font-size < 15 || font-size > 60, setState to display error
    // else change bottom border to accent color
    this.setState({
      [e.target.id] : e.target.value
    })
    if (e.target.value < 15 || e.target.value > 60) {
      console.log('error')
      this.setState({
        h1FontSizeIsInvalid: true
      })
    }
  }
    render() {
        return (
        <div className="tools__container tools__container--text">
            <h1>ToolsText</h1>
            {/* <h2>{this.props.text.h2.color}</h2> */}
            <form class="clearfix">
              <div className="tools__container--text__h1">
                <h3 className="tools__container--text__header" id="headerh1">
                  Main header
                </h3>
                <div className="tools__container__wrapper">
                  <input required type="text" placeholder= " " className="tools__container__input" maxLength="25" id="h1Text" />
                  <label for="h1Text" className="tools__container__label">Enter text</label>
                </div>

                <div className="tools__container__wrapper">
                  <input onChange={this.handleChange} required type="number" value={this.state.h1FontSize} className="tools__container__input"  id="h1FontSize" />
                  <label for="h1FontSize" className="tools__container__label">
                      Font size
                    </label>
                  <label className={this.state.h1FontSizeIsInvalid ? '' : 'tools__container__label--error' }>Input should be between 15 and 60</label>
                </div>

                <div className="tools__container__wrapper">
                  {/* <input required type="text" className="tools__container__input" id="h1FontFamily" /> */}
                  <label for="h1FontFamily" >
                      Font family
                  </label>
                  <select>
                    <option value="" selected>Open Sans</option>
                    <option value="">Lobster</option>
                  </select>
                </div>

                <div className="tools__container__wrapper">
                  {/* <input required type="text" className="tools__container__input"id="h1TextAlign" value="left" /> */}
                  <label for="h1TextAlign" >
                      Text alignment
                  </label>
                  <select>
                    <option value="" selected>left</option>
                    <option value="">center</option>
                    <option value="">right</option>
                    <option value="">justify</option>
                  </select>
                </div>
              </div>
              

              <div className="tools__container--text__h2">
                <h3 className="tools__container--text__header">Subheader</h3>

              <div className="tools__container__wrapper">
                <input required type="text" className="tools__container__input" maxLength="25" id="h2Text" />
                <label for="h2Text" className="tools__container__label">Enter text</label>
              </div>

              <div className="tools__container__wrapper">
                <input required type="number" min="15" max="60" className="tools__container__input" id="h2FontSize" />
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
        </div>)
        }
}

export default ToolsText;