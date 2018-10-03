import React from "react";
import City from "../City";
import Player from "../Player";
import Modal from "../Modal";
import './CityList.css';
import staff from "../../players.json";
import cities from "../../cities.json";

//creates an array of three ids which will become the list of infected cities
function findRandom() {
  var arr = []
  while(arr.length < 3){
      var randomnumber = Math.floor(Math.random()*25) + 1;
      if(arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
  }
    return arr;
}

//finds the id of the city chosen to go to next
function findId(name) {
  const cityId = cities.filter(city => city.location === name);
  return cityId[0].id;
}

let random = findRandom();

let actions = 0;
let outbreakCount=0;

class CityList extends React.Component {
       
  constructor(props){
      super(props)
        this.state = {
          staff,
          refresh: false,
          currentLocation1: 2, 
          currentLocation2: 6,
          currentLocation3: 11,
          currentLocation4: 16,
          currentLocation5: 22,
          show: false,
          modalText: "",
          cityInfections: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          sound: false,
          audio: ""
        }
    }

    //staff one movement functionality
    moveLocation1 = cityName => {
      const newCity = findId(cityName);
      if (newCity===this.props.sampleCityId) {
        this.props.foundSample();
      }
      if (newCity===1 && this.props.sample) {
        this.props.mission1();
      }
      this.setState({ currentLocation1: newCity });
      this.increaseCount();
    }

    //boolean that signals when new cities will be infected
    refreshRandom = () => {
      this.setState({ refresh: !this.state.refresh });
      actions=0;
    }

    //keeps track of number of actions by staff to know when cities should be reinfected
    increaseCount = () => {
      actions++;
      if (actions > 2) {
        random=findRandom();
      }
      if (actions > 3) {
        this.refreshRandom();
      }
      this.props.sendStats(actions, outbreakCount);
    }

    //Staff 2 movement
    moveLocation2 = cityName => {
      const newCity = findId(cityName);
      if (newCity===this.props.proteinCityId) {
        this.props.foundProtein();
      }
      if (newCity===1 && this.props.protein) {
        this.props.mission2();
      }
      this.setState({ currentLocation2: newCity });
      this.increaseCount();
    }

    //Staff 3 movement
    moveLocation3 = cityName => {
      const newCity = findId(cityName);
      if (newCity===this.props.scientistCityId) {
        this.props.foundScientist();
      }
      if (newCity===1 && this.props.scientist) {
        this.props.mission3();
      }
      this.setState({ currentLocation3: newCity });
      this.increaseCount();
    }

    //staff 4 movement
    moveLocation4 = cityName => {
      const newCity = findId(cityName);
      if (newCity===this.props.immuneManCityId) {
        this.props.foundImmuneMan();
      }
      if (newCity===1 && this.props.immuneMan) {
        this.props.mission4();
      }
      this.setState({ currentLocation4: newCity });
      this.increaseCount();
    }

    //staff 5 movement
    moveLocation5 = cityName => {
      const newCity = findId(cityName);
      this.setState({ currentLocation5: newCity });
      this.increaseCount();
    }

    //keeps track of outbreak count and triggers modals, triggers game loss if more than 7 outbreaks
    outbreak = () => {
      if (outbreakCount < 7) {
        outbreakCount++;
        this.setState({ modalText: "You've had an outbreak " + outbreakCount + " times." }, () => {
          this.props.sendStats(actions, outbreakCount);
          this.setState({audio: "outbreak"})
          this.setState({sound: true})
          this.showModal();
      })   
      } else {
          this.props.loseGame();
        }
      }

      //modal functions
    showModal = () => {
      this.setState({show: !this.state.show}, () => {
        this.hideModal();
    });
    }

    hideModal = () => {
      setTimeout(()=>this.setState({show: false, sound: false }), 2000);
    }

    infectionArrayChange = (index, value) => {
       const infectArray = this.state.cityInfections
       if (index !== -1) {
        infectArray[index-1] = value
      }
      this.setState({ cityInfections:infectArray }, () => {
        this.props.cityInfectionArrayChange(this.state.cityInfections)
      })
      //console.log(this.state.cityInfections)
     }

    render() {
      return (

    <div className="cities">
      <ul className="city-list">
      {this.props.cities.map(item => (
        <li key={item.id}>
        {item.id===this.state.currentLocation1 &&
        <div className="players">
          <Player
              key={this.state.staff[0].id}
              name={this.state.staff[0].name}
              occupation={this.state.staff[0].occupation}
              id={this.state.staff[0].id}
              currentLocation1={this.state.currentLocation1}
          />
        </div>}
        {item.id===this.state.currentLocation2 &&
        <div className="players">
          <Player
                key={this.state.staff[1].id}
                name={this.state.staff[1].name}
                occupation={this.state.staff[1].occupation}
                id={this.state.staff[1].id}
                currentLocation2={this.state.currentLocation2}
          />
        </div>}
        {item.id===this.state.currentLocation3 &&
        <div className="players">
          <Player
                key={this.state.staff[2].id}
                name={this.state.staff[2].name}
                occupation={this.state.staff[2].occupation}
                id={this.state.staff[2].id}
                currentLocation3={this.state.currentLocation3}
          />
        </div>}
        {item.id===this.state.currentLocation4 &&
        <div className="players">
          <Player
                key={this.state.staff[3].id}
                name={this.state.staff[3].name}
                occupation={this.state.staff[3].occupation}
                id={this.state.staff[3].id}
                currentLocation4={this.state.currentLocation4}
          />
        </div>}
        {item.id===this.state.currentLocation5 &&
        <div className="players">
          <Player
                key={this.state.staff[4].id}
                name={this.state.staff[4].name}
                occupation={this.state.staff[4].occupation}
                id={this.state.staff[4].id}
                currentLocation5={this.state.currentLocation5}
          />
        </div>}
        <div className="cityIndividual">
        <City
          id={item.id}
          name={item.location}
          connections={item.connections}
          person1LocationId={this.state.currentLocation1}
          person2LocationId={this.state.currentLocation2}
          person3LocationId={this.state.currentLocation3}
          person4LocationId={this.state.currentLocation4}
          person5LocationId={this.state.currentLocation5}
          cityId={random}
          moveLocation1={this.moveLocation1}
          moveLocation2={this.moveLocation2}
          moveLocation3={this.moveLocation3}
          moveLocation4={this.moveLocation4}
          moveLocation5={this.moveLocation5}
          increaseCount={this.increaseCount}
          refresh={this.state.refresh}
          outbreak={this.outbreak}
          infectionArrayChange={this.infectionArrayChange}
        />
        </div>
        </li>
      ))}
    </ul>
    <Modal 
      show={this.state.show} 
      modalText={this.state.modalText}
      audio={this.state.audio}
      sound={this.state.sound}></Modal>
    </div>
  )}
};
  
  export default CityList;