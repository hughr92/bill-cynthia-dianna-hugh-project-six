import React, { Component } from 'react';
import firebase from '../../firebase';


class CSSView extends Component {

    constructor() {
        super();
        this.state = {
            user: "",
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
        }, () => {
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
                }, () => {
                    console.log(`setState`, this.state.userSelections.social.twitter);

                })
            })
        })
    }

    render() { 


        // HEADER ONE
        const headerOneColor = this.state.userSelections.text.h1.color ? this.state.userSelections.text.h1.color : 'white';
        const headerOneAlign = this.state.userSelections.text.h1.alignment ? this.state.userSelections.text.h1.alignment : 'center';
        const headerOneFont = this.state.userSelections.text.h1.fontFamily ? this.state.userSelections.text.h1.fontFamily : 'sans-serif';
        const headerOneSize = this.state.userSelections.text.h1.size ? `${this.state.userSelections.text.h1.size}px` : '35px';


        // HEADER TWO
        const headerTwoColor = this.state.userSelections.text.h2.color ? this.state.userSelections.text.h2.color : 'white';
        const headerTwoAlign = this.state.userSelections.text.h2.alignment ? this.state.userSelections.text.h2.alignment : 'center';
        const headerTwoFont = this.state.userSelections.text.h2.fontFamily ? this.state.userSelections.text.h2.fontFamily : 'serif';
        const headerTwoSize = this.state.userSelections.text.h2.size ? `${this.state.userSelections.text.h2.size}px` : '15px';


        return (
            <div className="view view__css">
                {/* headerContainer */}
                <div className="view__container">
                    <p className="view__css--class">{`.headerContainer`}<span className="view__css--element--start">{`{`}</span></p>
                    <p className="view__css--property">{`position : absolute`};</p>
                    <p className="view__css--property">{`padding : 0 40px`};</p>
                    <p className="view__css--property">{`top : 50%`};</p>
                    <p className="view__css--property">{`left : 0`};</p>
                    <p className="view__css--property">{`right : 0`};</p>
                    <p className="view__css--property">{`transform : translateY(-50%)`};</p>
                    <p className="view__css--end">{`}`}</p>
                </div>
                {/* h1 */}
                <div className="view__container">
                    <p className="view__css--element">{`h1`}<span className="view__css--element--start">{`{`}</span></p>
                    <p className="view__css--property">{`color : ${headerOneColor};`}</p>
                    <p className="view__css--property">{`font-size : ${headerOneSize};`}</p>
                    <p className="view__css--property">{`font-family : ${headerOneFont};`}</p>
                    <p className="view__css--property">{`text-align : ${headerOneAlign};`}</p>
                    <p className="view__css--end">{`}`}</p>
                </div>
                {/* h2 */}
                <div className="view__container">
                    <p className="view__css--element">{`h2`}<span className="view__css--element--start">{`{`}</span></p>
                    <p className="view__css--property">{`color : ${headerTwoColor};`}</p>
                    <p className="view__css--property">{`font-size : ${headerTwoSize};`}</p>
                    <p className="view__css--property">{`font-family : ${headerTwoFont};`}</p>
                    <p className="view__css--property">{`text-align : ${headerTwoAlign};`}</p>
                    <p className="view__css--end">{`}`}</p>
                </div>
                {/* social */}
                <div className="view__container">
                    <p className="view__css--class">{`.social`}<span className="view__css--element--start">{`{`}</span></p>
                    <p className="view__css--property">{`position : absolute`};</p>
                    <p className="view__css--property">{`right : 30px`};</p>
                    <p className="view__css--property">{`bottom : 30px`};</p>
                    <p className="view__css--end">{`}`}</p>
                </div>
                {/* ul li */}
                <div className="view__container">
                    
                    <p className="view__css--element">{`ul`}<span>, </span>{`li`}<span className="view__css--element--start">{`{`}</span></p>
                    <p className="view__css--property">{`margin : 0px`};</p>
                    <p className="view__css--property">{`padding : 0px`};</p>
                    <p className="view__css--property">{`list-style : none`};</p>
                    <p className="view__css--property">{`float : left`};</p>
                    <p className="view__css--end">{`}`}</p>
                </div>
                {/* icons */}
                <div className="view__container">
                    
                    <p className="view__css--element">{`i`}<span className="view__css--element--start">{`{`}</span></p>
                    <p className="view__css--property">{`color : ${headerOneColor}`};</p>
                   
                    <p className="view__css--end">{`}`}</p>
                </div>
            </div>
        )
    }
}

export default CSSView;