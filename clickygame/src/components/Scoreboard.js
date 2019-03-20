import React, { Component } from 'react'

export class Scoreboard extends Component {

  


  render() {

    console.log("this is scoreboard props score: ", this.props.score)


    return (
      <div className="col-md-4 float-md-right">
        <h6> Your Score: { this.props.score } High Score: { this.props.highScore }</h6>
        {/* <h6> Your Score { this.state.currentScore } : High Score { this.state.highScore }</h6> */}
      </div>
    )
  }
}

export default Scoreboard
