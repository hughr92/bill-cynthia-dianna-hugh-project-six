import React, { Component } from 'react';
import FileUploader from 'react-firebase-file-uploader';
import ColorPicker from './ColorPicker';
import firebase from '../../firebase';

class ToolsBackground extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            picture: "",
            backgroundColor: '#fff',
            user: "",
            isUploading: false,
            progress: 0,
            avatarURL: ''
        };
    }
    componentDidMount = () => {
        const userID = this.props.user
        this.setState({
            user: userID
        })
    }
    getColor = (color) => {
        this.setState ({
            backgroundColor: color.hex
        }, () => {
            const dbRef = firebase.database().ref(this.state.user)
            console.log(`get color`, dbRef);
            dbRef.on('value', snapshot => {
                dbRef.child("background").update(this.state)
            })        
        })
    }
    handleChangeComplete = (color) => {
        console.log(`handlechange`);
        
        this.setState({
            backgroundColor: color.hex
        });
    };
    // handleChangeUsername = (event) => this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = (progress) => this.setState({ progress });
    handleUploadError = (error) => {
        this.setState({ isUploading: false });
        console.error(error);
    }
    handleUploadSuccess = (filename) => {
        console.log(`success`);
        
        this.setState({ progress: 100, isUploading: false });
        firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({ 
            avatarURL: url
            }, ()=> {
                const dbRef = firebase.database().ref(this.state.user);

                dbRef.on('value', snapshot => {
                    dbRef.child('background').child('picture').set('this.state.picture')
                })
            })
        );
    };
    render() {
        return (
            <div className="tools tools_background">
                <h1>Background Update</h1>
                <form className="background background1">
                    <FileUploader
                        accept="image/*"
                        name="avatar"
                        storageRef={firebase.storage().ref('images')}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                </form>
                <div className="background background2">
                    <ColorPicker color={this.state.backgroundColor} onChangeComplete={this.handleChangeComplete} getColor = {this.getColor}/>
                </div>
            </div>
        );
    }
}

export default ToolsBackground;