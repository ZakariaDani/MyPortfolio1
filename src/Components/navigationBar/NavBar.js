import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [selected, setSelected] = useState([true,false,false,false]);
  useEffect(() => {
    setSelected(JSON.parse(window.localStorage.getItem('selected')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('selected', JSON.stringify(selected));
  }, [selected]);
  const home = () => {
    setSelected([true]);
  }
  const about = () => {
    setSelected([, true]);
  }
  const skills = () => {
    setSelected([, , true,]);
  }
  const contact = () => {
    setSelected([, , , true]);
  }
  return (
    <>
    <div className="navigation" >
      <h1>{selected}</h1>
      <ul>
        <li
          className={`list ${selected[0] ? "active" : ""}`}
          onClick={home}
        >
          <Link to="/">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li
          className={`list ${selected[1] ? "active" : ""}`}
          onClick={about}
        >
          <Link to="/about">
            <span className="icon">
              <ion-icon name="alert-circle-outline"></ion-icon>
            </span>
            <span className="text">About</span>
          </Link>
        </li>
        <li
          className={`list ${selected[2] ? "active" : ""}`}
          onClick={skills}
        >
          <Link to="/skills" >
            <span className="icon">
              <ion-icon name="cog-outline"></ion-icon>
            </span>
            <span className="text">Skills</span>
          </Link>
        </li>
        <li
          className={`list ${selected[3] ? "active" : ""}`}
          onClick={contact}
        >
          <Link to="/contacts">
            <span className="icon">
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </span>
            <span className="text">Contact</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
    <Outlet />
    </>
  );
};
export default NavBar;
