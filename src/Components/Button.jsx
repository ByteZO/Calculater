import React, { useState } from "react";
import "../App.css";

const Button = ({ btnVal, btnFunc , }) => {


  




  return (
    <button onClick={() => btnFunc(btnVal)} id="btn">
      {`${btnVal}`}
    </button>
  );
};

export default Button;
