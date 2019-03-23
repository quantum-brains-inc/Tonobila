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

class App extends Component {
 render() {
        return (
            <Router>
                <ScrollToTop>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/annonces" component={Annonces}/>
                        <Route exact path="/article" component={Articles}/>
                        <Route exact path="/error" component={Error}/>
                        <Route exact path="/signup" component={Signup}/>
                        <Route exact path="/signin" component={Signin}/>
                        <Route exact path="/add" component={AddPost}/>
                        <Route path="*" render={() => <Redirect to="/Error" />} />
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

export default App;