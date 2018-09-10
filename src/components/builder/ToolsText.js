import React, { Component } from 'react';
import firebase from '../../firebase'


class ToolsText extends Component {
  constructor (){
    super();
    this.state = {
        h2: {
            textContent: "",
            size: null,
            fontFamily: "",
            color: "",
            alignment: "",
            isInvalid: false

        },
        h1: {
            textContent: "",
            size: 60,
            fontFamily: "",
            color: "",
            alignment: "",
            h1FontSizeIsInvalid: false
        
      }
    }
  }

  // if size, append px
  // (`${variable}px`)
  
  handleChange = (e) => {
    // if font-size < 15 || font-size > 60, setState to display error
    // else change bottom border to accent color
    const userID = this.props.user;
    
    const newState = JSON.parse(JSON.stringify(this.state));
    const temp=e.target.id.split('.')
    const header=temp[0];
    const property=temp[1];
    
    newState[header][property] = e.target.value;
    console.log(newState);

    this.setState(
      newState,() => {
      const dbRef = firebase.database().ref(`${userID}/text`);
      dbRef.on('value', snapshot => {
        dbRef.update(this.state)
        // console.log(snapshot.val())
      })
    })
    // if (e.target.value < 15 || e.target.value > 60) {
    //   this.setState({
    //     h1FontSizeIsInvalid: true
    //   })
    // }
    // add the else

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
                  <input onChange={this.handleChange} value={this.state.h1.textContent} id="h1.textContent" required type="text"  className="tools__container__input" maxLength="25" />
                  <label htmlFor="h1Text" className="tools__container__label">Enter text</label>
                </div>

                <div className="tools__container__wrapper">
                  <input onChange={this.handleChange} value={this.state.h1.size} id='h1.size' required type="number" className="tools__container__input"   />
                  <label htmlFor="h1FontSize" className="tools__container__label">
                      Font size
                    </label>
                  <label className={this.state.h1FontSizeIsInvalid ? '' : 'tools__container__label--error' }>Input should be between 15 and 60</label>
                </div>

                <div className="tools__container__wrapper">
                  <label htmlFor="h1FontFamily" >
                      Font family
                  </label>
                  <select>
                    <option value="" selected>Open Sans</option>
                    <option value="">Lobster</option>
                  </select>
                </div>

                <div className="tools__container__wrapper">
                  <label htmlFor="h1TextAlign" >
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
                <label htmlFor="h2Text" className="tools__container__label">Enter text</label>
              </div>

              <div className="tools__container__wrapper">
                <input required type="number" min="15" max="60" className="tools__container__input" id="h2FontSize" />
                <label htmlFor="h2FontSize" className="tools__container__label">
                    Font size
                </label>
              </div>

              <div className="tools__container__wrapper">
                <input required type="text" className="tools__container__input" id="h2FontFamily" />
                <label htmlFor="h2FontFamily" className="tools__container__label">
                    Font family
                  </label>
              </div>

              <div className="tools__container__wrapper">
                <input required type="text" className="tools__container__input" id="h2TextAlign" />
                <label htmlFor="h2TextAlign" className="tools__container__label">
                    Text alignment
                  </label>
              </div>
              </div>
            </form>
        </div>)
        }
}

export default ToolsText;