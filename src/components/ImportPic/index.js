import React , {Component} from 'react';
import './importPic.css';
import Icon from '../../images/photoPost.svg';
import FileUploader from "react-firebase-file-uploader";
import firebase from "../../Firebase"

class ImportPic extends Component{
    state = {
        filenames: [],
        downloadURLs: [],
        isUploading: false,
        progress: 0,
    };

        handleChangeUsername = event =>
            this.setState({ username: event.target.value });
        handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
        handleProgress = progress => this.setState({ progress });
        handleUploadError = error => {
            this.setState({ isUploading: false });
            console.error(error);
        };
    handleUploadSuccess = async filename => {
        const downloadURL = await firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL();

        this.setState(oldState => ({
            filenames: [...oldState.filenames, filename],
            downloadURLs: [...oldState.downloadURLs, downloadURL],
            uploadProgress: 100,
            isUploading: false
        }));
    };

    render() { 
  return (
      <div>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}
            <form>
            <FileUploader
                accept="image/*"
                name="image"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                multiple
            />
          </form>
          <div>{this.state.downloadURLs.map((downloadURL, i) => {
              return <img key={i} src={downloadURL} />;
          })}</div>
      </div>
        
  )
}
}
export default ImportPic;