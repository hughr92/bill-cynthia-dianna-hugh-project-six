import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import Template from './Templates_array'

import firebase from '../firebase.js'
 
const userSelections =  {
    background: {

        picture: "",
        backgroundColor: ""
                },
    text: {
        h2: {
            textContent: "",
            size: null,
            fontFamily: "",
            color: "",
            alignment: "",
            

        },
        h1: {
            textContent: "",
            size: "60",
            fontFamily: "",
            color: "",
            alignment: "",
            

        },
        h1color: {
            hex: ''
        },
        h2color: {
            hex: ''
        },
    },
    social: {
        github: "",
        twitter: "",
        linkedin: "",
        email: ""
                }
    }


const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();


class Home extends Component {
    constructor(){
        super();
        this.state = {
            user: null,
            userUID: null
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged((user)=>{
            if (user){
                console.log(`componentdidmount`, user);
                
                this.setState({
                    user:user,
                    userUID: user.uid
                }, ()=> {
                    this.dbRef = firebase.database().ref(this.state.user.uid)
                    console.log(`uid`, this.state.user.uid);
                    

                    this.dbRef.on('value', (snapshot) => {
                        // if there is a value in firebase, then set state the
                        if (snapshot.val() === null) {
                            this.dbRef.set(userSelections)
                            // this.setState({
                                // setting our state based on what is in firebase based on our clicks
                                // this.dbRef.push(userSelections)
                            // })
                        }

                    })
                })
            } 
        })

    }
    login = ()=> {
        auth.signInWithPopup(provider).then((res)=>{       
            console.log('login', res.user);
                
            this.setState({
                user: res.user,
                userUID: res.user.uid
            })
        })
    }
    anonUser = () => {
        firebase.auth().signInAnonymously()
    }
    logout = ()=> {
        auth.signOut().then(()=>{
            this.setState({
                user: null,
                // this is where we set a generic state with empty info
            });
            this.dbRef.off();
        })
    }

    render() {
        return <div className="homePageFull">
            {!this.state.user && (
                <div className="loginOverlay">
                    <div className="loginModal">
                        <div className="modalText">
                            <h1>The Splash Pad</h1>
                            <h3>Login to save your splashes</h3>
                            <p>or</p>
                            <h3>Browse as a Guest</h3>
                        </div>
                        <div className="modalButtonDiv">
                            <button className="modalButton" onClick={this.login}>Sign In</button>
                            <button className="modalButton" onClick={this.anonUser}>Use as Guest</button>
                        </div>
                    </div>
                </div>
            )}
            <section className="homePage homePage--top">
                <div className="wrapper clearfix">
                    <div className="homePage--background">
                    </div>
                    <h1 className="homePage--h1">
                        Welcome to the Splash Pad
                    </h1>
                    <h2 className="homePage--h2">
                        Need a hero to make a splash?
                    </h2>
                </div>
            </section>
            <section className="homePage homePage--about">
                <div className="wrapper clearfix">
                    <h2>About Splash Pad</h2>
                    <p>So you've got hosting and a domain, but you haven't got time to create your website yet.  Sounds like a problem every hackerYou bootcamper has.  We're here to help.</p> 
                    <p>Using Splash Pad, you can create a beautiful splash page with your online contact so you never have to miss another opportunity.</p>
                </div>
            </section>
            <section className="homePage homePage--howTo">
                <div className="wrapper clearfix">
                    <h2>How it works?</h2>
                    <div className="task task1">
                        <h1><i class="far fa-object-group"></i></h1>
                        <p>Choose one of our colour templates</p>
                    </div>
                    <div className="task task2">
                        <h1><i class="far fa-images"></i></h1>
                        <p>Pick a Background Colour or Upload an Image</p>
                    </div>
                    <div className="task task3">
                        <h1><i class="fas fa-align-left"></i></h1>
                        <p>Select your Text Colour + Font Family + Size</p>
                    </div>
                    <div className="task task4">
                        <h1><i class="far fa-envelope"></i></h1>
                        <p>Add your Social Media Usernames and Contact</p>
                    </div>
                </div>
            </section>
            <section className="homePage homePage--start">
                <div className="wrapper clearfix">
                    <h2>Ready to build a splash page?</h2>
                    <p></p>
                    <Link className="startLink"to={`/home/builder/${this.state.userUID}`}>Let's get started</Link>
                </div>
            </section>
        </div>

    }
}

export default Home;

