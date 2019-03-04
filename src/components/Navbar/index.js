import React, {Component} from 'react';
import './navbar.css'


class Navbar extends Component{
  state={
    burgclicked:false
  } 
  render(){

    let barONE=[];
    let barTWO=[];
    let barTHREE=[];
    let navClasses=[]

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
        <div className="logo"><img src="./images/logo.png" alt="Logo"/></div>
        <div className="menu">
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Annonces</a></li>
            <li><a href="#">Magazine</a></li>
            <li><a href="#">Contactez nous</a></li>
            <li className='sign-in'><button>Sign In</button></li>
            <li className='sign-up'><button>Sign Up</button></li>
          </ul>
        </div>
        {burger}
      </nav>
    </div>
    )
  }
}

export default Navbar