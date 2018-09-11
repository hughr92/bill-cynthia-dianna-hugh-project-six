import React, { Component } from 'react';
import firebase from 'firebase';
// import axios from 'axios';

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
            fontFamily: "Roboto",
            color: "#fff",
            alignment: "center",
            isInvalid: false
        
      }
    }
  }

  // componentDidMount(){
  //   axios.get('https://www.googleapis.com/webfonts/v1/webfonts', {
  //     params: {
  //       key: 'AIzaSyAPYBXi-tLQxlznV5T0IRJ0Pj_s_Ugb5FU',
  //       sort: 'popularity'
  //     }
  //   })
  //   .then((res) => {
  //     console.log(res.data.items)
  //   })
  // }

  renderFonts = () => {
    const fontsArray = ['Karla',
      'Lora',
      'Frank Ruhl Libre',
      'Playfair Display',
      'Archivo',
      'Spectral',
      'Rakkas',
      'Concert One',
      'Yatra One',
      'Arvo',
      'Lato',
      'Abril FatFace',
      'Ubuntu',
      'PT Serif',
      'Old Standard TT',
      'Oswald',
      'PT Sans',
      'Poppins',
      'Fira Sans',
      'Open Sans'];
      return fontsArray.map((font,i) => {
        let dbFont = font.split(' ').join('+');
        return (<option value={dbFont} key={i}>{font}</option>)
      })
  }
  
  handleChange = (e) => {
    // console.log('handle change fired')
    // if font-size < 15 || font-size > 60, setState to display error
    // else change bottom border to accent color
    const userID = this.props.user;
    
    const newState = JSON.parse(JSON.stringify(this.state));
    const temp=e.target.id.split('.')
    const header=temp[0];
    const property=temp[1];
    console.log(header,property);
    newState[header][property] = e.target.value;

    this.setState(
      newState,() => {
      const dbRef = firebase.database().ref(`${userID}/text`);
      dbRef.on('value', snapshot => {
        dbRef.update(this.state)
      })
    })
    console.log(e.target.value);
    if (e.target.value < 15 || e.target.value > 60) {
      newState[header].isInvalid = true;
      this.setState(newState);
    }
    else {
      newState[header].isInvalid = false;
      this.setState(newState);
    }
  }
    render() {
        return (
        <div className="tools tools__container tools__container--text">
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
                  <input onChange={this.handleChange} value={this.state.h1.size} id='h1.size' required type="number" max="60" className="tools__container__input"   />
                  <label htmlFor="h1FontSize" className="tools__container__label">
                      Font size
                    </label>
                  {this.state.h1.isInvalid && (
                    <label>invalid</label>
                  )}
                </div>

                <div className="tools__container__wrapper">
                  <label htmlFor="h1FontFamily" >
                      Font family
                  </label>
                  <select onChange={this.handleChange} id="h1.fontFamily" value={this.state.h1.fontFamily}>
                    {this.renderFonts()}
                  </select>
                </div>

                <div className="tools__container__wrapper">
                  <label htmlFor="h1TextAlign" >
                      Text alignment
                  </label>
                  <select onChange={this.handleChange} id="h1.alignment">
                    <option value="left">left</option>
                    <option value="center">center</option>
                    <option value="right">right</option>
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