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
    
    const newTemplatesArray = templatesArray.slice(0,9)

    this.setState ({
      template: newTemplatesArray
    })
  }


  render() {

    const swatchBackground = {
      backgroundColor :  'green',
    }

    const swatchH1 = {
      backgroundColor : 'red'
    }
    
    const swatchH2 = {
      backgroundColor : 'blue'
    }

   /*  const { template } = this.state */
      return (
        <div>
          {
            this.state.template.map( (templateStyle) => {
              return <div className="template">
                  <h1 className="template__title">
                    <span>{templateStyle.templateTitle}</span>
                  </h1>

                  <div className="styleGuide">
                    <h3 className="styleGuide__cell__heading">
                      <span>{templateStyle.h2TextContent}</span>
                    </h3>
                    <h3 className="styleGuide__cell__heading">
                      h1 Color:
                      <span>{templateStyle.h1Color}</span>
                    </h3>
                    <h3 className="styleGuide__cell__heading">
                      h2 Color:
                      <span>{templateStyle.h2Color}</span>
                    </h3>
                  </div>

                  <div className="swatches">
                    <h3>Swatches</h3>

                    <ul className="swatches__triple">
                      <li style={swatchBackground} className="swatches__cell">
                        {templateStyle.backgroundColor}
                      </li>
                      <li style={swatchH1} className="swatches__cell">
                        {templateStyle.h1Color}
                      </li>
                      <li style={swatchH2} className="swatches__cell">
                        {templateStyle.h2Color}
                      </li>
                    </ul>

                  </div>

                  <button>
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
