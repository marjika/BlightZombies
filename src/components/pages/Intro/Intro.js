import React, { Component } from 'react';
import SoundComponent from "../../SoundComponent";
import './Intro.css';
import biohazard from "../../images/biohazard.jpg";

class Intro extends Component {

  state = {
    sound: false,
    audio: "intro"
  };

  componentDidMount = () => {
    this.setState({ sound: true })
    this.stopIntro();
  }

  stopIntro = () => {
    setTimeout(() => {this.setState({ sound: false, redirect: true }), this.toGame()}, 19000);
}

  toGame() {
    this.props.history.push("/characters")
  }

  render() {

    return (
      <div className="intro" style={{ backgroundImage: `url(${biohazard})`}}>
        <SoundComponent
            sound={this.state.sound}
            audio={this.state.audio}
          />  
      </div>
    );
  }
}

export default Intro;
