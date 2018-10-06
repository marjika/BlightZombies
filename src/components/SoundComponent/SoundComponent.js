import React, { Component } from 'react';
import Sound from 'react-sound';

import IntroAudio from './sounds/intro.mp3';
import CompleteAudio from './sounds/Mission-complete.mp3';
import WinAudio from './sounds/win.mp3';
import LoseAudio from './sounds/lose.mp3';
import OutbreakAudio from './sounds/Outbreak.mp3';
import ProteinAudio from './sounds/anti-zombie-protein.mp3';
import DNAAudio from './sounds/DNAFound.mp3';
import DoctorAudio from './sounds/Dr-jasper.mp3';
import PatientAudio from './sounds/immune-patient.mp3';
import CardsIntro from './sounds/Cards-intro.mp3';


class SoundComponent extends Component {

    renderSwitch() {
        switch(this.props.audio) {
            case "intro":
                return IntroAudio
            case "complete":
                return CompleteAudio
            case "virus":
                return DNAAudio
            case "outbreak":
                return OutbreakAudio
            case "protein":
                return ProteinAudio
            case "doctor":
                return DoctorAudio
            case "patient":
                return PatientAudio
            case "win":
                return WinAudio
            case "lose":
                return LoseAudio
            case "cards":
                return CardsIntro
            default:
                
        }
    }

    render() {
        
        return (
            <div>
                {this.props.sound &&
                    <Sound
                        url={this.renderSwitch()} 
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={0}
                    />
                }
            </div>
        )
    }
}

export default SoundComponent;