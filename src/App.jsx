import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Components/Button";
import Display from "./Components/Display";

function App() {
  const arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arrOpt = ["/", "*", "+", "-", "="];

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [opt, setOpt] = useState("");
 
  const [show, setShow] = useState(false);
  
  const updateNum1 = (btnVal) => {
    // num1 ? setNum2(btnVal) : setNum1(btnVal);

    if (num1 === null) setNum1(btnVal);
    else setNum2(btnVal);
    console.log(num1, num2);
  };

  const updateOpt = (opt) => {
    opt === "=" ? setShow(true) : setOpt(opt);
  };

  return (
    <>
      <div id="main">
        <div id="dis">
          <Display val1={num1} op={opt} val2={num2} Ans={show} />
        </div>
        <div id="btnFrm">
          <div id="nums">
            {arrNumbers.map((num) => (
              <Button
                key={num}
                btnFunc={updateNum1}
             
                btnVal={num}
              />
            ))}
          </div>
          <div id="opts">
            {arrOpt.map((num) => (
              <Button key={num} btnFunc={updateOpt} btnVal={num} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
