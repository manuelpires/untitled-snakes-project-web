import Title from "../../components/Title";
import HeroImages from "../../components/HeroImages";
import styles from "./HeroSection.module.css";

const HeroSection = () => (
  <section className={styles.container}>
    <header className={styles.header}>
      <Title isMainTitle text="Untitled Snakes Project" />
    </header>
    <HeroImages />
  </section>
);

export default HeroSection;
