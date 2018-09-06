import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'
import firebase from './firebase'

const userSelections = {
    background: {
        image: false,
        color: ""
    },
    text: {
        h2: {
            size: null,
            fontFamily: "",
            color: "",
            alignment: "",

        },
        h1: {
            size: null,
            fontFamily: "",
            color: "",
            alignment: "",

        },
    },
    social: {
        github: "",
        twitter: "",
        linkedin: "",
        email: ""
    }
}

const dbRef = firebase.database().ref()

class LandingPage extends Component {
    // componentDidMount() {
    //     dbRef.on('value',(snapshot)=> {
    //         console.log(snapshot.val());
            
    //     })
    // }
    // createDBUser = () => {
    //     dbRef.push({userSelections})
    // }
    render() {
        return (
            <div className="LandingPage">
                <Link to="/home" >Home</Link>
                <h1>This is the landing page</h1>
            </div>
        )
    }
}

export default LandingPage; 