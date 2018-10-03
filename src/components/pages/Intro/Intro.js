import React, { Component } from 'react';
import SoundComponent from "../../SoundComponent";
import './Intro.css';
import biohazard from "../../images/biohazard.jpg"

class Intro extends Component {

  state = {
    sound: false,
    audio: "intro"
  };

  componentDidMount = () => {
    this.setState({ sound: true })
    console.log(this.state.sound)
    this.stopIntro();
  }

  stopIntro = () => {
    setTimeout(() => {this.setState({ sound: false }), this.skipToGame()}, 20000);
}

  skipToGame = () => {
      this.toGame();
  };

  toGame() {
    window.location.assign("/characters")
}

  render() {
    return (
      <div className="intro" style={{ backgroundImage: `url(${biohazard})`}}>
      <h1>Zombies are Everywhere</h1>
        <SoundComponent
            sound={this.state.sound}
            audio={this.state.audio}
          />  

      </div>
    );
  }
}

export default Intro;
