import React, { Component } from 'react';
import SoundComponent from "../../SoundComponent";
import Story from "../../Story";
import './Characters.css';

class Characters extends Component {

  state = {
    sound: false,
    audio: "cards"
  };

  componentDidMount = () => {
    this.setState({ sound: true })
    this.stopIntro();
  }


  stopIntro = () => {
    setTimeout(() => {this.setState({ sound: false })}, 96000);
}

  skipToGame = () => {
      this.toGame();
  };

  toGame() {
    this.props.history.push("/game")
}

  render() {
    return (
      <div className="characters">
      <h1 className="team">Meet your team</h1>
        <SoundComponent
            sound={this.state.sound}
            audio={this.state.audio}
          />  
          <Story />

      </div>
    );
  }
}

export default Characters;
