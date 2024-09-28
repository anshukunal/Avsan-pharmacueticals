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
              <div className={styles.productItem}>
                <div className={styles.productImageBox}>
                  <img
                    className={styles.borderTop}
                    src="./apzox.jpeg"
                    alt="APZOX Tablets"
                  />
                </div>

                <div className={styles.text}>
                  <p>
                    <strong>APZOX Tablets</strong>
                  </p>
                </div>
              </div>

              <div className={styles.productItem}>
                <div className={styles.productImageBox}>
                  <img
                    className={styles.borderTop}
                    src="./av-ten.jpeg"
                    alt="AV-TEN"
                  />
                </div>

                <div className={styles.text}>
                  <p>
                    <strong>AV-TEN</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.product} ${styles.marginTop}`}>
              <div className={styles.productItem}>
                <div className={styles.productImageBox}>
                  <img
                    className={styles.borderTop}
                    src="./av-trienol.jpeg"
                    alt="AV-TRIENOL"
                  />
                </div>

                <div class={styles.text}>
                  <p>
                    <strong>AV-TRIENOL </strong>
                  </p>
                </div>
              </div>

              <div className={styles.productItem}>
                <div className={styles.productImageBox}>
                  <img
                    className={styles.borderTop}
                    src="./avitaz-2.5g.jpeg"
                    alt="AVITAZ-2.5g"
                  />
                </div>

                <div class={styles.text}>
                  <p>
                    <strong>AVITAZ-2.5g</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.product} ${styles.marginTop}`}>
              <div className={styles.productItem}>
                <div className={styles.productImageBox}>
                  <img
                    className={styles.borderTop}
                    src="./glutasan-600.jpeg"
                    alt="GLUTASAN-600"
                  />
                </div>

                <div class={styles.text}>
                  <p>
                    <strong>GLUTASAN-600</strong>
                  </p>
                </div>
              </div>

              <div className={styles.productItem}>
                <div className={styles.productImageBox}>
                  <img
                    className={styles.borderTop}
                    src="./glutasan.jpeg"
                    alt="GLUTASAN"
                  />
                </div>
                <div class={styles.text}>
                  <p>
                    <strong>GLUTASAN</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.product} ${styles.marginTop}`}>
              <div className={styles.productItem}>
                <div className={styles.productImageBox}>
                  <img
                    className={styles.borderTop}
                    src="./rivosan-550.jpeg"
                    alt="RIVOSAN-550"
                  />
                </div>
                <div class={styles.text}>
                  <p>
                    <strong>RIVOSAN-550</strong>
                  </p>
                </div>
              </div>

              <div className={styles.productItem}>
                <div className={styles.productImageBox}>
                  <img
                    className={styles.borderTop}
                    src="./sanigest-300.jpeg"
                    alt="Sanigest-300 Tablets"
                  />
                </div>
                <div class={styles.text}>
                  <p>
                    <strong>SANIGEST-300 Tablets</strong>
                  </p>
                </div>
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
