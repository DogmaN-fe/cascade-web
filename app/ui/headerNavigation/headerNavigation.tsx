"use client";

import Link from "next/link";
import styles from "./headerNavigation.module.sass";
import { useState } from "react";

export default function HeaderNavigation() {
  const [isHidden, setIsHidden] = useState(true);

  const openMenu = () => {
    setIsHidden(!isHidden);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(2);

    console.log(window.location.href);

    if (window.location.href.includes("/reservations")) {
      window.location.href = `/#${targetId}`;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    setIsHidden(true);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__links}>
        <li className={styles.navigation__links_link}>
          <Link
            href="/#hotel"
            className={styles.navigation__links_link_href}
            onClick={handleClick}
          >
            Фото отеля
          </Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link
            href="/#rooms"
            className={styles.navigation__links_link_href}
            onClick={handleClick}
          >
            Номера
          </Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link
            href="/#advantages"
            className={styles.navigation__links_link_href}
            onClick={handleClick}
          >
            Преимущества
          </Link>
        </li>
        <li className={styles.navigation__links_link}>
          <Link
            href="/#contacs"
            className={styles.navigation__links_link_href}
            onClick={handleClick}
          >
            Контакты
          </Link>
        </li>
      </ul>
      <span className={styles.navigation_mobile} style={{ display: "none" }}>
        <button className={styles.navigation_mobile__button} onClick={openMenu}>
          ☰
        </button>
        <ul
          className={styles.navigation_mobile__links}
          style={{ display: isHidden ? "none" : "block" }}
        >
          <li className={styles.navigation__links_link}>
            <Link
              href="/#rooms"
              className={styles.navigation__links_link_href}
              onClick={handleClick}
            >
              Номера
            </Link>
          </li>
          <li className={styles.navigation__links_link}>
            <Link
              href="/#advantages"
              className={styles.navigation__links_link_href}
              onClick={handleClick}
            >
              Преимущества
            </Link>
          </li>
          <li className={styles.navigation__links_link}>
            <Link
              href="/#contacs"
              className={styles.navigation__links_link_href}
              onClick={handleClick}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </span>
    </nav>
  );
}
