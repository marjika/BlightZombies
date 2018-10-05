import React, { Component } from 'react';
import SoundComponent from "../../SoundComponent";
import './Intro.css';
import biohazard from "../../images/biohazard.jpg";
import { Redirect } from 'react-router-dom';

class Intro extends Component {

  state = {
    sound: false,
    audio: "intro"
    //redirect: false
  };

  componentDidMount = () => {
    this.setState({ sound: true })
    console.log(this.state.sound)
    this.stopIntro();
  }

  stopIntro = () => {
    setTimeout(() => {this.setState({ sound: false, redirect: true }), this.toGame()}, 19000);
}

//   skipToGame = () => {
//       this.toGame();
//   };

  toGame() {
    this.props.history.push("/characters")
  }

  render() {
    // const { redirect } = this.state;
  
    // if (redirect) {
    //   return <Redirect to='/characters'/>;
    // }
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
