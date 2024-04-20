import { ReactElement } from "react";
import styles from "./advantagesSection.module.sass";
import Image from "next/image";

import beach from "@/public/advantagesIcons/beach_1jtf8svrdgz7.svg";
import sauna from "@/public/advantagesIcons/sauna_zrot6p3wk2pr.svg";
import launge from "@/public/advantagesIcons/lounge_chair_ogwp2opd5ra8.svg";
import room from "@/public/advantagesIcons/room_gfu04haaqvhh.svg";
import swimming_pool from "@/public/advantagesIcons/swimming_pool_rpqe2m6cwx0t.svg";
import safari from "@/public/advantagesIcons/safari_iurmk0l1gfz6.svg";
import pet from "@/public/advantagesIcons/pet_d3vvkgj6ryfx.svg";
import playground from "@/public/advantagesIcons/playground_ct055ptu4jek.svg";

export default function AdvantagesSection(): ReactElement {
  return (
    <section id="advantages" className={styles.advantagesSection}>
      <article className={styles.advantagesSection__section}>
        <p className={styles.advantagesSection__section_title}>Преимущества</p>
        <ul className={styles.advantagesSection__section_list}>
          <li className={styles.advantagesSection__section_list__element}>
            <Image
              className={styles.advantagesSection__section_list__element_image}
              src={beach}
              alt={"иконка: пляж"}
              width={50}
              height={50}
            />
            900 метров до моря
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image
              className={styles.advantagesSection__section_list__element_image}
              src={sauna}
              alt={"иконка: центр города"}
              width={50}
              height={50}
            />
            Cауна
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image
              className={styles.advantagesSection__section_list__element_image}
              src={launge}
              alt={"иконка: аппартаменты с балконом"}
              width={50}
              height={50}
            />
            Лаунж на крыше под открытым небом
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image
              className={styles.advantagesSection__section_list__element_image}
              src={room}
              alt={"иконка: кухня"}
              width={50}
              height={50}
            />
            Номера с ванными или душевыми
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image
              className={styles.advantagesSection__section_list__element_image}
              src={swimming_pool}
              alt={"иконка: бассейн"}
              width={50}
              height={50}
            />
            Подогреваемый бассейн
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image
              className={styles.advantagesSection__section_list__element_image}
              src={safari}
              alt={"иконка: туры"}
              width={50}
              height={50}
            />
            Авторские экскурсии
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image
              className={styles.advantagesSection__section_list__element_image}
              src={pet}
              alt={"иконка: pet-friendly"}
              width={50}
              height={50}
            />
            Pet-friendly
          </li>
          <li className={styles.advantagesSection__section_list__element}>
            <Image
              className={styles.advantagesSection__section_list__element_image}
              src={playground}
              alt={"иконка: детская площадка"}
              width={50}
              height={50}
            />
            Детская площадка
          </li>
        </ul>
      </article>
    </section>
  );
}
