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
      <div className="tools">
        <div className="wrapper">
          {/* <h1>TEMPLATES PAGE</h1> */}

          <Templates user={this.props.user}/>
        </div>
      </div>
    );
  }
};

export default ToolsTemplate; 

