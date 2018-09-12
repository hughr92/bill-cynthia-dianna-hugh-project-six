import React, { Component } from 'react';
import firebase from '../../firebase';


class ToolsSocial extends Component {
    constructor () {
        super();
        this.state = {
                github: "",
                twitter: "",
                linkedin: "",
                email: "",
                user:""

        }
    }
    componentDidMount = () => {
        const userID = this.props.user;
        const dbRef = firebase.database().ref(`${userID}/social`);
        dbRef.on('value', (snapshot) => {
            this.setState(snapshot.val())
            })
        }   
        // this.setState({
        //     user: userID
        // }, ()=> {
            

        // }) 

    // }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleChange =(e)=> {
        console.log(`change`, e.target.value);
        console.log(`change`, e.target.id);
        // console.log(`propsintoolssocial`, this.props.user);
        
        this.setState ({
            [e.target.id] : e.target.value
        }, ()=> {
            const userID = this.props.user;
            console.log('social state',this.state);
            const dbRef = firebase.database().ref(userID)
            console.log(`toolsocial`, dbRef);
            
            dbRef.on('value', snapshot => {
                // dbRef.update(this.state.social);
                dbRef.child("social").update(this.state);                
            })
        })
    }

    render() {
        console.log('render fire')
        return  (<div className="tools tools__container--social__selection">
                <h3>Enter Your Social Media Info</h3>

                    <form className="socialForm" onSubmit={this.handleSubmit}>
                    <div className="socialForm--half">
                        <label for="socialEmail">Email</label>
                        <input className="socialForm--input" onChange={this.handleChange} type="email" name="social" placeholder="Enter email" id="email" value={this.state.email}/>

                        <label for="socialTwitter">Twitter</label>
                        <input className="socialForm--input" onChange={this.handleChange} type="text" placeholder="Enter Twitter username" maxLength="20" id="twitter" value={this.state.twitter}/>
                    </div>
                    <div className="socialForm--half">
                        <label for="socialGithub">Github</label>
                        <input className="socialForm--input" onChange={this.handleChange} id="github" type="text" placeholder="Enter Github username" maxLength="20" id="github" value={this.state.github}/>

                        <label for="socialLinkedin">Linkedin</label>
                        <input className="socialForm--input" onChange={this.handleChange} id="linkedin" type="text" placeholder="Enter Linkedin username" id="linkedin" value={this.state.linkedin} maxLength="20" />
                    </div>
                
                    </form>
                </div>
            
        )
    }
}

export default ToolsSocial;