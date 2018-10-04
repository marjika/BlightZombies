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
    console.log(this.state.sound)
    this.stopIntro();
  }

  stopIntro = () => {
    setTimeout(() => {this.setState({ sound: false })}, 19000);
}

  render() {
        
    return (
  <Container fluid>
    <Row>
      <Col size="md-2" />
      <Col size="md-8">
      <h1>You Lose</h1>
          <h1>
            <span role="img" aria-label="Zombie Emoji" className="emoji-span">
             🧟
            </span>
          </h1>
          <SoundComponent
            sound={this.state.sound}
            audio={this.state.audio}
          />  
      </Col>
      <Col size="md-2" />
    </Row>
  </Container>
)
  }
};

export default Lose;