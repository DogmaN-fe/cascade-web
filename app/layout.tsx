import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.sass";
import HeaderLogo from "./ui/headerlogo/headerLogo";
import HeaderNavigation from "./ui/headerNavigation/headerNavigation";
import { roboto } from "./lib/fonts";
import ContacsSection from "./ui/contacsSection/contacsSection";

export const metadata: Metadata = {
  title: "Резиденция Каскад 3* by OhotelGroupe",
  description:
    "Настоящая роскошь и полный релакс на морском отдыхе при высоком уровне сервиса!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${roboto.className}`}>
        <header className={styles.header}>
          <HeaderLogo />
          <HeaderNavigation />
        </header>
        {children}
        <footer className={styles.footer}>
          <ContacsSection />
          <div className={styles.footer_copyright_and_yaer}>
            <p className={styles.footer_copyright}>
              ©Резиденция Каскад 3* by OhotelGroupe
            </p>
            <p className={styles.footer_year}>2024, Официальный сайт</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
