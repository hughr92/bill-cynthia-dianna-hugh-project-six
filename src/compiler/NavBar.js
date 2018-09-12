import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'
import firebase from '../firebase';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            // userUID: user.uid
        }
    }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(`componentdidmount`, user);

                this.setState({
                    user: user,
                    userUID: user.uid
                }, () => {
                    this.dbRef = firebase.database().ref(this.state.user.uid)
                    console.log(`uid`, this.state.user.uid);
                })
            }
        })

    }
    login = () => {
        auth.signInWithPopup(provider).then((res) => {
            console.log('login', res.user);

            this.setState({
                user: res.user,
                userUID: res.user.uid
            })
        })
    }
    logout = () => {
        firebase.auth().signOut();
        this.props.history.push(`/home`);
        console.log(`logout`);
    }
    render() {
        return (
            // ternary statement - if not logged in show "login", else show logout
            <div className="navBar">
                <div className="wrapper">
                    <div className="logo">
                        <img src="../assets/logo-bw.png" alt=""/>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                        
                            <li>
                                <Link onClick={this.logout}to="/home">Logout</Link>
                            </li>
                            

                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavBar; 