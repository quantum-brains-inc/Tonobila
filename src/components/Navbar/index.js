import React, {Component} from 'react';
import './navbar.css'
import logo from '../../images/logo.svg';
import {NavLink, Link} from "react-router-dom";


class Navbar extends Component{
  state={
    burgclicked:false
  } 
  render(){

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
        <div className="logo-cont"><Link to='/'><img src={logo} className="logo"alt="Logo"/></Link></div>
        <div className="menu">
          <ul>
            <li><NavLink to="/" onClick={clickLinksHandler} >Accueil</NavLink></li>
            <li><NavLink to="/annonces" onClick={clickLinksHandler} >Annonces</NavLink></li>
            <li><NavLink to="/" onClick={clickLinksHandler} >Magazine</NavLink></li>
            <li><NavLink to="/" onClick={clickLinksHandler} >Contactez nous</NavLink></li>
            <li className='sign-in' id="bebe"><NavLink to="/signin"><button onClick={clickLinksHandler} >Sign In</button></NavLink></li>
            <li className='sign-up'><NavLink to="/signup"><button onClick={clickLinksHandler} >Sign Up</button></NavLink></li>
          </ul>
        </div>
        {burger}
      </nav>
    </div>
    )
  }
}

export default Navbar
