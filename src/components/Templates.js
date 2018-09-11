import React, { Component } from "react";
import firebase from "../firebase";

class Templates extends Component {
  constructor() {
    super();
    this.state = {
      template:[],

    };
  }

  componentDidMount = () => {
    const dbRef = firebase.database().ref("template");
    dbRef.on("value", snapshot => {
      /* console.log("template", snapshot.val()); */

      this.sortTemplates((snapshot).val());
    });
  };

  
  sortTemplates = (templateObject) => {
    const templatesArray = Object.entries(templateObject).map((item) => {
      console.log(item);
      
      return ({
        templateTitle:item[0],
        backgroundImage: item[1].background.image,
        backgroundColor:item[1].background.color,

        h1TextContent: item[1].text.h1.textContent,
        h1Font: item[1].text.h1.fontFamily,
        h1Color: item[1].text.h1.color,
        h1Align: item[1].text.h1.alignment,

        h2TextContent: item[1].text.h2.textContent,
        h2Font: item[1].text.h2.fontFamily,
        h2Color: item[1].text.h2.color,
        h2Align: item[1].text.h2.alignment
      });
      

    });
    console.log("templates array", templatesArray);
    
    const newTemplatesArray = templatesArray.slice(0,18)

    this.setState ({
      template: newTemplatesArray
    })
  }

  handleChange = (e) => {
    console.log('target',e.target.id);
    const userID = this.props.user;
    console.log("userID", userID);
    
    const backgroundDbRef = firebase.database().ref(`${userID}/background`);
    backgroundDbRef.on("value", snapshot => {
      snapshot.ref.update({background:this.state.template[e.target.id].backgroundColor})
    })


    const h1FontDbRef = firebase.database().ref(`${userID}/text/h1`);
    h1FontDbRef.on("value", snapshot => {
      
      snapshot.ref.update({
        fontFamily: this.state.template[e.target.id].h1Font
      });
    });

    const h2FontDbRef = firebase.database().ref(`${userID}/text/h2`);
    h2FontDbRef.on("value", snapshot => {
      snapshot.ref.update({
        fontFamily: this.state.template[e.target.id].h2Font
      });
    });

    const h1ColorDbRef = firebase.database().ref(`${userID}/text/h1color`);
    h1ColorDbRef.on("value", snapshot => {
      snapshot.ref.update({
        hex: this.state.template[e.target.id].h1Color
      });
    });

    const h2ColorDbRef = firebase.database().ref(`${userID}/text/h2color`);
    h2ColorDbRef.on("value", snapshot => {
      snapshot.ref.update({
        hex: this.state.template[e.target.id].h2Color
      });
    });

    /* console.log(this.state.template[e.target.id]);
    console.log(snapshot); */
    
    /* snapshot.ref.update({ 

      // hex: this.state.template[e.target.id].h1Color.hex
    
      }); */
    /* console.log("template", snapshot.val()); */

       /*  this.sortTemplates(snapshot.val()); */
    /* }); */
  };
  
  render() {
    

    

   /*  const { template } = this.state */
      return (
        <div>
          {
            this.state.template.map( (templateStyle,i) => {
              const swatchBackground = { backgroundColor: templateStyle.backgroundColor };

              const swatchH1 = { backgroundColor: templateStyle.h1Color };

              const swatchH2 = { backgroundColor: templateStyle.h2Color };

              const titleColor = { color: templateStyle.backgroundColor };
              return <div className="template">
                  <h1 className="template__title">
                    <span style={titleColor}>
                      {templateStyle.templateTitle}
                    </span>
                  </h1>

                  <div className="styleGuide">
                    <h3 className="styleGuide__cell__heading">
                      <span>{templateStyle.h2TextContent}</span>
                    </h3>
                    <h4 className="styleGuide__cell__heading">
                      h1 Color:
                      <span>{templateStyle.h1Color}</span>
                    </h4>
                    <h4 className="styleGuide__cell__heading">
                      h2 Color:
                      <span>{templateStyle.h2Color}</span>
                    </h4>
                  </div>

                  <div className="swatches">
                    <h3>Swatches</h3>

                    <ul className="swatches__triple">
                      <li style={swatchBackground} className="swatches__cell">
                        {/* {templateStyle.backgroundColor} */}
                      </li>
                      <li style={swatchH1} className="swatches__cell">
                        {/* {templateStyle.h1Color} */}
                      </li>
                      <li style={swatchH2} className="swatches__cell">
                        {/* {templateStyle.h2Color} */}
                      </li>
                    </ul>
                  </div>

                  <button id={i} onClick={this.handleChange}>
                    <h3>Pick Template</h3>
                  </button>
                </div>;
            })
          } 
        </div>
      )
    }
}      


export default Templates;
