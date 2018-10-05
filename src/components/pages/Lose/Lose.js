import React, { Component } from 'react';
import SoundComponent from "../../SoundComponent";
import './Lose.css';
import { Col, Row, Container } from "../../Grid";

class Lose extends Component {

  state = {
    sound: false,
    audio: "lose"
  };

  componentDidMount = () => {
    this.setState({ sound: true })
    this.stopIntro();
  }

  stopIntro = () => {
    setTimeout(() => {this.setState({ sound: false })}, 19000);
}

  render() {
        
    return (
  <div className="loseGame">
    <Row>
      <Col size="md-12">
      <h1 className="winTitle">YOU LOSE</h1>
          <SoundComponent
            sound={this.state.sound}
            audio={this.state.audio}
          /> 
      </Col>
    </Row>
  </div>
)
  }
};

export default Lose;