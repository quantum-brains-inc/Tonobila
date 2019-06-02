import React, { Component } from 'react';
import './signup.css';
import { connect} from "react-redux";
import firebase, { auth, provider , faceProvider } from '../../Firebase';


class Signup extends Component {

    state = {
        email: '',
        password: '',
        error: null,
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        };
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
            this.props.history.push('/');
            })
            .catch((error) => {
            this.setState({ error: error });
            });
        };



    login = () => {
        auth.signInWithRedirect(provider)
            .then((result) => {
                this.props.dispatch({ type: "LOGIN" });
            });
    }
    loginFacebook = () => {
        auth.signInWithRedirect(faceProvider)
            .then((result) => {
                this.props.dispatch({ type: "LOGIN" });
            });
    }
    logout = () => {
        auth.signOut()
            .then(() => {
                this.props.dispatch({ type: "LOGOUT" })
            });
    }
    render() {
        const { email, password, error } = this.state;
        return (
            <div className="SignupMain" id="SignupMain">
                <div className="SignupCard">
                    <h1>Sign Up</h1>
                    {/* <p>{error.message}</p> */}
                    <div class="google-button card" onClick={this.login}>
                        <span class="google-button__icon google-button__icon--plus">
                            <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg"><path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335"/><path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05"/><path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4"/><path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853"/></svg>
                        </span>
                        <span class="google-button__text">Sign Up With Google</span>
                    </div>
                    <div  class="google-button card" onClick={this.loginFacebook}>
                        <span class="google-button__icon google-button__icon--plus">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 266.893 266.895" enable-background="new 0 0 266.893 266.895">
                                <path id="Blue_1_" fill="#3C5A99" d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812
                                    c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225
                                    H248.082z"/>
                                <path id="f" fill="#FFFFFF" d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935
                                    l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585
                                    v99.803H182.409z"/>
                            </svg>
                        </span>
                            <span class="google-button__text">Sign Up With Facebook</span>
                    </div>
                </div>
                <div className="Signup_form card" onSubmit={this.handleSubmit}>
                    <form >
                        <label>Full Name</label>
                        <input type="text"/>

                        <label>E-mail</label>
                        <input type="email" value={email} onChange={this.handleInputChange} name="email" />

                        <label>Password</label>
                        <input type="text" value={password} onChange={this.handleInputChange} name="password" />

                        <label>Confirm Password</label>
                        <input type="text"/>
                        <div>
                            <a href="">Have an Account?</a>
                            <button>Sign Up</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(Signup);