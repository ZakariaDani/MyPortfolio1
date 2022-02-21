import React from "react";
import Typed from "react-typed";
import "./Home.css";

const Home = () => {
  let texts = ["Zakaria Dani", "a Software Engineer", "a Web Developer"];
  return (
    <div id="home">
      <div id="img"></div>
      <h3>Hello, I am <Typed
            strings={texts}
            typeSpeed={40}
            backSpeed={50}
            loop
          /></h3>
        
          <p>passionate about creating interactive applications and experiences on the web.</p>
          <div id="socialMedia">
            <button id="resume">Resume</button>
            <button id="linkedin"><a href="https://www.linkedin.com/in/zakaria-dani-5a2961121/" ><ion-icon name="logo-linkedin"></ion-icon></a></button>
            <button id="gitHub"><a href="https://github.com/ZakariaDani"><ion-icon name="logo-github"></ion-icon></a></button>
          </div>
    </div>
  );
};

export default Home;
