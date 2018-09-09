import React, { Component } from 'react';
import firebase from '../../firebase';

class LiveView extends Component {
    constructor () {
        super();
        this.state = {
            user: "",
        }
    }
    // componentDidMount = () => {
    //     const userID = this.props.user
    //     this.setState({
    //         user: userID
    //     },() => {
    //         const dbRef = firebase.database().ref(this.state.user);
    //         dbRef.on('value', snapshot => {
    //             console.log(`liveviewdb`, snapshot);
                
    //             // dbRef.update(this.state.backgroundColor);

    //         })
    //     })
    // }
    // pullDatafromDB = () => {
    //     const dbRef = firebase.database().ref(this.state.user);
        
    //     console.log(`liveviewdb`, dbRef);
    //     // this.dbRef.on('value', snapshot => {

    //     // })
        
    // }
    render(){
        return(
            <div>
                <h1>LiveView</h1>

            </div>
        )
    }
}

export default LiveView;