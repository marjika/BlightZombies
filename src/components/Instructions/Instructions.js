
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
      console.log('clicked')
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
                <p>An inani luptatum mea. Ad usu impedit fastidii mnesarchum, suas tollit consetetur an pri,
                     nisl erat altera eos ea. Eos ei veritus molestie deterruisset. Ius modus primis regione
                      an. Vix ei probatus neglegentur.</p>
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