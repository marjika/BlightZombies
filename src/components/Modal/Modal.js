import React from "react";
import SoundComponent from "../SoundComponent";
import "./Modal.css";
import img from "../images/blue.jpg"
  
const Modal = ({ show, modalText, audio, sound }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    
    return (
      <div className={showHideClassName}> 
        <section className='card'     
        style={{
          backgroundImage: "url("+ img +")"
        }}>  
          <SoundComponent
            sound={sound}
            audio={audio}
          />  
            <h2 style={{padding:"10%", paddingTop:"20%", color:"whitesmoke"}}>{modalText}</h2>
        </section>
      </div>
    );
  };

export default Modal;