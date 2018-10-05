import React from "react";
import SoundComponent from "../SoundComponent";
import "./Modal.css";

const Modal = ({ show, modalText, audio, sound }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    
    
    return (
      <div className={showHideClassName}> 
        <div className='card'>  
          <SoundComponent
            sound={sound}
            audio={audio}
          />  
            <h2 className="modalTitle">{modalText}</h2>
        </div>
      </div>
    );
  };

export default Modal;