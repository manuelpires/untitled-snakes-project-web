import HeroImages from "../../components/HeroImages";
import styles from "./HeroSection.module.css";

const HeroSection = () => (
  <section className={styles.hero}>
    <header className={styles.header}>
      <h1 className={styles.title}>Untitled Snakes Project</h1>
    </header>
    <HeroImages />
  </section>
);

export default HeroSection;
