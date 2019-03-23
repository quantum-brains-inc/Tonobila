import React, { Component } from 'react'
import './add.css';
import ImportPic from '../ImportPic'

class AddPost extends Component {
  render() {
    return (
      <div className='add-post'>
        <div>
          <h1>Add a Post</h1>
        </div>

        <div>
          <div>
            <p>marque</p>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <p>prix max</p>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <p>modèle</p>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <p>carburant</p>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <p>annee</p>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <p>couleur extérieur</p>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <p>couleur extérieur</p>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <p>type de chassis</p>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <p>kilometrage</p>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <p>nombre des portes</p>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <label>description</label>
            <textarea cols="30" rows="10"></textarea>  
          </div>  
        </div>

        <div>
          <ImportPic/>
          <div className="post_button_div">
            <button >Post</button>
          </div>
        
        </div>
      </div>
    )
  }
}

export default AddPost;