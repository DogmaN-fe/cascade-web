"use client";

import { ReactElement, useState } from "react";
import BookingButton from "../bookingButton/bookingButton";
import styles from "./roomsSection.module.sass";

import comfortWithBalcony from "@/public/photosRooms/comfort-with-balcony.jpg";
import comfortWithView from "@/public/photosRooms/comfort-with-view.jpg";
import standard from "@/public/photosRooms/standard.jpg";
import familyRoom from "@/public/photosRooms/family-room.jpg";

import RoomCard from "./roomCard/roomCard";
import { IRoomCard } from "@/app/lib/types";

export default function RoomsSection(): ReactElement {
  const rooms: IRoomCard[] = [
    {
      roomName: "Комфорт с видом на море",
      roomPhoto: comfortWithBalcony.src,
      roomAdvantages: ["2 человека", "вид на море", "ванна", "кухонный уголок"],
    },
    {
      roomName: "Комфрт с балконом",
      roomPhoto: comfortWithView.src,
      roomAdvantages: [
        "2 человека",
        "вид на город",
        "ванна",
        "кухонный уголок",
      ],
    },
    {
      roomName: "Семейный номер",
      roomPhoto: familyRoom.src,
      roomAdvantages: ["4 человека", "терраса", "ванна/душ", "кухонный уголок"],
    },
    {
      roomName: "Стандарт",
      roomPhoto: standard.src,
      roomAdvantages: [
        "2 человека",
        "вид на море",
        "ванна/душ",
        "кухонный уголок",
      ],
    },
  ];

  return (
    <section id="rooms" className={styles.roomsSection}>
      <div className={styles.roomsSection__section}>
        <div className={styles.roomsSection__section_title}>
          <h2 className={styles.roomsSection__section_title__text}>
            Номера отеля
          </h2>
        </div>
        <div className={`${styles.roomsSection__section_rooms}`}>
          <RoomCard key={rooms[0].roomName} room={rooms[0]} />
          <RoomCard key={rooms[1].roomName} room={rooms[1]} />
          <RoomCard key={rooms[2].roomName} room={rooms[2]} />
          <RoomCard key={rooms[3].roomName} room={rooms[3]} />
        </div>
      </div>
    </section>
  );
}
