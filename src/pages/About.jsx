import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import styles from "./About.module.css";
import ScrollToTop from "../Componentes/ScrollToTop";
import { b } from "framer-motion/client";

const About = () => {
  const [scroll, setScroll] = useState(false);
  const learnMoreRef = useRef(null);

  const buttonScrooll = () => {
    learnMoreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.about}>
      <NavBar scrolled={scroll} />
      <div class={styles.hero}></div>

      <div className={styles.heroText}>
        <p>Trusted Healthcare Solutions for a Better Tomorrow</p>
        <button onClick={buttonScrooll} className={styles.learnMore}>
          Learn More
        </button>
      </div>

      <div ref={learnMoreRef} class={styles.containerAboutUs}>
        <section className={styles.aboutUs}>
          <div className={styles.aboutUsContent}>
            <div className={`${styles.aboutUsText} ${styles.borderBottom}`}>
              <h2>Who We Are</h2>
              <p>
                At Avsan Pharmaceuticals, we believe that good health starts
                with access to reliable, high-quality medicines. Our mission is
                to provide effective and affordable pharmaceutical solutions
                that empower people to lead healthier lives.
              </p>
            </div>
            {/* <div class={`${styles.aboutUsImage} ${styles.order}`}>
              <img src="./who-we-are-img.png" alt="Pharmaceuticals Research" />
            </div> */}
          </div>

          <div className={styles.cardContainer}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className={`${styles.card} ${styles.card1}`}
            >
              <img
                className={styles.icon}
                src="/vision-icon-img.png"
                alt="Vision Icon"
              />
              <h3>Our Vision</h3>
              <p>
                To be a leading name in the pharmaceutical industry by offering
                trusted, affordable healthcare products that improve lives and
                strengthen communities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className={`${styles.card} ${styles.card2}`}
            >
              <img
                className={styles.icon}
                src="/mission-icon-img.png"
                alt="Mission Icon"
              />
              <h3>Our Mission</h3>
              <p>
                To deliver high-quality and effective pharmaceutical products
                with integrity, affordability, and care.
              </p>
            </motion.div>
          </div>

          <div className={styles.whyChooseUsContainer}>
            <h2>Why Choose Us?</h2>
            <div className={styles.whyChooseUsContent}>
              <div className={styles.whyChooseUspoint}>
                <div className={styles.whyChooseUsIcon}>🛡️</div>
                <h3>Trusted Quality</h3>
              </div>
              <div className={styles.whyChooseUspoint}>
                <div className={styles.whyChooseUsIcon}>💰</div>
                <h3>Affordable Pricing</h3>
              </div>
              <div className={styles.whyChooseUspoint}>
                <div className={styles.whyChooseUsIcon}>🛡️</div>
                <h3>Customer-Centric</h3>
              </div>
              <div className={styles.whyChooseUspoint}>
                <div className={styles.whyChooseUsIcon}>🚚</div>
                <h3>Reliable Supply</h3>
              </div>
            </div>
          </div>

          <div className={styles.qualityContainer}>
            <div
              className={styles.qualityImgBox}
              style={{
                backgroundImage: "url('./home-hero-img.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                padding: "20px",
                width: "100%",
                color: "white",
              }}
            >
              <div className={styles.qualityTextBox}>
                <h2 className={styles.qualityHeading}>
                  Our Commitment to Quality
                </h2>
                <p className={styles.qualityText}>
                  Quality is at the heart of everything we do. We ensure that
                  every medicine we offer meets the highest standards for
                  safety, effectiveness, and consistency — because your health
                  deserves nothing less.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.toContactUs}>
            <h2>Let’s Build a Healthier Future Together</h2>
            <p>
              Together, we can make trusted healthcare more accessible to
              everyone.
            </p>
            <button>
              <NavLink to="/Contact">Get in Touch</NavLink>
            </button>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
