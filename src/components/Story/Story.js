import React from "react";
import './Story.css';
import { Col, Row, Container } from "../Grid";
import group from '../images/groupcards.png';



const Story = props => {
      return (
        <Container>
          <Row>
            <Col size="md-12">
              <div className="story">
                <div className="img-container">
                  <img className="staff" alt="group" src={group} style={{width: "1766"}}/>
                </div>

                <div className="player-card">
                <p className="story">Send your personnel to the cities in his or her region to acquire the missing pieces. 
                  The pieces will help you find the cure for the Zombie virus.  
                  Sophie Clark in the Southeast, Earl Cole in the Northeast, Yul Kwon in the Midwest, 
                  and Sandra Diaz-Twine in the West. Return these to the CDC in Atlanta. 
                  The map shows infection levels throughout the United States: 
                  Green means no infection, yellow is infection level at one, orange means two, and red is three. 
                  If your personnel are in an infected city, you may choose to reduce infection by one. 
                  General Collins can reduce infection by two, significantly reducing the Zombie virus in that city. 
                  Every 4 moves or Zombie reductions you do will result in a new infection. If a city exceeds its maximum level of 
                  infection, there will be an outbreak, and once there are 8 outbreaks, all hope is lost for humanity.</p>
                      
              
                  {/* <button class="skipIntro" type="sumbit">SKIP INTRO</button> */}
                </div>   
              </div>    
          </Col>

        </Row>
  </Container>


)

};

export default Story;