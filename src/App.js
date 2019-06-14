import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Annonces from './components/Annonces';
import Error from './components/Error';
import Articles from './components/Articles'
import Signup from './components/Signup'
import Signin from './components/Signin'
import ScrollToTop from 'react-router-scroll-top'
import { BrowserRouter as Router , Route, Switch, Redirect } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import AddPost from './components/AddPost'
import Show from './components/Show';
import Guidachat from './components/Guidachat'
import Condition from './components/Condition'
import Blog from './components/Blog'
import Profile from './components/Profile'
import Reset from './components/resetPassword'
import Setting from './components/Setting'
import contactUs from './components/contactUs'
import {auth} from './Firebase'
import {connect} from 'react-redux'
import  Master2  from './components/multistepEdit/Master2'

class App extends Component {

    componentDidMount() {
        auth.onAuthStateChanged((isLoggedIn) => {
            if (isLoggedIn) {
                this.props.dispatch({ type: "LOGIN"});
            }
        });
    }
    
 render() {
        return (
            <Router>
                <ScrollToTop>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/annonces" component={Annonces}/>
                        <Route exact path="/article" component={Articles}/>
                        <Route exact path="/resetpassword" component={Reset} />
                        <Route exact path="/setting" component={Setting} />
                        <Route exact path="/error" component={Error}/>
                        <Route exact path="/add" component={AddPost} />
                        <Route exact path="/edit/:id" component={Master2} />
                        <Route exact path="/show/:id" component={Show} />
                        <Route exact path="/guidachat" component={Guidachat} />
                        <Route exact path="/condition" component={Condition} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/contact-us" component={contactUs} />
                        <Route path="*" render={() => <Redirect to="/Error" />} />
                        {this.props.isLoggedIn ?
                        <Redirect to="/" />
                        :
                            <React.Fragment>
                            <Route exact path="/signup" component={Signup}/>
                            <Route exact path="/signin" component={Signin}/>
                        </React.Fragment>
                        }
                    
                    </Switch>
                    <Footer/>
                    <CookieConsent
                        location="bottom"
                        buttonText="Got ItT!"
                        style={{ background: "#333333",alignItems:'center',height:'70px' }}
                        buttonStyle={{ color: "#ffae00", fontSize: "13px" ,backgroundColor:'#333333',padding:'10px 25px',border:'2px solid #ffae00'}}
                    >
                    This website uses cookies to enhance the user experience.{" "}
                </CookieConsent>
                </ScrollToTop>
            </Router>
        )
    }
}
const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(App);