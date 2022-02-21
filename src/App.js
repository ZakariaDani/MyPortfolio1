import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/about/About";
import Contacts from "./Components/contacts/Contacts";
import Home from "./Components/home/Home";
import NavBar from "./Components/navigationBar/NavBar";
import PourceBar from "./Components/skills/pourcentageBar/PourceBar";
import Skills from "./Components/skills/Skills";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />}/>
          <Route path="contacts" element={<Contacts />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
