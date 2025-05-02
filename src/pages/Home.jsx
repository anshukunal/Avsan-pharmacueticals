import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  { title: "Innovative Research", icon: "🖌️" },
  { title: "Quality Assurance", icon: "📊" },
  { title: "Experienced Team", icon: "🎨" },
  { title: "Patient-Centric Approach", icon: "☎️" },
  { title: "Ethical Practices", icon: "💰" },
];

const Home = () => {
  const [scroll, setScroll] = useState(false);

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
    <>
      <div className={styles.home}>
        <NavBar scrolled={scroll} />

        <div className={styles.container}>
          <header className={styles.hero}></header>

          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className={styles.heroText}
          >
            <h1>Innovating for a Healthier Tomorrow</h1>
            <div className={styles.btnContainer}>
              <motion.div
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0, once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <button className={styles.btn}>
                  <NavLink to="/about">About Us</NavLink>
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0, once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <button className={`${styles.btn} ${styles.marginLeft}`}>
                  <NavLink to="/products">View Products</NavLink>
                </button>
              </motion.div>
            </div>
          </motion.div>
          <section class={styles.whyChooseUs}>
            <h2>Why Choose Avsan Pharmaceuticals?</h2>
            <div class={styles.featuresBox}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                class={styles.feature}
              >
                <div className={styles.iconBox}>
                  <span>💡</span>
                </div>
                <h3>Innovative Research</h3>
                <p>
                  At Avsan Pharmaceuticals, we invest heavily in cutting-edge
                  research to bring you the latest in medical advancements and
                  treatments.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                class={styles.feature}
              >
                <div className={styles.iconBox}>
                  <span>📋</span>
                </div>
                <h3>Quality Assurance</h3>
                <p>
                  Our rigorous quality control processes ensure that every
                  product meets the highest standards of safety and efficacy.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                class={styles.feature}
              >
                <div className={styles.iconBox}>
                  <span>👥</span>
                </div>
                <h3>Experienced Team</h3>
                <p>
                  Our team of experts includes some of the most respected
                  scientists and healthcare professionals in the industry.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                viewport={{ once: true }}
                class={styles.feature}
              >
                <div className={styles.iconBox}>
                  <span>❤️</span>
                </div>
                <h3>Patient-Centric Approach</h3>
                <p>
                  Our primary focus is on improving patient outcomes and
                  enhancing the quality of life through personalized treatment
                  plans.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                viewport={{ once: true }}
                class={styles.feature}
              >
                <div className={styles.iconBox}>
                  <span>⚖️</span>
                </div>
                <h3>Ethical Practices</h3>
                <p>
                  We adhere to the highest ethical standards in all our
                  operations, ensuring transparency and integrity in everything
                  we do.
                </p>
              </motion.div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
