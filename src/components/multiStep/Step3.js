import React, { Component } from 'react';
import ImportPic from '../ImportPic';
import FileUploader from "react-firebase-file-uploader";
import firebase from "../../Firebase"

export default class Step3 extends Component {  
    
    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <div className="steps">
                <div className="addEditDescription">
                    {/* <form> */}
                        <label htmlFor="description" >Description</label>
                        <textarea onChange={this.props.handleChange} id="description" value={this.props.description} name="description" cols="30" rows="10" ></textarea>
                    {/* </form> */}
                </div>
            </div>
        )
    }
}