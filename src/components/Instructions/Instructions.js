
import React, { Component } from 'react';
import "./Instructions.css";

class Instructions extends Component {
  constructor() {
    super();
    
    this.state = {
      showInstructions: false,
    };
    
    this.showInstructions = this.showInstructions.bind(this);
    this.closeInstructions = this.closeInstructions.bind(this);
  }
  
  showInstructions(event) {
    event.preventDefault();
    
    this.setState({ showInstructions: true }, () => {
      document.addEventListener('click', this.closeInstructions);
    });
  }
  
  closeInstructions(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showInstructions: false }, () => {
        document.removeEventListener('click', this.closeInstructions);
      });  
      
    }
  }

  render() {
    return (
      <div className="dropup">
        <button className="dropbtn" onClick={this.showInstructions}>
          Instructions
        </button>
        
        {
          this.state.showInstructions
            ? (
              <div
                className="instructionsContent"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <p>Send your personnel to the cities in his or her region in order to acquire the missing pieces
                  that will help you find the cure for the Zombie virus.  Sophie Clark in the Southeast, Earl Cole 
                  in the Northeast, Yul Kwon in the Midwest, and Sandra Diaz-Twine in the West. Return these to 
                  the CDC in Atlanta. The map shows infection levels throughout the United States, green means 
                  no infection, yellow is infection level at one, orange means two, and red=three. If your personnel
                  are in an infected city, you may choose to reduce infection by one. General Collins can reduce infection
                  by two, significantly reducing the Zombie virus in that city. Every 4 moves or 
                  Zombie reductions you do will result in a new infection. If a city exceeds its maximum level of 
                  infection, there will be an outbreak, and once there are 8 outbreaks, all hope is lost for humanity.</p>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Instructions;