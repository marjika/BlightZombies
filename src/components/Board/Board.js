import React from "react";
import CityList from "../CityList";
import USMap from "../USMap";
import Modal from "../Modal";
import Footer from "../Footer";
import { Col, Row, Container } from "../Grid";
import cities from "../../cities.json";
import staff from "../../players.json";
import usmap from '../images/USA.jpg';
import './Board.css';

function circle(ctx, x, y, value) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
    if (value === 3) {
        ctx.fillStyle = "red"
    }
    else if (value === 2) {
        ctx.fillStyle = "orange"
    }
    else if (value === 1) {
        ctx.fillStyle = "yellow"
    }
    else if (value === 0) {
        ctx.fillStyle = "green"
    }
    ctx.fill();
}


class Board extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            staff,
            cities,
            infections: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            sampleFound: false,
            proteinFound: false,
            scientistFound: false,
            immuneManFound: false,
            missionOne: false,
            missionTwo: false,
            missionThree: false,
            missionFour: false,
            show: false,
            modalText: "",
            outbreaks: 0,
            moves: 0,
            sound: false,
            audio: ""
        };
    }

    componentDidMount() {
        this.drawCanvas()
    }

    componentDidUpdate() {
        this.updateCanvas();
    }   

    //canvas for map gameplay, displayscities with circle function, .onload for componentDidMount
    drawCanvas() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = new Image();
        img.src = usmap

            img.onload = () =>{
            ctx.drawImage(img, 0, 0, img.width, img.height,    
                0, 0, canvas.width, canvas.height);
                this.state.infections.map((item, index) => {
                    circle(ctx, cities[index].x, cities[index].y, item)
                });
            }
        }

    //function to clear canvas before it is updated
    clearCanvas() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    //updates canvas/map when city infections change
    updateCanvas() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = new Image();
        img.src = usmap

        ctx.drawImage(img, 0, 0, img.width, img.height,    
            0, 0, canvas.width, canvas.height);
            this.state.infections.map((item, index) => {
                circle(ctx, cities[index].x, cities[index].y, item)
            });
    }


    //modal functionality
    showModal = () => {
        this.setState({ show: !this.state.show }, () => {
            this.hideModal();
        });
    }

    hideModal = () => {
        setTimeout(() => this.setState({ show: !this.state.show, sound: false }), 6000);
    }

    //modals for finding players needed items and bringing them to CDC in Atlanta
    foundSample = () => {
        if (!this.state.sampleFound) {
            this.setState({ sampleFound: true });
            this.setState({ modalText: "You found a DNA sample of the virus." }, () => {
                this.setState({audio: "virus"})
                this.setState({sound: true})
                this.showModal();
            })
        }
    }

    foundProtein = () => {
        if (!this.state.proteinFound) {
            this.setState({ proteinFound: true });
            this.setState({ modalText: "You found a plant with the anti-Zombie protein." }, () => {
                this.setState({audio: "protein"})
                this.setState({sound: true})
                this.showModal();
            })
        }
    }

    foundScientist = () => {
        if (!this.state.scientistFound) {
            this.setState({ scientistFound: true });
            this.setState({ modalText: "You found the missing scientist, Dr. Jasper." }, () => {
                this.setState({audio: "doctor"})
                this.setState({sound: true})
                this.showModal();
            })
        }
    }

    foundImmuneMan = () => {
        if (!this.state.immuneManFound) {
            this.setState({ immuneManFound: true });
            this.setState({ modalText: "You found an immune patient." }, () => {
                this.setState({audio: "patient"})
                this.setState({sound: true})
                this.showModal();
            })
        }
    }

    mission1 = () => {
        if (!this.state.missionOne) {
            this.setState({ missionOne: true });
            this.setState({ modalText: "Mission complete. Help the others." }, () => {
                this.setState({audio: "complete"})
                this.setState({sound: true})
                this.showModal();
            })
            if (this.state.missionTwo && this.state.missionThree && this.state.missionFour) {
                this.props.winGame();
            }
        }
    }

    mission2 = () => {
        if (!this.state.missionTwo) {
            this.setState({ missionTwo: true });
            this.setState({ modalText: "Mission complete. Help the others." }, () => {
                this.setState({audio: "complete"})
                this.setState({sound: true})
                this.showModal();
            })
            if (this.state.missionOne && this.state.missionThree && this.state.missionFour) {
                this.props.winGame();
            }
        }
    }

    mission3 = () => {
        if (!this.state.missionThree) {
            this.setState({ missionThree: true });
            this.setState({ modalText: "Mission complete. Help the others." }, () => {
                this.setState({audio: "complete"})
                this.setState({sound: true})
                this.showModal();
            })
            if (this.state.missionOne && this.state.missionTwo && this.state.missionFour) {
                this.props.winGame();
            }
        }
    }

    mission4 = () => {
        if (!this.state.missionFour) {
            this.setState({ missionFour: true });
            this.setState({ modalText: "Mission complete. Help the others." }, () => {
                this.setState({audio: "complete"})
                this.setState({sound: true})
                this.showModal();
            })
            if (this.state.missionOne && this.state.missionTwo && this.state.missionThree) {
                this.props.winGame();
            }
        }
    }

    //sets the array of infections so they can be rendered as circles on the map
    cityInfectionArrayChange = (array) => {
        const infections = array;
        this.setState({ infections: infections }, () => {
            this.clearCanvas();
            this.updateCanvas();
        })
    }

    //Gets the number of moves and outbreaks from CityList
    sendStats = (actions, outbreakCount) => {
        this.setState({ moves: actions, outbreaks: outbreakCount })
    }


    render() {
        return (
            <Container fluid>
                <div className="Board">
                    <Row><div  style={{ height: "25px" }}></div></Row>
                    <Row>
                        <Col size="md-9">
                            <canvas ref="canvas" width={1000} height={563} />
                            {/* <img ref="image" src={usmap} alt="" className="hidden" /> */}
                        </Col>
                        <Col size="md-3">
                            <CityList
                                cities={cities}
                                sampleCityId={this.props.sampleCityId}
                                proteinCityId={this.props.proteinCityId}
                                scientistCityId={this.props.scientistCityId}
                                immuneManCityId={this.props.immuneManCityId}
                                foundSample={this.foundSample}
                                sample={this.state.sampleFound}
                                mission1={this.mission1}
                                foundProtein={this.foundProtein}
                                protein={this.state.proteinFound}
                                mission2={this.mission2}
                                foundScientist={this.foundScientist}
                                scientist={this.state.scientistFound}
                                mission3={this.mission3}
                                foundImmuneMan={this.foundImmuneMan}
                                immuneMan={this.state.immuneManFound}
                                mission4={this.mission4}
                                loseGame={this.props.loseGame}
                                cityInfectionArrayChange={this.cityInfectionArrayChange}
                                sendStats={this.sendStats}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Modal 
                            show={this.state.show} 
                            modalText={this.state.modalText}
                            audio={this.state.audio}
                            sound={this.state.sound}></Modal>
                    </Row>
                    <Row>
                        <Footer
                            moves={4 - this.state.moves}
                            outbreaks={this.state.outbreaks}
                            sample={this.state.sampleFound}
                            mission1={this.state.missionOne}
                            protein={this.state.proteinFound}
                            mission2={this.state.missionTwo}
                            scientist={this.state.scientistFound}
                            mission3={this.state.missionThree}
                            immuneMan={this.state.immuneManFound}
                            mission4={this.state.missionFour}
                        />
                    </Row>
                </div>
            </Container>
        );
    }
}


export default Board;