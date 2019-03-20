import React, { Component } from 'react';
import Logo from "./Logo";
import Answer from "./Answer";
import Scoreboard from "./Scoreboard";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom" 

export class Header extends Component {
  render() {
    console.log("here is the props highScore: " , this.props.highScore)
    return (
      <Navbar>
        <Logo />
        <Answer />
        <Scoreboard score={ this.props.score } highScore={ this.props.highScore }/>
      </Navbar>
    )
  }
}

export default Header
