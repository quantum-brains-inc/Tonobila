import React, {Component }from 'react'
import './header-home.css'
import { Link, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import firebase  from '../../Firebase'


class Header extends Component{

constructor(props) {
    super();
}

render() {
    return(
        <div className="header-container">
            <div className="header">
                <div className="header-card">
                    <div className="header-card-text">
                        <h2>déposez votre annonce</h2>
                        <div className="line"></div>
                        <p>Dépot d’annonces gratuit pour vendre tout type de voiture au maroc.</p>
                    </div>
                    {this.props.isLoggedIn ?
                    <React.Fragment>
                        <Link to="/add"><button id="addPost_home_plus"></button></Link>
                    </React.Fragment>
                    :
                    <Link to="/signup"><button id="addPost_home_plus"></button></Link>
                    } 
                </div>
               <div className='respo-Annonce'> <Link to="/add">DÉPOSEZ VOTRE ANNONCE</Link></div>
            </div>
        </div>    
    )
 }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export default withRouter(connect(mapStateToProps)(Header));