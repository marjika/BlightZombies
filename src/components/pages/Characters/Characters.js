import React, { Component } from 'react';
import SoundComponent from "../../SoundComponent";
import Story from "../../Story";
import './Characters.css';
import blue from "../../images/blue.jpg"

class Characters extends Component {

  state = {
    sound: false,
    audio: "music"
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
      <div className="characters" style={{ backgroundImage: `url(${blue})`}}>
      <h1>Your Best People</h1>
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
