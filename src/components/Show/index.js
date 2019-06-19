import React, { Component } from 'react'
import './show.css'
import firebase from '../../Firebase'
import {Link} from "react-router-dom";
import { connect } from "react-redux";


class Show extends Component {
    state = {
      imageURL: '',
      post: {},
      key: '',
      uid: '',
      prix: '',
      main: ''
    }
  componentDidMount() {
    const ref = firebase.firestore().collection('posts').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          post: doc.data(),
          image: doc.data().downloadURLs[0],
          image1: doc.data().downloadURLs[1],
          image2: doc.data().downloadURLs[2],
          image3: doc.data().downloadURLs[3],
          image4: doc.data().downloadURLs[4],
          imageURL: doc.data().downloadURLs[0],
          author: doc.data().author.name,
          key: doc.id,
          isLoading: false,
          uid: doc.data().uid.uid,
          prix: doc.data().prix,
        });
      } else {
        console.log("No such document!");
      }
    });
  }
  delete(id) {
    firebase.firestore().collection('posts').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  conditional_re() {
    var user = firebase.auth().currentUser;
    if(user.uid == this.state.uid) {
      return null;
    } else {
      return (
        <React.Fragment >
          <button style={{margin:'20px'}}onClick={this.delete.bind(this, this.state.key)}>Delete</button>
          <button style={{margin:'20px'}}><Link to={`/edit/${this.state.key}`} style={{color:'white'}}>Edit</Link></button>
          </React.Fragment>
      );
    }
  }

  render() {
    var user = firebase.auth().currentUser;
      const ChangeImage = (source) => {
          this.setState({
              imageURL: source,
          })
      }
    return (
      <div className="show">
        <h1>{this.state.post.title}</h1>
        <div className="main_show_card card">
          <div className="left">
            <div className="show_image_large">
              <img src={this.state.imageURL} className='show_image'/>
            </div>
              <div className="show_image_thumnail" >
                <div>
                <img src={this.state.image} onClick={() => ChangeImage(this.state.image)}/>
                </div>
                
                <div>
                <img src={this.state.image1} onClick={() => ChangeImage(this.state.image1)}/>
                </div>
                
                <div>
                <img src={this.state.image2} onClick={() => ChangeImage(this.state.image2)}/>
                </div>
                
                <div>
                <img src={this.state.image3} onClick={() => ChangeImage(this.state.image3)}/>
                </div>
                <div>
                <img src={this.state.image4} onClick={() => ChangeImage(this.state.image4)}/>
                </div>
              </div>
          </div>
          <div className="right">
            <h1>{this.state.post.modele}</h1>
            <h4>{this.state.post.adress}</h4>
            <h4>+212 67353476</h4>
            <h2>{this.state.prix} DH</h2>
            <p>{this.state.post.description}</p>
            <h4>{this.state.author}</h4>
            {this.props.isLoggedIn == true ?
              <React.Fragment>
                {this.conditional_re()}
              </React.Fragment>
            :
              <p></p>
            }
          </div>
        </div>
        <div>
          <table>
            <h2>Détails du Véhicule</h2>
            <tr>
              <th>mise en circulation:</th>
              <td>{this.state.post.annee}</td>
            </tr>
            <tr>
              <th>Kilométrage:</th>
              <td>{this.state.post.kilometrage}</td>
            </tr>
            <tr>
              <th>Carburant</th>
              <td>{this.state.post.carburant}</td>
            </tr>
            <tr>
              <th>Nombre de portes</th>
              <td>{this.state.post.num_port}</td>
            </tr>
            <tr>
              <th>Couleur exterieur</th>
              <td>{this.state.post.couleur_ex}</td>
            </tr>
            <tr>
              <th>Couleur intereur</th>
              <td>{this.state.post.couleur_in}</td>
            </tr>
            <tr>
              <th>Carrosserie</th>
              <td>{this.state.post.carrosserie}</td>
            </tr>
            <tr>
              <th>Première main</th>
              <td>{this.state.post.main}</td>
            </tr>
            <tr>
              <th>Puissance Fiscale</th>
              <td>{this.state.post.puissance_fiscale}</td>
            </tr>
          </table>
        </div>
        <div className="actuality-container">
          <div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(Show)