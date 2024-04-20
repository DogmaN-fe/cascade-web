import { ReactElement } from "react";
import Image from "next/image";
import styles from "./roomCard.module.sass";
import { IRoomCard } from "@/app/lib/types";

import people from "@/public/advantagesRoom/people_h5v3x5q47so9.svg";
import shower from "@/public/advantagesRoom/shower_ys9plxceqjaf.svg";
import view from "@/public/advantagesRoom/window_0i3obbnxvs14.svg";
import kitchen from "@/public/advantagesRoom/kitchen_0bpkalgn19iw.svg";
import BookingButton from "../../bookingButton/bookingButton";

export default function RoomCard({ room }: { room: IRoomCard }): ReactElement {
  return (
    <article className={styles.RoomCard__card}>
      <div className={styles.RoomCard__card__title}>
        <p className={styles.RoomCard__card__title_text}>{room.roomName}</p>
      </div>
      <div className={styles.RoomCard__card__photo}>
        <Image
          src={room.roomPhoto}
          alt={"Фото номера"}
          fill
          priority
        />
      </div>
      <div className={styles.RoomCard__card__advantages}>
        <ul className={styles.RoomCard__card__advantages_list}>
          <li className={styles.RoomCard__card__advantages_list__element}>
            <Image
              className={styles.RoomCard__card__advantages_list__element_image}
              src={people}
              alt={"иконка: количество людей"}
              width={20}
              height={20}
            />
            {room.roomAdvantages[0]}
          </li>
          <li className={styles.RoomCard__card__advantages_list__element}>
            <Image
              className={styles.RoomCard__card__advantages_list__element_image}
              src={view}
              alt={"иконка: вид из окна"}
              width={20}
              height={20}
            />
            {room.roomAdvantages[1]}
          </li>
          <li className={styles.RoomCard__card__advantages_list__element}>
            <Image
              className={styles.RoomCard__card__advantages_list__element_image}
              src={shower}
              alt={"иконка: ванная"}
              width={20}
              height={20}
            />
            {room.roomAdvantages[2]}
          </li>
          <li className={styles.RoomCard__card__advantages_list__element}>
            <Image
              className={styles.RoomCard__card__advantages_list__element_image}
              src={kitchen}
              alt={"иконка: кухня"}
              width={20}
              height={20}
            />
            {room.roomAdvantages[3]}
          </li>
        </ul>
      </div>
      <BookingButton />
    </article>
  );
}
