import React from "react";
import './Story.css';
import { Col, Row, Container } from "../Grid";
import test from '../images/test.png';



const Story = props => {
      return (
        <Container>
          <Row>
            <Col size="md-6">
              <div className="story">
                <div className="img-container">
                  <img className="staff" alt="test" src={test} style={{width: "500px"}}/>
                </div>

                <div className="player-card">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit 
                      voluptatem accusantium doloremque laudantium, totam r
                      em aperiam, eaque ipsa quae ab illo inventore veritatis 
                      et quasi architecto beatae vitae dicta sunt explicabo. 
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                      aut odit aut fugit, sed quia consequuntur magni dolores 
                      eos qui ratione voluptatem sequi nesciunt. Neque porro 
                      quisquam est, qui dolorem ipsum quia dolor sit amet, 
                      consectetur, adipisci velit, sed quia non numquam eius 
                      modi tempora incidunt ut labore et dolore magnam aliquam 
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                      exercitationem ullam corporis suscipit laboriosam, nisi ut 
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                      reprehenderit qui in ea voluptate velit esse quam nihil 
                      molestiae consequatur, vel illum qui dolorem eum fugiat 
                      quo voluptas nulla pariatur?
                      </p>
              
                  {/* <button class="skipIntro" type="sumbit">SKIP INTRO</button> */}
                </div>   
              </div>    
          </Col>
          <Col size="md-6">
          <div className="story">
                <div className="portrait">
                  <img className="staff" alt="test" src={test} style={{width: "500px"}}/>
                </div>

                <div className="player-card">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit 
                      voluptatem accusantium doloremque laudantium, totam r
                      em aperiam, eaque ipsa quae ab illo inventore veritatis 
                      et quasi architecto beatae vitae dicta sunt explicabo. 
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                      aut odit aut fugit, sed quia consequuntur magni dolores 
                      eos qui ratione voluptatem sequi nesciunt. Neque porro 
                      quisquam est, qui dolorem ipsum quia dolor sit amet, 
                      consectetur, adipisci velit, sed quia non numquam eius 
                      modi tempora incidunt ut labore et dolore magnam aliquam 
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                      exercitationem ullam corporis suscipit laboriosam, nisi ut 
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                      reprehenderit qui in ea voluptate velit esse quam nihil 
                      molestiae consequatur, vel illum qui dolorem eum fugiat 
                      quo voluptas nulla pariatur?
                      </p>
              
                  {/* <button class="skipIntro" type="sumbit">SKIP INTRO</button> */}
                </div>   
              </div> 
          </Col>
        </Row>
  </Container>


)

};

export default Story;