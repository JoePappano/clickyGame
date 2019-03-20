import React, { Component } from 'react'
import PictureItem from "./PictureItem";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

export class Picture extends Component {
  render() {
      console.log("props: " , this.props.pictures)
    return this.props.pictures.map((picture) => (
          <PictureItem key={picture.id} picture={picture}/>
        // <h3> { picture.id } </h3>
    ))
  }
}

Picture.propTypes = {
  pictures: PropTypes.array.isRequired
}

export default Picture

