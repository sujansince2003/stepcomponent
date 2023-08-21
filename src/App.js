import React, { useState } from "react";
import "./index.css";
import Faq from "./Faq";

const messages = [
  "Order the product📦",
  "It is packed and send for delivery🚛",
  "You receive the Product😉",
];
const App = () => {
  const [step, setstep] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setisOpen(() => !isOpen);
        }}
        className="close"
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                setstep(() => (step > 1 ? step - 1 : step));
              }}
              style={{ backgroundColor: "#7950f2", color: "white" }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                setstep(() => (step < 3 ? step + 1 : step));
              }}
              style={{ backgroundColor: "#7950f2", color: "white" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      <Faq />
    </>
  );
};

export default App;
