import React, { useState } from "react";
import "./style.css";

function Calculator() {
  const [calculate, setCalculate] = useState("");
  const [result, setResult] = useState("");

  const operand = ["/", "*", "+", "-", "."];

  const calculator = (value) => {
    //if the is  value is opertor and calculation has nothing or last value is opertor
    if (
      (operand.includes(value) && calculate === "") ||
      (operand.includes(value) && operand.includes(calculate.slice(-1)))
    ) {
      return; //return nothing
    }
    setCalculate(calculate + value);

    //updating result
    if (!operand.includes(value)) {
      setResult(eval(calculate + value).toString());
    }
  };
  const createNumbers = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => calculator(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  //deleltebtn
  const deleteBtn = () => {
    if (calculate == "") {
      return;
    }
    const value = calculate.slice(0, -1);
    setCalculate(value);
  };

  //equals to click function
  const equals = () => {
    setCalculate(eval(calculate).toString());
  };
  return (
    <div className="App">
      <div className="calci">
        <div className="display">{result ? calculate : "0"}</div>
        <div className="operators">
          <button onClick={() => calculator("/")}>/</button>
          <button onClick={() => calculator("*")}>*</button>
          <button onClick={() => calculator("+")}>+</button>
          <button onClick={() => calculator("-")}>-</button>

          <button onClick={deleteBtn}>DEL</button>
        </div>
        <div className="number">
          {createNumbers()}
          <button onClick={() => calculator("0")}>0</button>
          <button onClick={() => calculator(".")}>.</button>
          <button onClick={equals}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
