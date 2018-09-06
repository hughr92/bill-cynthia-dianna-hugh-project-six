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
                    this.dbRef = firebase.database().ref(this.state.user.displayName).set(userSelections);

                    // this.dbRef.on('value', (snapshot)=>{
                    //     if(snapshot.val()){
                    //         this.setState({
                    //             user: snapshot.val().user
                    //             // assign the object - double check this
                    //         })
                    //     }
                    // })
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