import React, { Component } from 'react'
import firebase from '../../Firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import './setting.css'
export default class Setting extends Component {
    constructor(props) {
    super(props);

    this.state = {
        nom: '',
        email:'',
        progress: 0,
        avatarURL: ""};
        
    }

    handleChangeUsername = event =>
        this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        var user = firebase.auth().currentUser
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }))
            .then(
                user.updateProfile({
                    photoURL: this.state.avatarURL                  
                }),
            )
            .then(
                console.log(this.state.avatarURL)
            )
    };

    handleChange = (event) => {
         this.setState({nom: event.target.value});
    }

    handleChange_email = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: this.state.nom,
            })
    }
    nn = () => {
        var user = firebase.auth().currentUser
        user.updateProfile({
            photoURL: this.state.avatarURL
        })
    }

    email_change = (event) => {
        event.preventDefault();
        var user = firebase.auth().currentUser;
        console.log(this.state.email);
        console.log(user.email);
        user.updateEmail(this.state.email);
    }

    render() {
        return (

            <div className="SignupMain">
            <h4>Paramètres</h4>
                <div className="card para">
                    <form onSubmit={this.handleSubmit}>
                        <label>Changer Votre Nom
                        <input name="nom" id="nom" type="text" value={this.state.nom} onChange={this.handleChange}/>
                            <button>envoyer</button>
                        </label>
                    </form>  
                </div>
                <div className="card email_change">
                    <form onSubmit={this.email_change}>
                        <label>Changer Votre Email
                        <input name="email" id="email" type="text" value={this.state.email} onChange={this.handleChange_email} />
                            <button>envoyer</button>
                        </label>
                    </form>
                </div>
                <div >
                    <div className="profile_upload">
                    {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                    {this.state.avatarURL && this.nn()}
                    <CustomUploadButton
                        accept="image/*"
                        storageRef={firebase.storage().ref('images')}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                        style={{ backgroundColor: '#ffae00', color: 'white', padding: 10, borderRadius: 4 }}
                    >
                        Changer l'image de profile
                            </CustomUploadButton>
                    </div>
                </div> 
            </div>
            
        )
    }
}
