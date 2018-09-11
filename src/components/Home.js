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
        return <div className="homePage">
            {!this.state.user && (
                <div className="loginOverlay">
                    <div className="loginModal">

                        <div className="modalText">
                            <h1>The Splash Pad</h1>
                            <p>Wanna get started?  Login to save your heros or Use as a guest</p>
                        </div>
                        <div className="modalButtonDiv">
                            <button className="modalButton" onClick={this.login}>Sign In</button>
                            <button className="modalButton" onClick={this.anonUser}>Use as Guest</button>
                        </div>
                    </div>
                    </div>
            )}
            <div className="wrapper">
                <div className="homeContent">
                    <div className="homeContent--top">
                    </div>
                    <h1 className="homePage--h1">
                    Welcome to the Splash Pad
                    </h1>
                    <h2 className="homePage--h2">
                    Need a hero to make a splash?
                    </h2>
                    <div className="walkThrough">
                        <div className="walkThrough__block">
                            <div className="walkThrough__block--image">
                                <h1><i class="far fa-smile-wink"></i></h1>
                            </div>
                            <div className="walkThrough__block--text">
                                <p>Do you need a page to show your work? At Splash Pad, you</p>
                            </div>  
                        </div>
                        <div className="walkThrough__block">
                            <div className="walkThrough__block--text">
                                <p>Or you can use one of our template styles.</p>
                            </div>
                            <div className="walkThrough__block--image">
                                <h1><i class="far fa-object-group"></i></h1>
                            </div>
                        </div>
                        <div className="walkThrough__block">
                            <div className="walkThrough__block--image">
                                <h1><i class="far fa-images"></i></h1>
                            </div>
                            <div className="walkThrough__block--text">
                                <p>On our builder page, start off by choosing your background color or image.</p>
                            </div>
                        </div>
                        <div className="walkThrough__block">
                            <div className="walkThrough__block--text">
                                <p>Put in your name and a tagline, and choose your font styles.</p>
                            
                            </div>
                            <div className="walkThrough__block--image">
                                <h1><i class="fas fa-align-left"></i></h1>
                            </div>
                        </div>
                        <div className="walkThrough__block">
                            <div className="walkThrough__block--image">
                                <h1>
                                    <i class="fab fa-internet-explorer"></i>
                                </h1>
                            </div>
                            <div className="walkThrough__block--text">
                            
                                <p>Insert your points of contact. </p>
                            </div>
                        </div>
                    </div>
                    {/* <Link to="/home/templates">Templates</Link> */}
                </div>
                <div className="homePage--getStarted">
                    <Link
                    to= {`/home/builder/${this.state.userUID}`}>Ready to Get Started</Link>
                    {/* <Link
                    to={{
                        pathname: `/home/builder`,
                        query: this.state.userUID
                    }}>Builder</Link> */}
                </div>
                </div>
                <div className="homeContent homeContent--right" />
            </div>
        
    }
}

export default Home;