import "./Selecteurs.css";
import { useState } from "react";

const Selecteurs = () => {
  const [selectedSq, setSelectedSq] = useState(0);
  const [selectedCirqle, setSelectedCirqle] = useState(0);

  return (
    <div>
      <div className="selecteurContainer">
        <div
          className={selectedSq === 1 ? "squareGreen" : "squareOrange"}
          onClick={() => {
            setSelectedSq(1);
          }}
          onMouseLeave={() => {
            console.log("MOUSE LEAVE");
          }}
        ></div>
        <div
          className={selectedSq === 2 ? "squareGreen" : "squareOrange"}
          onClick={() => {
            setSelectedSq(2);
          }}
        ></div>
        <div
          className={selectedSq === 3 ? "squareGreen" : "squareOrange"}
          onClick={() => {
            setSelectedSq(3);
          }}
        ></div>
      </div>

      <div className="cirqle">
        <div
          className={selectedCirqle === 1 ? "cirqleGreen" : "cirqleOrange"}
          onClick={() => {
            setSelectedCirqle(1);
          }}
          onMouseLeave={() => {
            console.log("MOUSE LEAVE");
          }}
        ></div>
        <div
          className={selectedCirqle === 2 ? "cirqleBlue" : "cirqleOrange"}
          onClick={() => {
            setSelectedCirqle(2);
          }}
        ></div>
        <div
          className={selectedCirqle === 3 ? "cirqleWhite" : "cirqleOrange"}
          onClick={() => {
            setSelectedCirqle(3);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Selecteurs;
