import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Annonces from './components/Annonces';
import Error from './components/Error';
import Articles from './components/Articles'
import Articles1 from './components/Articles/Articles1'
import Articles2 from './components/Articles/Articles2'
import Articles3 from './components/Articles/Articles3'
import Articles4 from './components/Articles/Articles4'
import Articles5 from './components/Articles/Articles5'
import Articles6 from './components/Articles/Articles6'
import About from './components/About_us'
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
                        <Route exact path="/articles1" component={Articles1}/>
                        <Route exact path="/articles2" component={Articles2}/>
                        <Route exact path="/articles3" component={Articles3}/>
                        <Route exact path="/articles4" component={Articles4}/>
                        <Route exact path="/articles5" component={Articles5}/>
                        <Route exact path="/articles6" component={Articles6}/>
                        <Route exact path="/resetpassword" component={Reset} />
                        <Route exact path="/setting" component={Setting} />
                        <Route exact path="/error" component={Error}/>
                        <Route exact path="/add" component={AddPost} />
                        <Route exact path="/edit/:id" component={Master2} />
                        <Route exact path="/show/:id" component={Show} />
                        <Route exact path="/guidachat" component={Guidachat} />
                        <Route exact path="/condition" component={Condition} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/profile/:id" component={Profile} />
                        <Route exact path="/contact-us" component={contactUs} />
                        {this.props.isLoggedIn ?
                        <Redirect to="/" />
                        :
                            <React.Fragment>
                            <Route exact path="/signup" component={Signup}/>
                            <Route exact path="/signin" component={Signin}/>
                        </React.Fragment>
                        }
                        <Route path="*" render={() => <Redirect to="/Error" />} />
                    </Switch>
                    <Footer/>
                    <CookieConsent
                        location="bottom"
                        buttonText="J'accept"
                        style={{ background: "#333333",alignItems:'center',height:'70px' }}
                        buttonStyle={{ color: "#ffae00", fontSize: "13px" ,backgroundColor:'#333333',padding:'10px 25px',border:'2px solid #ffae00'}}
                    >
                    En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de Cookies.{" "}
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