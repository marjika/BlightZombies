import React, { Component } from 'react';
import Sound from 'react-sound';

import IntroAudio from './sounds/ScarySound.mp3';
import Background1Audio from './sounds/thunder.mp3';
import VirusAudio from './sounds/shotgun.mp3';
import OutbreakAudio from './sounds/Dramatic-heartbeat-sound-effect.mp3';

class SoundComponent extends Component {

    renderSwitch() {
        switch(this.props.audio) {
            case "intro":
                return IntroAudio
            case "background1":
                return Background1Audio
            case "virus":
                return VirusAudio
            case "outbreak":
                return OutbreakAudio
            // case "found item":
            //    return {someFile}
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