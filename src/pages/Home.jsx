import React from "react";
import styles from "./Home.module.css";
import Footer from "../Componentes/Footer";
import { NavLink } from "react-router-dom";

const Home = ({ children }) => {
  return (
    <>
      {children}

      <div className={styles.container}>
        <header className={styles.hero}></header>

        <div className={styles.heroText}>
          <h1>Innovating Health, Transforming Lives</h1>
          <p>
            Leading the Future of Medicine with Cutting-Edge Research and
            Life-Saving Treatments
          </p>
        </div>

        <section className={styles.visionAndOurProducts}>
          <div className={`${styles.visionCard} ${styles.card}`}>
            <h3>Our Vision</h3>
            <p>
              To be a global leader in healthcare by delivering innovative and
              effective solutions for better health and well-being.
            </p>
          </div>
          <div className={`${styles.productsCard} ${styles.card}`}>
            <h3>Our Products</h3>
            <p>
              Explore our wide range of medications, treatments, and medical
              devices designed to improve lives and promote health.
            </p>
            <button>
              <NavLink to="/products">View Products</NavLink>
            </button>
          </div>
        </section>

        <section class={styles.whyChooseUs}>
          <h2>Why Choose Avsan Pharmaceuticals?</h2>
          <div class={styles.reasons}>
            <div class={styles.reason}>
              <h3>Innovative Research</h3>
              <p>
                At Avsan Pharmaceuticals, we invest heavily in cutting-edge
                research to bring you the latest in medical advancements and
                treatments.
              </p>
            </div>
            <div class={styles.reason}>
              <h3>Quality Assurance</h3>
              <p>
                Our rigorous quality control processes ensure that every product
                meets the highest standards of safety and efficacy.
              </p>
            </div>

            <div class={styles.reason}>
              <h3>Experienced Team</h3>
              <p>
                Our team of experts includes some of the most respected
                scientists and healthcare professionals in the industry.
              </p>
            </div>
            <div class={styles.reason}>
              <h3>Patient-Centric Approach</h3>
              <p>
                Our primary focus is on improving patient outcomes and enhancing
                the quality of life through personalized treatment plans.
              </p>
            </div>
            <div class={styles.reason}>
              <h3>Ethical Practices</h3>
              <p>
                We adhere to the highest ethical standards in all our
                operations, ensuring transparency and integrity in everything we
                do.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
