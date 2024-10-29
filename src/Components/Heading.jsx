import React from "react";
import ReactDom from "react-dom";
import App from "../App";

function Heading() {
  const date = new Date(2022, 22, 1, 22);
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning Team";
    customStyle.color = "orange";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "red";
  } else {
    greeting = "Good Night";
    customStyle.color = "Black";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
