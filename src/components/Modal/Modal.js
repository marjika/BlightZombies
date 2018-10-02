import React from "react";
import "./Modal.css";
//import Card from "../Card";
import img from "../images/blue.jpg"
  
const Modal = ({ show, modalText }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    
    return (
      <div className={showHideClassName}> 
        <section className='card'     
        style={{
          backgroundImage: "url("+ img +")"
        }}>    
            <h2 style={{padding:"10%", paddingTop:"20%", color:"whitesmoke"}}>{modalText}</h2>
        </section>
      </div>
    );
  };

export default Modal;