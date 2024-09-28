import React from "react";
import styles from "./Footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer>
      <div class={styles.footerContainer}>
        <div class={styles.footerColumn}>
          <h3>About Avsan Pharmaceuticals</h3>
          <p>
            At Avsan Pharmaceuticals, we are dedicated to improving health and
            well-being through innovative research and advanced medical
            solutions.
          </p>
        </div>
        <div class={styles.footerColumn}>
          <h3>Quick Links</h3>
          <ul>
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
        <div class={styles.footerColumn}>
          <h3>Contact Us</h3>
          <p>Email: avsanpharma@gmail.com</p>
          <p>Phone: 011-35679982</p>
          <p>
            Address: 10th Floor, Roots Tower, 1016, Nirman Vihar, Delhi - 110092
          </p>
        </div>
        <div class={styles.footerColumn}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/profile.php?id=61550048401900"
              target="_blank"
            >
              <AiFillFacebook />
            </a>
            <a href="https://www.linkedin.com/in/av-pharma/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.instagram.com/avsanpharmaceuticals?utm_source=qr&igsh=cmNkNDhsd2k0cTRi"
              target="_blank"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
      <div class={styles.footerBottom}>
        &copy; {currentYear} Avsan Pharmaceuticals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
