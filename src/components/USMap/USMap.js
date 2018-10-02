import React from 'react';
//import Button from "../Button";
import usmap from '../images/USA.jpg';
import cities from "../../cities.json";
import "./USMap.css";

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

class USMap extends React.Component {

    constructor(props){
        super(props)
          this.state = {
            cities
          }
      }
    
    componentDidMount() {
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      const img = this.refs.image
      img.onload = () => {
        ctx.drawImage(img, 0, 0)
        cities.map(item => (
            rect({ctx, x: item.x, y: item.y, width: 10, height: 10})
        ))
        // rect({ctx, x: cities[1].x, y: cities[1].y, width: 10, height: 10});


        // rect({ctx, x: 35, y: 110, width: 25, height: 25});
    
        // ctx.font = "40px Courier"
        // ctx.fillText(this.props.text, 210, 75)
      }
    }

    
    render() {
      return(
        <div className="background">
          <canvas ref="canvas" width={1200} height={841} />
          <img  ref="image" src={usmap} className="hidden" alt="" style={{width:"1200px", height:"841px"}}/>
        </div>
      )
    }
  }
  export default USMap