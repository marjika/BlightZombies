import React from "react";
import "./Footer.css";
import Instructions from "../Instructions";


const Footer = (props) => (
  <div className="navbar-footer">
      <ul className="nav">
        <li className="nav-item">
            <div className="moves">Moves until random infection: {props.moves}|</div>
            <div className="losses">Outbreaks: {props.outbreaks}|</div>
        </li>
        <li className="nav-item">
            <div className="sample">DNA Sample found: {props.sample && '✔'}|</div>
            <div className="mission1">Mission 1 Complete: {props.mission1 && '✔'}|</div>
        </li>
        <li className="nav-item">
            <div className="sample">Rare Plant found: {props.protein && '✔'}|</div>
            <div className="mission1">Mission 2 Complete: {props.mission2 && '✔'}|</div>
        </li>
        <li className="nav-item">
            <div className="sample">Dr. Jasper found: {props.scientist && '✔'}|</div>
            <div className="mission1">Mission 3 Complete: {props.mission3 && '✔'}|</div>
        </li>
        <li className="nav-item">
            <div className="sample">Immune patient found: {props.immuneMan && '✔'}|</div>
            <div className="mission1">Mission 4 Complete: {props.mission4 && '✔'}|</div>
        </li>
        <li className="nav-item">
            <Instructions />
        </li>
      </ul>
  </div>
);

export default Footer;