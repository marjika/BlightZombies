import React, { Component } from 'react';
import SoundComponent from "../../SoundComponent";
import './Win.css';
import { Col, Row, Container } from "../../Grid";

class Win extends Component {

  state = {
    sound: false,
    audio: "win"
  };

  componentDidMount = () => {
    this.setState({ sound: true })
    console.log(this.state.sound)
    this.stopIntro();
  }

  stopIntro = () => {
    setTimeout(() => {this.setState({ sound: false })}, 11000);
}

  render() {
        
    return (
  <Container fluid>
    <Row>
      <Col size="md-2" />
      <Col size="md-8">
          <h1>You Win</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji" className="emoji-span">
             🌄
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

export default Win;