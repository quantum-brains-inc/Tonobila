import React, {Component} from 'react';
import './navbar.css'
import logo from '../../images/logo.svg';
import { NavLink, Link, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import firebase, { auth } from '../../Firebase'


class Navbar extends Component{
  state={
    burgclicked:false
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.props.dispatch({ type: "LOGOUT" })
        this.props.history.push('/')
      });
  }

  render(){
    let user = firebase.auth().currentUser;
    let barONE=[];
    let barTWO=[];
    let barTHREE=[];
    let navClasses=[];

    const clickLinksHandler=()=>{
      this.setState({burgerClicked:false})
    }
    const burgerClicked=()=>{ 
      this.setState({burgerClicked: !this.state.burgerClicked});
    }
    const burger=(
      <div id="bars" className='burger-menu' onClick={burgerClicked}>
        <div className={barONE}></div>
        <div className={barTWO}></div>
        <div className={barTHREE}></div>
      </div>
  );
    if(this.state.burgerClicked){
      barONE.push('firstBAR');
      barTWO.push('secBAR');
      barTHREE.push('thirdBAR');
      navClasses.push('navOpen');
    }else{
      barONE=[];
      barTWO=[];
      barTHREE=[];
    }
    return(
    <div className='Navbar'>
      <nav className={navClasses}>
        <div className="logo-cont"><Link to='/'><img src={logo} className="logo" alt="Logo"/></Link></div>
        <div className="menu">
          <ul>
            <li><NavLink to="/" onClick={clickLinksHandler} >Accueil</NavLink></li>
            <li><NavLink to="/annonces" onClick={clickLinksHandler} >Annonces</NavLink></li>
            <li><NavLink to="/blog" onClick={clickLinksHandler} >Blog</NavLink></li>
            <li><NavLink to="/contact-us" onClick={clickLinksHandler} >Contactez nous</NavLink></li>
              {this.props.isLoggedIn == false ?
            <React.Fragment>
                <li className='sign-in' id="bebe"><NavLink to="/signin"><button onClick={clickLinksHandler}>Connexion</button></NavLink></li>
                <li className='sign-up'><NavLink to="/signup"><button onClick={clickLinksHandler}>Inscription</button></NavLink></li>
              </React.Fragment>
                : <React.Fragment>
                  <li>{user.displayName}</li>
                  <div className="dropdown">
                  <li><img className="user_img" src={user.photoURL}></img></li>
                    <div className="dropdown-content">
                      <li><NavLink to={`profile/${user.uid}`}>Profile</NavLink></li>
                      <li><NavLink to="/setting">Paramètres</NavLink></li>
                      <li><a onClick={this.logout}>Déconnexion</a></li>
                    </div>
                  </div>
                </React.Fragment>}
          </ul>
        </div>
        {burger}
      </nav>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default withRouter(connect(mapStateToProps)(Navbar))
