import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import pictures from "../pictures.json"


export class PictureItem extends Component {
  render() {
    return (
      <div>
      
      <a onClick={ this.addScore } > 
        <img style={picStyle} 
          src= { pictures.url }  
          alt="nada" 
          id={ pictures.id }/>   
      </a>
            {/* <div style={ picStyle }>
              <img src= { this.props.picture.url } alt="nada" />   
              <p> { this.props.picture.name } </p>
              <h6> { this.props.picture.id } </h6>
            </div> */}
        
      </div>
    )
  }
}

PictureItem.propTypes = {
  picture: PropTypes.object.isRequired
}

const picStyle = {
  color: "#ff0000"
}

export default PictureItem
