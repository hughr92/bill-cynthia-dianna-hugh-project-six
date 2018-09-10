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
                let user = snapshot.val()
                console.log(`liveview`, snapshot.val());
                // if(snapshot.val()) {
                    this.setState({
                        userSelections: user
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
        // STYLING

        // BACKGROUND
        const backgroundColor = this.state.userSelections.background.backgroundColor ? this.state.userSelections.background.backgroundColor : '#30b8b2';

        const backgroundStyle = {
            background: backgroundColor
        }

        // SOCIAL
        const socialColor = this.state.userSelections.text.h1.color ? this.state.userSelections.text.h1.color : 'white';

        const socialStyle = {
            color: socialColor,
            margin: '10px',
        }


        // HEADER ONE
        const headerOneColor = this.state.userSelections.text.h1.color ? this.state.userSelections.text.h1.color : 'white';
        const headerOneAlign = this.state.userSelections.text.h1.alignment ? this.state.userSelections.text.h1.alignment : 'center';
        const headerOneFont = this.state.userSelections.text.h1.fontFamily ? this.state.userSelections.text.h1.fontFamily : 'sans-serif';
        const headerOneSize = this.state.userSelections.text.h1.size ? this.state.userSelections.text.h1.size : '35px';

        const headerOneStyle = {
            color: headerOneColor,
            textAlign: headerOneAlign,
            fontFamily: headerOneFont,
            fontSize: headerOneSize
        }
        
        // HEADER TWO
        const headerTwoColor = this.state.userSelections.text.h2.color ? this.state.userSelections.text.h2.color : 'white';
        const headerTwoAlign = this.state.userSelections.text.h2.alignment ? this.state.userSelections.text.h2.alignment : 'center';
        const headerTwoFont = this.state.userSelections.text.h2.fontFamily ? this.state.userSelections.text.h2.fontFamily : 'serif';
        const headerTwoSize = this.state.userSelections.text.h2.size ? this.state.userSelections.text.h2.size : '15px';

        const headerTwoStyle = {
            color: headerTwoColor,
            textAlign: headerTwoAlign,
            fontFamily: headerTwoFont,
            fontSize: headerTwoSize
        }



        return(
            <div className="view view__live" style={backgroundStyle}>
                <div>
                    <div className="liveView__header__container">
                        <h1 className="liveView__header__one" style={headerOneStyle}>{this.state.userSelections.text.h1.textContent ? this.state.userSelections.text.h1.textContent : 'header'}</h1>
                        <h2 className="liveView__header__two" style={headerTwoStyle}>{this.state.userSelections.text.h2.textContent ? this.state.userSelections.text.h2.textContent : 'subheader'}</h2>
                    </div>
                    <div className="social">
                        <ul>
                            {this.state.userSelections.social.linkedin  && (
                                <li className="liveView__icon"><a href={`https://ca.linkedin.com/in/${this.state.userSelections.social.linkedin}`}><i class="fab fa-linkedin-in" style={socialStyle}></i></a></li>
                            )}

                            {this.state.userSelections.social.github  && (
                                <li><a href={`https://github.com/${this.state.userSelections.social.github}`}><i class="fab fa-github" style={socialStyle}></i></a></li>
                            )}

                            {this.state.userSelections.social.email && (
                                <li><a href={`mailto:${this.state.userSelections.social.email}`}><i class="far fa-envelope" style={socialStyle}></i></a></li>
                            )}

                            {this.state.userSelections.social.twitter && (
                                <li><a href={`https://twitter.com/${this.state.userSelections.social.twitter}`}><i class="fab fa-twitter" style={socialStyle}></i></a></li>
                            )}
                            
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default LiveView;

