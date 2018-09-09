import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import ColorPicker from './ColorPicker';
import firebase from '../../firebase';

class ToolsBackground extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pictures: [],
            color: "" 
        };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        const userID = this.props.user
        console.log(`userID bkgd`, userID);
        
        this.setState({
            pictures: this.state.pictures.concat(picture),
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
                    <ColorPicker />
                </div>
            </div>
        );
    }
}

export default ToolsBackground;