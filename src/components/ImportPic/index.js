import React from 'react';
import './importPic.css';
import Icon from '../../images/photoPost.svg'

 const ImportPic = () =>{
  return (
      <div>
        <div className="importPic" >
            <img src={Icon} draggable="false" />
        </div>
        <div className="card-line"></div>
            <h2 className="card-title">Import Pictures</h2>
            <div className="card-bottom">
                <p className="card-city"> 4 pictures minimum</p>
            </div>
      </div>
        
  )
}
export default ImportPic;