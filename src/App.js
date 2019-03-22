import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import advancedSearch from './components/AdvancedSearch'
import Annonces from './components/Annonces';
import Error from './components/Error';
// import Signup from './components/Signup'
import { BrowserRouter as Router , Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
 render() {
        return (
                <Router>
                    <div>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/annonces" component={Annonces}/>
                            <Route exact path="/ff" component={Annonces}/>
                            <Route exact path="/error" component={Error}/>
                            {/* <Route exact path="/signup" component={Signup}/> */}
                            <Route path="*" render={() => <Redirect to="/Error" />} />
                        </Switch>
                        <Footer/>
                    </div>
                </Router>
        )
    }
}

export default App;