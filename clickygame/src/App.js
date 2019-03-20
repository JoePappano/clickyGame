import React, { Component } from 'react';
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import Picture from "./components/Picture";
import { Row, Col } from "react-bootstrap";
import pictures from "./pictures.json";
import PictureItem from "./components/PictureItem";

// import './App.css';

class App extends Component {


  shuffleArray = (array) => {
    const pictures = this.state.pictures.sort((a, b) => 0.5 - Math.random());
    this.setState({
      pictures
    });
  }
  
  addScore = (id) => {
    // console.log('---', e.target , e.target.id)
    const pictures = this.state.pictures.map(picture => {
      if (picture.id === id) {
        if (!picture.count) {
          picture.count = true          
          this.setState({
            score: this.state.score + 1,
            // idArray: this.state.idArray.push(e.target.id)
          });
          return picture;
        } else {
          const clonedPictures = this.state.pictures.map(picture => {picture.count = false});
          this.setState({
            score: 0,
            pictures: clonedPictures            
          });
          return picture;
        }
      }
      return picture;
    });

    this.setState({pictures});
    
    console.log("idArray: ", this.state.idArray);
    console.log("score: ", this.state.score)
    this.shuffleArray();
    this.setHighScore();
    // this.addCount();
  }

  setHighScore = () => {
    if (this.state.score >= this.state.highScore) {
      this.setState({
        highScore: this.state.score,
      })
    }
  }

  // addCount = (e) => {
  //   const 
  // }


componentDidMount(){
  const clonedPictures = pictures
  this.setState({
    pictures: clonedPictures,
    score: 0,
    highScore: 0,
  })
}
  state = {
    pictures: [],
    score: 0,
    highScore: 0,
  }


  render() {
    // console.log("whwowowo", this.state.pictures);
    // const { id } = this.state.pictures;
    let idArray = [];
    return (
      <div className="container">
        <Header score={ this.state.score } highScore={ this.state.highScore } onChange={ this.setHighScore }/>
        <MainBody />

        {this.state.pictures.map(picture => (
          // <PictureItem 
          //   id={ picture.id }
          //   src={ picture.url }
          // />
          
            <img 
              key={picture.id}
              style={picStyle} 
              src= { picture.url }  
              alt="nada" 
              id={ picture.id }
              onClick = {()=> this.addScore(picture.id) }
            />
          
          
          


          ))}




        {/* <Picture pictures={ this.state.pictures }/> */}
          {/* <Row>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[0].url }  alt="nada" id={ this.state.pictures[0].id }/></a>   
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[1].url }  alt="nada" id={ this.state.pictures[1].id }/> </a>  
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[2].url }  alt="nada" id={ this.state.pictures[2].id }/>   </a>
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[3].url }  alt="nada" id={ this.state.pictures[3].id }/>   </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[4].url }  alt="nada" id={ this.state.pictures[4].id }/>   </a>
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[5].url }  alt="nada" id={ this.state.pictures[5].id }/>  </a> 
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[6].url }  alt="nada" id={ this.state.pictures[6].id }/>   </a>
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[7].url }  alt="nada" id={ this.state.pictures[7].id }/>   </a>
            </Col>
          </Row>

          <Row>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[8].url }  alt="nada" id={ this.state.pictures[8].id }/>   </a>
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[9].url }  alt="nada" id={ this.state.pictures[9].id }/>   </a>
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[10].url }  alt="nada" id={ this.state.pictures[10].id }/>   </a>
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[11].url }  alt="nada" id={ this.state.pictures[11].id }/>   </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[12].url }  alt="nada" id={ this.state.pictures[12].id }/>   </a>
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[13].url }  alt="nada" id={ this.state.pictures[13].id }/>  </a> 
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[14].url }  alt="nada" id={ this.state.pictures[14].id }/>   </a>
            </Col>
            <Col>
              <a onClick={ this.addScore } > <img style={picStyle} src= { this.state.pictures[15].url }  alt="nada" id={ this.state.pictures[15].id }/>   </a>
            </Col>
          </Row> */}
        
        <Footer />
      </div>
    );
  }
}

const picStyle = {
  margin: "5px",
  borderStyle: "solid",
  borderWidth: "2px",
  height: "200px",
  width: "200px"

}

export default App;
