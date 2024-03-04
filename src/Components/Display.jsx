import React from "react";

const Display = ({ val1, op, val2, Ans }) => {
  let A;
  if (Ans) {
    switch (op) {
      case "/":
        A = val1 + val2;
        break;
      case "+":
        A = val1 + val2;
        break;
      case "*":
        A = val1 + val2;
        break;
      case "-":
        A = val1 + val2;
        break;

      default:
        console.log("YOYO CalCulater");
        console.log(opt);
        break;
    }
  }

  return (
    <div>
      <input
        id="input"
        type="text"
        readOnly
        value={Ans ? A : `${val1} ${op} ${val2}`}
      />
    </div>
  );
};

export default Display;
