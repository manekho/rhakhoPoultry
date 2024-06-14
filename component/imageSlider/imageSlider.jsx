"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./imageSlider.module.css";

const images = [
  "/a.jpg",
  "/b.jpg",
  "/c.jpg",
  "/d.jpg",
  "/e.jpg",
  "/f.jpg",
  "/g.jpg",
  "/h.jpg",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.imageContainer}>
        {images.map((src, index) => (
          <div
            className={
              index === current
                ? `${styles.slide} ${styles.active}`
                : styles.slide
            }
            key={index}
          >
            {index === current && (
              <Image
                className={styles.image}
                src={src}
                alt={`Image ${index + 1}`}
                width={250}
                height={250}
              />
            )}
          </div>
        ))}
      </div>
      <div className={styles.arrow_button_container}>
        <button className={styles.leftArrow} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={styles.rightArrow} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
