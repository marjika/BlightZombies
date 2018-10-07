import React, { Component } from 'react';
import Sound from 'react-sound';

import background from './sounds/background.mp3';

class BackgroundSound extends Component {


    render() {
        
        return (
            <div>
                    <Sound
                        url={background} 
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={0}
                        loop={true}
                    />
            </div>
        )
    }
}

export default BackgroundSound;