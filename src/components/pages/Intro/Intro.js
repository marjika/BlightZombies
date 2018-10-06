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
          <p className="introtext">No one knows where the virus come from...</p> 
          <p className="introtext">95% of the world is dead, the last 5% is ravaging for food & supplies.</p> 
          <p className="introtext">Zombies are running the country...</p>
          <p className="introtext">There's a team of 5 people that can save the world, but they need a new CDC Director.</p> 
          <p className="introtext">The last director was infected by the virus...</p>
      </div>
    );
  }
}

export default Intro;
