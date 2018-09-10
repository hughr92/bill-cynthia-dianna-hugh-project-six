import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'

class Templates extends Component {
    render() {
        return <div className="LandingPage">
            <div className="wrapper">
              <h1>TEMPLATES PAGE</h1>

              <div className="styleGuide">
                <div className="styleGuide__cell">
                  <h3 className="styleGuide__cell__heading">
                    Template Title
                  </h3>

                  <div className="styleGuide__cell__content">
                    <h2 className="styleGuide__cell__content__fontfamily">
                      font family
                    </h2>
                    <h2 className="styleGuide__cell__content__fontcolor">
                      font color
                    </h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Amet quae sunt minima corporis
                      sapiente excepturi dicta quibusdam atque veritatis
                      cumque?
                    </p>
                  </div>

                  <div className="styleGuide__cell__swatches" />

                  <div className="styleGuide__cell__templateImage" />
                  
                </div>
              </div>
            </div>
          </div>;
    }
}

export default Templates; 