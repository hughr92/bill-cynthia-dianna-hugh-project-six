import React, { Component } from 'react';
import NavBar from "./compiler/NavBar"
import Main from "./Main";

class Compiler extends Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <div>
                <NavBar />
                <Main />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Compiler;