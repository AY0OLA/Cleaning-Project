import React, { useState } from "react";
import { useEffect } from "react";
import "./Header.css";
import { MdCleaningServices } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Header = () => {
  const [active, setActive] = useState("navBar");
  // function to toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
  return (
    <section className="section">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdCleaningServices className="icon" />
              Cleanzer
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Jobs
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                FAQ
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                FR
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Referral
              </a>
            </li>
            <button className="btn">
              <a href="#">Request An Estimate</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <IoMdCloseCircle classname="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};
export default Header;
