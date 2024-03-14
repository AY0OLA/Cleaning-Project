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
    <>
      <header className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <MdCleaningServices className="icon" />
              Cleanzer
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists">
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
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <IoMdCloseCircle className="icon" />
          </div>
          <div className="ntg">
            <button className="btn">
              <a href="#">Request An Estimate</a>
            </button>
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </>
  );
};
export default Header;
