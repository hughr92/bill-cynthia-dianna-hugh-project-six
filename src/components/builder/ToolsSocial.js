import React, { Component } from 'react';
import firebase from '../../firebase';


// const  dbRef = firebase.database().ref(this.state.user.uid)
// const dbRef = firebase.database().ref(this.props.user.user.uid);


class ToolsSocial extends Component {
    constructor () {
        super();
        this.state = {
                github: "",
                twitter: "",
                linkedin: "",
                email: ""

        }
    }
    setUser = () => {
        console.log(`firebase`, this.props);
        const dbRef = firebase.database().ref(this.props.user.user)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`submit`, e.target.id);
        this.setUser();
    }
    // addToDB = (email) => {
    //     console.log(`addToDB`, this.state.uid);
        
    //     this.dbRef.push(this.state.uid.email)
    // }    
    handleChange =(e)=> {
        console.log(`change`, e.target.value);
        console.log(`change`, e.target.id);
        // console.log(`propsintoolssocial`, this.props.user);
        

        this.setState ({
            [e.target.id] : e.target.value
        })

    }

    render() {

        
        return  <div className="tools__container--social__selection">
                <h1>ToolsSocial</h1>

                    <form onSubmit={this.handleSubmit}>
                        <input type="checkbox" name="social" value="email" id="socialEmail"/>
                        <label for="socialEmail">Email</label>
                        <input onChange={this.handleChange} type="email" name="social" placeholder="Enter email" id="email" value={this.state.email}/>

                        <input type="checkbox" name="social" value="twitter" id="socialTwitter" /> 
                        <label for="socialTwitter">Twitter</label>
                        <input onChange={this.handleChange} type="text" placeholder="Enter Twitter username" maxLength="20" id="twitter"/>

                        <input type="checkbox" name="social" value="github" id="socialGithub" /> 
                        <label for="socialGithub">Github</label>
                        <input onChange={this.handleChange} type="text" placeholder="Enter Github username" maxLength="20" id="github"/>

                        <input type="checkbox" name="social" value="linkedin" id="socialLinkedin" /> 
                        <label for="socialLinkedin">Linkedin</label>
                        <input onChange={this.handleChange} type="text" placeholder="Enter Linkedin username" id="linkedin" maxLength="20" />

                        <input type="submit" />
                
                    </form>
                </div>
            
        
    }
}

export default ToolsSocial;