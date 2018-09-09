import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import ColorPicker from './ColorPicker';
import firebase from '../../firebase';

class ToolsBackground extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pictures: [],
            backgroundColor: '#fff',
            user: ""
        };
        this.onDrop = this.onDrop.bind(this);
    }
    componentDidMount = () => {
        const userID = this.props.user
        this.setState({
            user: userID
        }, () => {
            const dbRef = firebase.database().ref(this.state.user)
            console.log(`toolsbkgd did mount`, dbRef );
            
        })
    }
    getColor = (color) => {
        this.setState ({
            backgroundColor: color.hex
        })
    }
    handleChangeComplete = (color) => {
        this.setState({
            backgroundColor: color.hex
        });
    };
    onDrop(picture) {
        // const userID = this.props.user
        // console.log(`userID bkgd`, userID);
        
        this.setState({
            pictures: this.state.pictures.concat(picture),
        }, () => {
            const dbRef = firebase.database().ref(this.state.user)
            dbRef.on('value', snapshot => {
                // dbRef.update(this.state.social);
                dbRef.update(this.state.backgroundColor);

            })
        });
        // Need to push this information to firebase if we are going to store user profiles
    }

    render() {
        return (
            <div className="tools tools_background">
                <h1>Background Update</h1>
                <div className="background background1">
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={this.onDrop}
                        imgExtension={[`.jpg`, `.gif`, `.png`, `.gif`]}
                        maxFileSize={5242880}
                        withPreview={true}
                        singleImage={true}
                    />
                </div>
                <div className="background background2">
                    <ColorPicker color={this.state.backgroundColor} onChangeComplete={this.handleChangeComplete} getColor = {this.getColor}/>
                </div>
            </div>
        );
    }
}

export default ToolsBackground;