import react, { useEffect, useState } from "react";
import "./PourceBar.css";

const PourceBar = (props) => {
  let [WIDTH, setWidth] = useState("0%");
  let [i, setI] = useState(0);
  const increment = () => {
    if (i < 1*props.pourcentage) {
      i++;
      setI(i);
    } 
    console.log(i);
  };
  useEffect(() => {
    setWidth(`${props.pourcentage}`.concat("%"));
    setTimeout(() => {increment();}, 30);
  });
  return (
    <div id="container">
      <p id="lang">{props.language}</p>
      <div id="upper">
        <div id="lower" style={{ width: WIDTH }}></div>
      </div>
      <p id="langP">{i}%</p>
    </div>
  );
};

export default PourceBar;
