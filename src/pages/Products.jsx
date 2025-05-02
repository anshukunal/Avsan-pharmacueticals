import { useState, useEffect } from "react";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import styles from "./Products.module.css";
import ProductContent from "../Componentes/ProductContent";

const productsSlide = [
  { name: "Apzox", img: "./apzox_img.png" },
  { name: "AV Glu", img: "./av_glu_img.png" },
  { name: "AV Multi", img: "./av_multi_img.png" },
  { name: "AV Ten", img: "./av_ten_img.png" },
  { name: "AV Trienol", img: "./av_trienol_img.png" },
  { name: "Avitaz", img: "./avitaz_img.png" },
  { name: "Calote", img: "./calote_img.png" },
  { name: "genu_oil", img: "./genu_oil_img.png" },
  { name: "Glutasan-250mg", img: "./glutasan_250mg_img.png" },
  { name: "Glutasan-600mg", img: "./glutasan_600mg_img.png" },
  { name: "livosam", img: "./livosam_img.png" },
  { name: "Lung Plus", img: "./lung_plus_img.png" },
  { name: "Rivosan", img: "./rivosan_img.png" },
  { name: "Sanigest", img: "./sanigest_img.png" },
  { name: "sanov_d3_img", img: "./sanov_d3_img.png" },
];

const products = [
  { name: "Apzox", img: "./apzox.jpeg" },
  { name: "AV-Ten", img: "./apzox.jpeg" },
  { name: "AV-Trienol", img: "./apzox.jpeg" },
  { name: "Avitaz-2.5", img: "./apzox.jpeg" },
  { name: "Glutasan-600", img: "./apzox.jpeg" },
  { name: "Glutasan", img: "./apzox.jpeg" },
  { name: "Rivosan", img: "./apzox.jpeg" },
  { name: "Sanigest-300", img: "./apzox.jpeg" },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productsSlide.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const slideStyles = {
    width: "100%",
    height: "100%",
    // margin: "0 auto",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${productsSlide[currentIndex].img})`,
    transition: "1s",
  };

  const dotStylesColor = { color: "#1E90FF" };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevious = () => {
    const previousIndex =
      (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(previousIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className={styles.products}>
        <NavBar />

        <div className={styles.container}>
          <div className={styles.leftArrowStyle} onClick={goToPrevious}>
            {/* &lt; */}
          </div>
          <div className={styles.rightArrowStyle} onClick={goToNext}>
            {/* &gt; */}
          </div>
          <div style={slideStyles}></div>
          <div className={styles.dotStylesContainer}>
            {productsSlide.map((product, index) => (
              <>
                <div
                  key={index}
                  className={styles.dotStyles}
                  onClick={() => {
                    goToSlide(index);
                  }}
                  style={currentIndex === index ? dotStylesColor : {}}
                >
                  •
                </div>
              </>
            ))}
          </div>
        </div>
        <ProductContent />
        <Footer />
      </div>
    </>
  );
};

export default Products;
