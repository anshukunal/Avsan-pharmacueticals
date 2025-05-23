import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "./ProductContent.module.css";
import useIsMobileOrTablet from "./ScrollHookAnimation"; // Adjust the import path as needed

const products = [
  {
    name: "Apzox",
    img: "./apzox_img.jpeg",
    discription:
      "APZOX is a dietary supplement that combines the power of Apigenin and Zinc to support overall health and well-being. It is designed to provide antioxidant protection, promote immune function, and support cellular health.",
  },
  {
    name: "AV-Ten",
    img: "./av_ten_img.jpeg",
    discription:
      "APZOX is a dietary supplement that combines the power of Apigenin and Zinc to support overall health and well-being. It is designed to provide antioxidant protection, promote immune function, and support cellular health.",
  },
  {
    name: "AV-Trienol",
    img: "./av_trienol_img.jpeg",
    discription:
      "APZOX is a dietary supplement that combines the power of Apigenin and Zinc to support overall health and well-being. It is designed to provide antioxidant protection, promote immune function, and support cellular health.",
  },
  {
    name: "Avitaz-2.5",
    img: "./apzox.jpeg",
    discription:
      "APZOX is a dietary supplement that combines the power of Apigenin and Zinc to support overall health and well-being. It is designed to provide antioxidant protection, promote immune function, and support cellular health.",
  },
  {
    name: "Glutasan-600",
    img: "./apzox.jpeg",
    discription:
      "APZOX is a dietary supplement that combines the power of Apigenin and Zinc to support overall health and well-being. It is designed to provide antioxidant protection, promote immune function, and support cellular health.",
  },
  {
    name: "Glutasan",
    img: "./apzox.jpeg",
    discription:
      "APZOX is a dietary supplement that combines the power of Apigenin and Zinc to support overall health and well-being. It is designed to provide antioxidant protection, promote immune function, and support cellular health.",
  },
  {
    name: "Rivosan",
    img: "./rivosan_img.jpeg",
    discription:
      "APZOX is a dietary supplement that combines the power of Apigenin and Zinc to support overall health and well-being. It is designed to provide antioxidant protection, promote immune function, and support cellular health.",
  },
  {
    name: "Sanigest-300",
    img: "./apzox.jpeg",
    discription:
      "APZOX is a dietary supplement that combines the power of Apigenin and Zinc to support overall health and well-being. It is designed to provide antioxidant protection, promote immune function, and support cellular health.",
  },
];

function ProductContent() {
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <div className={styles.cardContainer}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: isMobileOrTablet, amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./apzox_img.png" alt="APZOX Tablets" />
      </motion.div>

      {/* Text Content Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: isMobileOrTablet, amount: 0.7 }}
        style={{ overflow: "hidden" }}
        className={styles.productContent}
      >
        <div className={styles.productText}>
          <h3>APZOX Tablets</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>
                Aceclofenac, Paracetamol & Chlorzoxazone Tablets
              </li>
              <li>Packing : 1*10 Tablets </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent} ${styles.row3}`}
      >
        <div className={styles.productText}>
          <h3>AV Glu</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>L-Glutamine</li>
              <li>Packing : 1*6 Sachet</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./av_glu_img.png" alt="AV Glu" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./av_multi_img.png" alt="Av Multi" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.productContent}
      >
        <div className={styles.productText}>
          <h3>AV Multi</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>
                Multivitamin & Multimineral with Grape Seeds
              </li>
              <li>Packing : 1*30 Tablet</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent} ${styles.row7}`}
      >
        <div className={`${styles.productText} `}>
          <h3>AV Ten</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>
                Ubidecarenone, Lycopene, Omega-3-Fatty Acid, Mixed Carotene 10%,
                Wheat Grem Oil, Calcium Ascorbate, Vitamine B12, Selenium
                Dioxied & Zinc Sulphate Monohydrate Soft Gelatin Capsules
              </li>
              <li>Packing : 1*10 Tablet</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./av_ten_img.png" alt="AV Ten" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./av_trienol_img.png" alt="AV Trienol" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent}`}
      >
        <div className={`${styles.productText} `}>
          <h3>AV Trienol</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>
                Gamma & delta tocotrienol isomers derived from tocotrienol rich
                fractions
              </li>
              <li>Packing : 1*30 Softgel Capsules</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent} ${styles.row11}`}
      >
        <div className={`${styles.productText} `}>
          <h3>Avitaz</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>
                Ceftazidime and Avibactam Power for ConCentrate for Solution for
                Infusion 2.5g
              </li>
              <li>Packing : 1*1 Injection</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./avitaz_img.png" alt="Avitaz" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./avixib_img.png" alt="Avixib" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent} `}
      >
        <div className={`${styles.productText} `}>
          <h3>Avixib</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>
                Etoricoxib Soft Gel Capsules 60mg
              </li>
              <li>Packing : 1*10 Capsules</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent} ${styles.row15}`}
      >
        <div className={`${styles.productText} `}>
          <h3>Calote</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>
                Clacium Orotate, Magnesium Orotae & Vitamin D3
              </li>
              <li>Packing : 1*10 Tablet</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./calote_img.png" alt="Calote" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./genu_oil_img.png" alt="Genu Oil" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent}  `}
      >
        <div className={`${styles.productText} `}>
          <h3>Genu Oil</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>Pain Relief Oil</li>
              <li>Packing : 1*1 Bottle</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent} ${styles.row19}`}
      >
        <div className={`${styles.productText} `}>
          <h3>Glutasan 250MG</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>L-Glutathione</li>
              <li>Packing : 1*10 Capsules</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./glutasan_250mg_img.png" alt="Glutasan 250mg" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./glutasan_600mg_img.png" alt="Glutasan 600mg" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent}  `}
      >
        <div className={`${styles.productText} `}>
          <h3>Glutasan 600MG</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>Glutathione</li>
              <li>Packing : 1*1 Injection</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent} ${styles.row23}`}
      >
        <div className={`${styles.productText} `}>
          <h3>Livosam</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>S-Adenosyl-L-Methionine </li>
              <li>Packing : 1*10 Tablets</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./livosam_img.png" alt="Livosam" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./lung_plus_img.png" alt="Lung Plus" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent}  `}
      >
        <div className={`${styles.productText} `}>
          <h3>Lung Plus</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>
                Protein Power, Food Supplement for Respiratory Care
              </li>
              <li>Packing : 1*1 Bottle</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent}  ${styles.row27}`}
      >
        <div className={`${styles.productText} `}>
          <h3>Rivosan</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>
                Rifaximin Tablets BP 550Mg
              </li>
              <li>Packing : 1*10 Tablets</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./rivosan_img.png" alt="Rivosan" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./sanigest_img.png" alt="Sanigest" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent}  `}
      >
        <div className={`${styles.productText} `}>
          <h3>Sanigest</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>
                Ursodeoxycholic Acid Tablets IP 300mg
              </li>
              <li>Packing : 1*10 Tablets</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={`${styles.productContent} ${styles.marginBottom} ${styles.row31}`}
      >
        <div className={`${styles.productText} `}>
          <h3>Sanov D3</h3>
          <div className={styles.productDetails}>
            <ul>
              <li className={styles.marginBottom}>
                Vitamin D3 Oral Solution 60000 IU
              </li>
              <li className={styles.marginBottom}>Packing : 1*4 Nano Shots</li>
              <li>Suger Free</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.7 }}
        className={styles.cardImage}
      >
        <img src="./sanov_d3_img.png" alt="Sanov D3" />
      </motion.div>
    </div>
  );
}

export default ProductContent;
