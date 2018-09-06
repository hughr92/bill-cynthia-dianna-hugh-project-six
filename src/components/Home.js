import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';

import firebase from '../firebase.js'




const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class Home extends Component {
    constructor(){
        super();
        this.state = {
            user: {
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
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged((user)=>{
            if (user){
                this.setState({
                    user:user
                }, ()=> {
                    this.dbRef = firebase.database().ref(this.state.user.uid);

                    this.dbRef.on('value', (snapshot)=>{
                        if(snapshot.val()){
                            this.setState({
                                user: snapshot.val().user
                                // assign the object - double check this
                            })
                        }
                    })
                })
            }
        })
    }

    login = ()=> {
        auth.signInWithPopup(provider).then((res)=>{
            console.log(res.user);
            
            this.setState({
                user: res.user
                // check this again
            })
        })
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
        return (
            <div>
                <h1>This is the Home Page.</h1>
                <Link to="/home/templates">Templates</Link>
                <Link to="/home/builder">Builder</Link>
            </div>
        )
    }
}

export default Home;