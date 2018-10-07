import React, { Component } from 'react'
import './Home.css';
import SoundComponent from "./SoundComponent";

// TODO - add proptypes
class Home extends Component {

	state = {
	  sound: false,
	  audio: "home"
	};
  
	componentDidMount = () => {
	  this.setState({ sound: true })
	  this.stopIntro();
	}

	stopIntro = () => {
		setTimeout(() => {this.setState({ sound: false })}, 10000);
	}
    
	render() {		  
	  return (
		<div className="Home">
			<SoundComponent
			  sound={this.state.sound}
			  audio={this.state.audio}
			/> 
		</div>
  	  )
	}
  };
  
export default Home
