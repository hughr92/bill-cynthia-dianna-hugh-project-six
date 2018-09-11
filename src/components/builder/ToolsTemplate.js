import React, { Component } from 'react';
import firebase from "../../firebase";
import Templates from "../Templates";


class ToolsTemplate extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  handleChange = e => {
    // console.log(e.target.id);
    this.setState({
    
    });
  };

  render() {
    return (
      <div className="LandingPage">
        <div className="wrapper">
          <h1>TEMPLATES PAGE</h1>

          <Templates />
        </div>
      </div>
    );
  }
};

export default ToolsTemplate; 

