import React from "react";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div>
      <>
        <NavBar />

        <div class={styles.hero}></div>

        <div className={styles.heroText}>
          <h2>Our Products</h2>
        </div>

        <main>
          <div className={styles.ourProducts}>
            <div className={styles.product}>
              <div className={styles.productImageBox}>
                <img
                  className={styles.borderLeft}
                  src="./apzox.jpeg"
                  alt="APZOX Tablets"
                />
              </div>

              <div class={styles.text}>
                <p>
                  <strong>APZOX Tablets</strong> contain Aceclofenac,
                  Paracetamol, and Chlorzoxazone, providing effective relief
                  from pain and inflammation. These tablets are formulated for
                  rapid absorption to provide quick relief and are trusted by
                  healthcare professionals for their efficacy and safety.
                </p>
              </div>
            </div>

            <div className={`${styles.product} ${styles.marginTop}`}>
              <div class={styles.text}>
                <p>
                  <strong>AV-TEN</strong> Soft Gelatin Capsules are a
                  comprehensive dietary supplement designed to support overall
                  health and wellness. These capsules combine a variety of
                  essential vitamins, minerals, and nutrients to help maintain
                  and improve bodily functions.
                </p>
              </div>

              <div className={styles.productImageBox}>
                <img
                  className={styles.borderRight}
                  src="./av-ten.jpeg"
                  alt="AV-TEN"
                />
              </div>
            </div>

            <div className={`${styles.product} ${styles.marginTop}`}>
              <div className={styles.productImageBox}>
                <img
                  className={styles.borderLeft}
                  src="./av-trienol.jpeg"
                  alt="AV-TRIENOL"
                />
              </div>

              <div class={styles.text}>
                <p>
                  <strong>APZOX Tablets</strong> Antioxidant Soft Gelatin
                  Capsules are formulated to provide powerful antioxidant
                  protection. These capsules contain Gamma and Delta
                  Tocotrienols, which are members of the Vitamin E family known
                  for their potent antioxidant properties.
                </p>
              </div>
            </div>

            <div className={`${styles.product} ${styles.marginTop}`}>
              <div class={styles.text}>
                <p>
                  <strong>AVITAZ-2.5g</strong> is an antibiotic injection
                  formulated to combat serious bacterial infections. It combines
                  the active ingredients Ceftazidime and Avibactam, providing
                  broad-spectrum activity against a wide range of bacteria.
                </p>
              </div>

              <div className={styles.productImageBox}>
                <img
                  className={styles.borderRight}
                  src="./avitaz-2.5g.jpeg"
                  alt="AVITAZ-2.5g"
                />
              </div>
            </div>

            <div className={`${styles.product} ${styles.marginTop}`}>
              <div className={styles.productImageBox}>
                <img
                  className={styles.borderLeft}
                  src="./glutasan-600.jpeg"
                  alt="GLUTASAN-600"
                />
              </div>

              <div class={styles.text}>
                <p>
                  <strong>GLUTASAN-600</strong> is an antioxidant injection
                  formulated to provide the body with a powerful dose of
                  Glutathione, a potent antioxidant that helps protect cells
                  from oxidative damage and supports overall health.
                </p>
              </div>
            </div>

            <div className={`${styles.product} ${styles.marginTop}`}>
              <div class={styles.text}>
                <p>
                  <strong>GLUTASAN</strong> Antioxidant Capsules are formulated
                  to deliver a potent dose of Glutathione, a powerful
                  antioxidant that helps protect cells from oxidative damage and
                  supports overall health and wellness.
                </p>
              </div>

              <div className={styles.productImageBox}>
                <img
                  className={styles.borderRight}
                  src="./glutasan.jpeg"
                  alt="GLUTASAN"
                />
              </div>
            </div>

            <div className={`${styles.product} ${styles.marginTop}`}>
              <div className={styles.productImageBox}>
                <img
                  className={styles.borderLeft}
                  src="./rivosan-550.jpeg"
                  alt="RIVOSAN-550"
                />
              </div>

              <div class={styles.text}>
                <p>
                  <strong>RIVOSAN-550</strong> Gut Health Tablets are formulated
                  with Rifaximin, an antibiotic that targets the gut, to help
                  manage and treat gastrointestinal conditions. It is used
                  primarily for its antimicrobial effects within the
                  gastrointestinal tract, providing relief from various
                  gut-related issues.
                </p>
              </div>
            </div>

            <div className={`${styles.product} ${styles.marginTop}`}>
              <div class={styles.text}>
                <p>
                  <strong>APZOX Tablets</strong> contain Aceclofenac,
                  Paracetamol, and Chlorzoxazone, providing effective relief
                  from pain and inflammation. These tablets are formulated for
                  rapid absorption to provide quick relief and are trusted by
                  healthcare professionals for their efficacy and safety.
                </p>
              </div>

              <div className={styles.productImageBox}>
                <img
                  className={styles.borderRight}
                  src="./sanigest-300.jpeg"
                  alt="APZOX Tablets"
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    </div>
  );
};

export default Products;
