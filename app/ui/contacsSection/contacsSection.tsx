import { ReactElement } from "react";
import styles from "./contacsSection.module.sass";
import Link from "next/link";
import Image from "next/image";

import address from "@/public/map_locator_vjwun2hnpw3r.svg";
import phone from "@/public/telephone_4f8o74njmimn.svg";
import mail from "@/public/mail_qbewr5yvdo6s.svg";

export default function ContacsSection(): ReactElement {
  return (
    <section id="contacs" className={styles.contacsSection}>
      <div className={styles.contacsSection__section}>
        <h3 className={styles.contacsSection__section_title}>Наш адрес:</h3>
        <span className={styles.contacsSection__section_title__position}>
          <Image src={address} alt="иконка локатора" width={16} height={16} />
          <p className={styles.contacsSection__section_title_address}>
            г. Сочи, Бамбуковая ул. 14 А
          </p>
        </span>
        <span className={styles.contacsSection__section_title__position}>
          <Image src={mail} alt="иконка локатора" width={16} height={16} />
          <Link
            className={styles.contacsSection__section_title_mail}
            href="mailto:mail@cascaderesidence.ru"
          >
            mail@cascaderesidence.ru
          </Link>
        </span>
        <span className={styles.contacsSection__section_title__position}>
          <Image src={phone} alt="иконка локатора" width={16} height={16} />
          <Link
            className={styles.contacsSection__section_title_phone}
            href={"tel:89881533303"}
          >
            8 (988) 153-33-03
          </Link>
        </span>
      </div>
      <div className={styles.contacsSection__section_map}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <a
            href="https://yandex.ru/maps/org/rezidentsiya_kaskad/39346733482/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0",
            }}
          >
            Резиденция Каскад
          </a>
          <a
            href="https://yandex.ru/maps/239/sochi/category/hotel/184106414/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Гостиница в Сочи
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=39.713835%2C43.612748&mode=poi&poi%5Bpoint%5D=39.713130%2C43.612140&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D39346733482&z=18.2"
            width="560"
            height="400"
            style={{ position: "relative", width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
