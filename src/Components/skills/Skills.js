import react from "react";
import "./Skills.css";
import PourceBar from "./pourcentageBar/PourceBar";

const Skills = () => {
  return (
    <div id="skills">
      <div  id="lang">
        <PourceBar pourcentage="80" language="java" />
        <PourceBar pourcentage="80" language="JavaScript" />
        <PourceBar pourcentage="70" language="Python" />
        <PourceBar pourcentage="60" language="SQL" />
      </div>
      <div id="frameworks">
            <div id="react"></div>
            <div id="angular"></div>
            <div id="spring"></div>
            <div id="node"></div>
      </div>
    </div>
  );
};

export default Skills;
