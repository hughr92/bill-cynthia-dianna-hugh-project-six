import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';

import firebase from '../firebase.js'
 
const userSelections =  {
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
    hello =() =>{
        console.log(`hellothere`);
    }

    render() {
        return (
            <div className="homePage">
                    <div>
                        <button onClick={this.login}>Sign In</button>
                        <button onClick={this.anonUser}>Use as Guest</button>
                        <button onClick={this.logout}>LogOut</button>
                    </div>
                <div className="wrapper">
                    <div className="homeContent homeContent--left">
                        <h1 className="homePage--h1">Welcome to the Landing Pad</h1>
                        <h2 className="homePage--h2">Need a hero to save you from crappy landing pages?</h2>
                        <p>Well, you've come to the right place.</p>
                        <p>With all the projects, tests, and crying you're doing during bootcamp, we know you don't have time to work on your portfolio site.</p>
                        <p>Use one of our templates or choose-your-own-font/color adventure, plop in some of your social media usernames, and boom, we will pump out some code for you to copy and paste right into your HTML/CSS pages.  It's that easy.</p>
                        <p>Your site can look sexy AF even without a portfolio.</p>
                        <p>Promise we won't hit you with a plagiarism suit.</p>
                        <div>
                            <Link to="/home/templates">Templates</Link>
                        </div>
                        <div>
                            <Link to={{pathname: `/home/builder`, query:this.state.userUID}}>Builder</Link>
                        </div>
                        
                    </div>
                    <div className="homeContent homeContent--right">

                    </div>

                </div>
            </div>
        )
    }
}

export default Home;