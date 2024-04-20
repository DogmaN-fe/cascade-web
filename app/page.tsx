import styles from "./page.module.css";
import MainInfoSection from "./ui/mainInfoSection/mainInfoSection";
import AdvantagesSection from "./ui/advantagesSection/advantagesSection";
import RoomsSection from "./ui/roomsSection/roomsSection";
import PhotoSlider from "./ui/photoSlider/photoSlider";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainInfoSection />
      <PhotoSlider />
      <RoomsSection />
      <AdvantagesSection />
    </main>
  );
}
