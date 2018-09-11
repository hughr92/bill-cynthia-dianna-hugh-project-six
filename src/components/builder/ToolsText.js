import React, { Component } from 'react';
import firebase from 'firebase';


const dbRef = firebase.database().ref();

class ToolsText extends Component {
  constructor (){
    super();
    this.state = {
        h2: {
          textContent: "",
          size: 40,
          fontFamily: "Roboto",
          color: "#fff",
          alignment: "center",
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
        let dbFont = font;
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
    console.log(temp)
    const header=temp[0];
    const property=temp[1];

    newState[header][property] = e.target.value;

    switch (true) {
      case e.target.value < 15:
        console.log('less than 15')
        newState[header][property] = 15;
        break;
      case e.target.value > 60:
        console.log('more than 60')
        newState[header][property] = 60;
        break;
      default:
        console.log('between 15 and 60')
        newState[header][property] = e.target.value;
    }

    this.setState(
      newState,() => {
      const dbRef = firebase.database().ref(`${userID}/text`);
      dbRef.on('value', snapshot => {
        dbRef.update(this.state)
      })
    })
    // console.log(e.target.value);
    
    // if (e.target.value < 15 || e.target.value > 60) {
    //   newState[header].isInvalid = true;
    //   this.setState(newState);
    // }
    // else {
    //   newState[header].isInvalid = false;
    //   this.setState(newState);
    // }
  }

    componentDidMount() {
      const userID = this.props.user;
      const dbRef = firebase.database().ref(`${userID}/text`);
      dbRef.on('value',(snapshot) => {
        console.log(snapshot.val());
        // const initialState = 
      })
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
                  <input onChange={this.handleChange} value={this.state.h1.size} id='h1.size' required type="number" max="60" min="15" className="tools__container__input"   />
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
                  <input required onChange={this.handleChange} id="h2.textContent" value={this.state.h2.textContent} type="text" className="tools__container__input" maxLength="25"  />
                <label htmlFor="h2Text" className="tools__container__label">Enter text</label>
              </div>

              <div className="tools__container__wrapper">
                <input required onChange={this.handleChange} id="h2.size" value={this.state.h2.size} type="number" min="15" max="60" className="tools__container__input" />
                <label htmlFor="h2FontSize" className="tools__container__label">
                    Font size
                  </label>
              </div>

              <div className="tools__container__wrapper">
                <label htmlFor="h2FontFamily">
                    Font family
                </label>
                <select onChange={this.handleChange} id="h2.fontFamily">
                  {this.renderFonts()}
                </select>
              </div>

              <div className="tools__container__wrapper">
                <label htmlFor="h2TextAlign">
                    Text alignment
                </label>
                <select onChange={this.handleChange} id="h2.alignment">
                  <option value="left">left</option>
                  <option value="center">center</option>
                  <option value="right">right</option>
                </select>
              </div>
              </div>
            </form>
        </div>)
        }
}

export default ToolsText;