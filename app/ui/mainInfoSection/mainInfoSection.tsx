import { ReactElement } from "react";
import styles from "./mainInfoSection.module.sass";
import Image from "next/image";

import logo from "@/public/header/O-HOTEL_LOGO.svg";
import BookingButton from "../bookingButton/bookingButton";

export default function MainInfoSection(): ReactElement {
  return (
    <section className={styles.mainInfoSection}>
      <div className={styles.mainInfoSection__section}>
        <div className={styles.mainInfoSection__section_logo}>
          <Image
            className={styles.mainInfoSection__section_logo__image}
            src={logo}
            alt={"Логотип"}
            fill
            sizes="(max-width: 100%)"
          />
        </div>
        <div className={styles.mainInfoSection__section_description}>
          <p className={styles.mainInfoSection__section_description__text}>
            Резиденция Каскад 3* by OhotelGroupe – отель с открытым бассейном,
            сауной и лануж-зоной на крыше.
          </p>
          <p className={styles.mainInfoSection__section_description__text}>
            Настоящая роскошь и полный релакс на морском отдыхе при высоком
            уровне сервиса!
          </p>
        </div>
        <BookingButton />
      </div>
    </section>
  );
}
