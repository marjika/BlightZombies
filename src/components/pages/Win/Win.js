import React, { Component } from 'react';
import SoundComponent from "../../SoundComponent";
import './Win.css';
import { Col, Row } from "../../Grid";

class Win extends Component {

  state = {
    sound: false,
    audio: "win"
  };

  componentDidMount = () => {
    this.setState({ sound: true })
    this.stopIntro();
  }

  stopIntro = () => {
    setTimeout(() => {this.setState({ sound: false })}, 11000);
  }

  render() {        
    return (
      <div className="winGame">
        <Row>
          <Col size="md-12">
              <h1 className="loseTitle">YOU WIN</h1>
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

export default Win;