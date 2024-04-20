"use client";

import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./photoSlider.module.sass";

import slide_1 from "@/public/photoSlider/DSCF2716.jpg";
import slide_2 from "@/public/photoSlider/DSCF2728.jpg";
import slide_3 from "@/public/photoSlider/DSCF2759.jpg";
import slide_4 from "@/public/photoSlider/DSCF2783.jpg";
import slide_5 from "@/public/photoSlider/DSCF2915.jpg";

export default function PhotoSlider(): ReactElement {
  const images = [
    slide_3.src,
    slide_5.src,
    slide_2.src,
    slide_1.src,
    slide_4.src,
  ];

  const [position, setPosition] = useState(40);

  const nextPhoto = () => {
    setPosition((prevPosition) => {
      if (prevPosition === -40) {
        return 40;
      } else {
        return prevPosition - 20;
      }
    });
  };

  const prevPhoto = () => {
    setPosition((prevPosition) => {
      if (prevPosition === 40) {
        return -40;
      } else {
        return prevPosition + 20;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextPhoto();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hotel" className={styles.photoSlider}>
      <div className={styles.photoSlider__slider}>
        <button
          className={`${styles.photoSlider__slider_button} ${styles.photoSlider__slider_button_left}`}
          onClick={prevPhoto}
        >
          {"❰"}
        </button>
        <button
          className={`${styles.photoSlider__slider_button} ${styles.photoSlider__slider_button_right}`}
          onClick={nextPhoto}
        >
          {"❱"}
        </button>
        <div
          className={styles.photoSlider__slider_photos}
          style={{ transform: `translateX(${position}%)` }}
        >
          {images.map((image) => {
            return (
              <div key={image} className={styles.photoSlider__slider_photos__photo}>
                <Image
                  src={`${image}`}
                  alt={`фото-${image}`}
                  fill={true}
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
