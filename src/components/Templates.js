import React, { Component } from "react";
import firebase from "../firebase";
import ToolsTemplate from "./builder/ToolsTemplate";

class Templates extends Component {
  constructor() {
    super();
    this.state = {
      template:[],
    };
  }

  componentDidMount = () => {
    const dbRef = firebase.database().ref("template").child("cool");
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
        h1Align: item[1].text.h2.alignment,

        h2TextContent: item[1].text.h2.textContent,
        h2Font: item[1].text.h2.fontFamily,
        h2Color: item[1].text.h2.color,
        h2Align: item[1].text.h2.alignment
      });
    });
    console.log("templates array", templatesArray);
    
    const newTemplatesArray = templatesArray.slice(0,3)


    this.setState ({
      template: newTemplatesArray
    })
  }


  

  /* 

  componentDidMount = () => {
    const dbRef = firebase.database().ref("template");
    dbRef.on('value', snapshot => {
    console.log("template", snapshot.val());
    })
  } */

  // dbRef.once( snapshot =>

  // const allTemplateInfo = snapshot.val()
  //   allTemplateInfo.cool.coolFive
  //   this.setState({
  //     coolFiveTemplateBackgroundColor: allTemplateInfo.cool.coolFive
  //   })
  // })

  // const userID = this.props.user
  // this.setState({
  //   user: userID
  // }, () => {
  //   const dbRef = firebase.database().ref(this.state.template);
  //   dbRef.on('value', snapshot => {
  //     let temp = snapshot.val()
  //     console.log(`template`, snapshot.val());
  //     // if(snapshot.val()) {
  //     this.setState({
  //       templates: temp
  //       // {
  //       //     background: snapshot.val().background,
  //       //     text: snapshot.val().text,
  //       //     social: snapshot.val().social
  //       // }
  //     }, () => {
  //       console.log(`setState`, this.state.userSelections.social.twitter);

  //     })
  //   })
  // })

  

  render() {
   /*  const { template } = this.state */
      return (
        <div>
          {
            this.state.template.map( (templateStyle) => {
              return (
                <div>
                  <h1>{templateStyle.templateTitle}</h1>
              
                    <div className="styleGuide">
                      <div className="styleGuide__cell">
                        <h3 className="styleGuide__cell__heading">
                          Template Title
                          {templateStyle.templateTitle}
                        </h3>
                      </div>
                    </div>
                </div>
                )
            })
            } 
        </div>
      )
    }
}      


export default Templates;
