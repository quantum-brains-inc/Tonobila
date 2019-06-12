import React, { Component } from 'react'
import firebase  from '../../Firebase.js';


export default class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ email: event.target.value });
    }

    handleSubmit(event) {
        var auth = firebase.auth();
        var email = this.state.email
        auth.sendPasswordResetEmail(email);
        event.preventDefault();
    }

    render() {
        return (
            <div className="SignupMain">
                <h2>Réinitialisation Du Mot De Passe</h2>
                <div className="Signup_form card">
                    <form>
                        <label>Adresse Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleChange}></input>
                        <button onClick={this.handleSubmit}>Envoyer</button>
                    </form>
                </div>
            </div>
        )
    }
}
