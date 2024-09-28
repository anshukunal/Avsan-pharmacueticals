import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  const [navigator, setNavigator] = useState(true);
  const navRef = useRef();

  useGSAP(() => {
    gsap.from(navRef.current, {
      duration: 1,
      delay: 0.5,
      y: "-100%",
      ease: "bounce",
    });
  });

  function handleButton() {
    setNavigator((curr) => !curr);
  }

  return (
    <div ref={navRef} className={styles.navbar}>
      <div className={styles.imgContainer}>
        <NavLink to="/">
          <img src="./logo-avsan.png" alt="Company Logo" />
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
            <NavLink to="/about">About</NavLink>
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
    </div>
  );
};

export default NavBar;
