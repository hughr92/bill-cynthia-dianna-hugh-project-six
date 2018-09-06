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
            user: null
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged((user)=>{
            if (user){
                console.log(`componentdidmount`, user);
                
                this.setState({
                    user:user
                }, ()=> {
<<<<<<< HEAD
                    this.dbRef = firebase.database().ref(this.state.user.uid)

                    this.dbRef.on('value', (snapshot) => {
                        // if there is a value in firebase, then set state the
                        if (snapshot.val() === null) {
                            this.dbRef.push(userSelections)
                            // this.setState({
                                // setting our state based on what is in firebase based on our clicks
                                // this.dbRef.push(userSelections)
                            // })
                        }
                        console.log(snapshot.val());

                    })
=======
                    this.dbRef = firebase.database().ref(this.state.user.displayName).push(userSelections);

                    // this.dbRef.on('value', (snapshot)=>{
                    //     if(snapshot.val()){
                    //         this.setState({
                    //             user: snapshot.val().user
                    //             // assign the object - double check this
                    //         })
                    //     }
                    // })
>>>>>>> c45f9e9879d5eff898ce2f776b307bef16c530de
                })
            } 
        })

    }

    login = ()=> {
        auth.signInWithPopup(provider).then((res)=>{       
            console.log('login', res);
                
            this.setState({
                user: res.user
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
            <div>
                <div>
                    <button onClick={this.login}>Sign In</button>
                    <button onClick={this.anonUser}>Use as Guest</button>
                    <button onClick={this.logout}>LogOut</button>
                </div>
                <h1>This is the Home Page.</h1>
                <Link to="/home/templates">Templates</Link>
                <Link to="/home/builder">Builder</Link>
            </div>
        )
    }
}

export default Home;