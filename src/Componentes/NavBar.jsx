import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const NavBar = ({ scrolled }) => {
  const [navigator, setNavigator] = useState(true);
  const navRef = useRef();

  function handleButton() {
    setNavigator((curr) => !curr);
  }

  return (
    <nav
      ref={navRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.imgContainer}>
        <NavLink to="/">
          <img src="./logo-img.png" alt="Company Logo" />
        </NavLink>
      </div>
      <div
        className={`${navigator ? styles.displayNone : styles.displayBlock} `}
      >
        <div className={styles.btn}>
          <button onClick={() => handleButton()}>
            <IoMdClose />
          </button>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/products">Our Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.btn}>
        <button onClick={() => handleButton()}>
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
