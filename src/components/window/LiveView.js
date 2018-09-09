import React, { Component } from 'react';
import firebase from '../../firebase';

class LiveView extends Component {
    constructor () {
        super();
        this.state = {
            user: "",
            twitter: "diannakylee",
            userSelections: {
                background: {
                    backgroundColor: "",
                    user: ""
                },
                text: {
                    h2: {
                        size: null,
                        fontFamily: "",
                        color: "",
                        alignment: "",
                        textContent: ""

                    },
                    h1: {
                        size: null,
                        fontFamily: "",
                        color: "",
                        alignment: "",
                        textContent: ""

                    },
                },
                social: {
                    email: "",
                    github: "",
                    linkedin: "",
                    twitter: "",
                    user: ""
                }
            }
        }
    }
    componentDidMount = () => {
        const userID = this.props.user
        this.setState({
            user: userID
        },() => {
            const dbRef = firebase.database().ref(this.state.user);
            dbRef.on('value', snapshot => {
                let dog = snapshot.val()
                console.log(`liveview`, snapshot.val());
                // if(snapshot.val()) {
                    this.setState({
                        userSelections: dog
                        // {
                        //     background: snapshot.val().background,
                        //     text: snapshot.val().text,
                        //     social: snapshot.val().social
                        // }
                    },()=>{
                        console.log(`setState`, this.state.userSelections.social.twitter);

                    })
            })
        })
    }
    render(){
        return(
            <div>
                <h1>LiveView</h1>
                <div>
                    <div className="social">
                        <ul>
                            <li><a href={`https://ca.linkedin.com/in/${this.state.userSelections.social.linkedin}`}><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href={`https://github.com/${this.state.userSelections.social.github}`}><i class="fab fa-github"></i></a></li>
                            <li><a href={`mailto:${this.state.userSelections.social.email}`}><i class="far fa-envelope"></i></a></li>
                            <li><a href={`https://twitter.com/${this.state.userSelections.social.twitter}`}><i class="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default LiveView;

