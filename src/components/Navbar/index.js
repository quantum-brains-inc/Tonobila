import React, {Component} from 'react';
import './navbar.css'
import logo from '../../images/logo.png'


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
        <div className="logo"><img src={logo} className="logo"alt="Logo"/></div>
        <div className="menu">
          <ul>
            <li><a href="#" onClick={clickLinksHandler} >Accueil</a></li>
            <li><a href="#" onClick={clickLinksHandler} >Annonces</a></li>
            <li><a href="#" onClick={clickLinksHandler} >Magazine</a></li>
            <li><a href="#" onClick={clickLinksHandler} >Contactez nous</a></li>
            <li className='sign-in' id="bebe"><button onClick={clickLinksHandler} >Sign In</button></li>
            <li className='sign-up'><button onClick={clickLinksHandler}>  Sign Up</button></li>
          </ul>
        </div>
        {burger}
      </nav>
    </div>
    )
  }
}

export default Navbar
