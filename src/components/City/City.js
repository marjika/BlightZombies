import React from "react";
import './City.css';


function randomInfection() {
    return Math.floor(Math.random() * 3) + 1;
}

let infectionLevel = randomInfection();

class City extends React.Component {
    constructor(props){
        super(props)
        
    this.state = {
        infectionRate: 0
    }
}

    componentDidMount() {
        this.increaseInfectionLevel(this.props.cityId);
    }

    //boolean to signal that there may be an increase in infection level
    componentWillReceiveProps(props) {
        const refresh = this.props.refresh;
        if (props.refresh !== refresh) {
            this.increaseInfectionLevel(this.props.cityId);
        }
    }

    //chooses random cities and infection rate and creates and outbreak if infection level > 3
    increaseInfectionLevel = (idarr) => {
        for(let i=0; i<idarr.length;i++) {
            if (idarr[i] === this.props.id) {
                const infectionRate = this.state.infectionRate+infectionLevel;
                if (infectionRate > 3) {
                    this.props.outbreak();
                    this.setState({ infectionRate: 3 }, () => {
                        this.props.infectionArrayChange(this.props.id, this.state.infectionRate)
                    }); 
                } else {
                this.setState({ infectionRate: infectionRate }, () => {
                    this.props.infectionArrayChange(this.props.id, this.state.infectionRate)
                });
            }

            }
        }
        infectionLevel = randomInfection();
    }

    //decreases level of infection on button click
    heal = (id) => {
        if (id===this.props.id) {
        const infectionRate = this.state.infectionRate-1;
        this.setState({ infectionRate: infectionRate }, () => {
            this.props.infectionArrayChange(this.props.id, this.state.infectionRate)
        });
    }}

    //the general has ability to double heal cities
    doubleHeal = (id) => {
        if (id===this.props.id && this.state.infectionRate>=2) {
        const infectionRate = this.state.infectionRate-2;
        this.setState({ infectionRate: infectionRate }, () => {
            this.props.infectionArrayChange(this.props.id, this.state.infectionRate)
            })
        };
        if (id===this.props.id && this.state.infectionRate<2) {
            this.setState({ infectionRate: 0 }, () => {
                this.props.infectionArrayChange(this.props.id, this.state.infectionRate)
            })
    }}

    render() {
        return (
    
    <div className="city">

        {/* <h5>{this.props.name}</h5> */}
        {/* <h6>{this.state.infectionRate}</h6> */}
        {(this.props.id===this.props.person1LocationId) &&
        <div className="nextLocation"><h6>is in {this.props.name}. Where do you want her to go next?</h6>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} className="map-button" onClick={() => this.props.moveLocation1(place)}> {place} </button>
        ))}</div></div>
      }
        {(this.props.id===this.props.person2LocationId) &&
        <div className="nextLocation"><h6>is in {this.props.name}. Where do you want him to go next?</h6>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} className="map-button" onClick={() => this.props.moveLocation2(place)}> {place} </button>
        ))}</div></div>
      }
        {(this.props.id===this.props.person3LocationId) &&
        <div className="nextLocation"><h6>is in {this.props.name}. Where do you want him to go next?</h6>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} className="map-button" onClick={() => this.props.moveLocation3(place)}> {place} </button>
        ))}</div></div>
      }
        {(this.props.id===this.props.person4LocationId) &&
        <div className="nextLocation"><h6>is in {this.props.name}. Where do you want her to go next?</h6>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} className="map-button" onClick={() => this.props.moveLocation4(place)}> {place} </button>
        ))}</div></div>
      }
        {(this.props.id===this.props.person5LocationId) &&
        <div className="nextLocation"><h6>is in {this.props.name}. Where do you want him to go next?</h6>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} className="map-button" onClick={() => this.props.moveLocation5(place)}> {place} </button>
        ))}</div></div>
      }
        {(this.state.infectionRate > 0) && ((this.props.id===this.props.person1LocationId)||(this.props.id===this.props.person2LocationId)||(this.props.id===this.props.person3LocationId)||(this.props.id===this.props.person4LocationId)) &&
        <div className="heal"><button className="map-button" onClick={(event) => { this.heal(this.props.id); this.props.increaseCount();}}>
          Reduce Zombies in {this.props.name}
        </button></div>
        }
        {/* {this.state.infectionRate > 0 && (this.props.id===this.props.person2LocationId) &&
        <div className="heal"><h6>Fight infection in this city: </h6><button onClick={(event) => { this.heal(this.props.id); this.props.increaseCount();}}>
            Cure Zombies in {this.props.name}
        </button></div>
        }
        {this.state.infectionRate > 0 && (this.props.id===this.props.person3LocationId) &&
        <div className="heal"><h6>Fight infection in this city: </h6><button onClick={(event) => { this.heal(this.props.id); this.props.increaseCount();}}>
            Cure Zombies in {this.props.name}
        </button></div>
        }
        {this.state.infectionRate > 0 && (this.props.id===this.props.person4LocationId) &&
        <div className="heal"><h6>Fight infection in this city: </h6><button onClick={(event) => { this.heal(this.props.id); this.props.increaseCount();}}>
            Cure Zombies in {this.props.name}
        </button></div>
        } */}
        {this.state.infectionRate > 0 && (this.props.id===this.props.person5LocationId) &&
        <div className="heal"><button className="map-button" onClick={(event) => { this.doubleHeal(this.props.id); this.props.increaseCount();}}>
            Reduce Zombies (X2) in {this.props.name}
        </button></div>
        }
   
    </div>

)}};

export default City;
