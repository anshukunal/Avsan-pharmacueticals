import React from "react";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import styles from "./About.module.css";
import ScrollToTop from "../Componentes/ScrollToTop";

const About = () => {
  return (
    <div>
      <NavBar />
      <div class={styles.hero}></div>

      <div className={styles.heroText}>
        <h2>Welcome to Avsan Pharmaceuticals</h2>
        <p>
          Revolutionizing healthcare through innovative pharmaceutical solutions
          since 2022
        </p>
      </div>

      <div class={styles.container}>
        <section className={styles.aboutUs}>
          <div className={styles.content}>
            <div className={`${styles.text} ${styles.borderBottom}`}>
              <h2>Our Mission</h2>
              <p>
                Our mission is to discover, develop, and deliver effective and
                safe pharmaceutical products that address the most pressing
                medical needs. We aim to improve patient outcomes and contribute
                to a healthier global community.
              </p>
            </div>
            <div class={`${styles.image} ${styles.order}`}>
              <img src="/our-mission.png" alt="Pharmaceuticals Research" />
            </div>
          </div>

          <div className={styles.content}>
            <div class={styles.image}>
              <img src="/our-vision-img.jpg" alt="Pharmaceuticals Research" />
            </div>
            <div className={`${styles.text} ${styles.borderBottom}`}>
              <h2>Our Vision</h2>
              <p>
                We envision a future where everyone has access to the best
                healthcare solutions. Through relentless research and
                development, we strive to lead in medical innovations and set
                new standards in the pharmaceutical industry.
              </p>
            </div>
          </div>

          <div className={styles.content}>
            <div className={`${styles.text}`}>
              <h2>Our History</h2>
              <p>
                Founded in 2022, Avsan Pharmaceuticals started with a vision to
                transform the healthcare industry. Despite being a relatively
                young company, we have rapidly grown and established ourselves
                as a trusted name in pharmaceuticals. Our journey is marked by a
                relentless pursuit of excellence and a commitment to making a
                difference in patients' lives.
              </p>
            </div>
            <div class={`${styles.image} ${styles.order}`}>
              <img src="/our-history-img.jpg" alt="Pharmaceuticals Research" />
            </div>
          </div>
        </section>

        {/* <h2>Join Us</h2>
        <p>
          We are always looking for talented individuals who share our passion
          for healthcare and innovation. If you are interested in joining our
          dynamic team, please visit our careers page for current opportunities.
        </p> */}
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
