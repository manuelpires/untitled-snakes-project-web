import Section from "../Section";
import HeroImages from "../../components/HeroImages";
import styles from "./HeroSection.module.css";

const HeroSection = () => (
  <Section
    id="hero"
    title="Untitled Snakes Project"
    className={styles.hero}
    isMainSection
  >
    <HeroImages />
  </Section>
);

export default HeroSection;
