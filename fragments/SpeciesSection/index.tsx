import Image from "next/image";
import speciesImg from "public/images/species.gif";
import { Section } from "fragments";
import styles from "./SpeciesSection.module.css";

const SpeciesSection = () => (
  <Section id="species" title="Species">
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={speciesImg} width={350} alt="Species" />
      </div>
      <div className={styles.textContainer}>
        <p>
          Among the many special traits the snakes have, the most important (and
          fun!) one is their specie.
        </p>
        <p>
          There are seven different species of snakes: four commons, two rares
          and one ultra-rare. Here are their actual rarities:
        </p>
        <ul>
          <li>🌱 Earth (~25.6%)</li>
          <li>💨 Air (~23.5%)</li>
          <li>💧 Water (~20.9%)</li>
          <li>🔥 Fire (~18.7%)</li>
          <li>🧟 Undead (~8.4%)</li>
          <li>🦧 Ape (~2.2%)</li>
          <li>👽 Alien (~0.6%)</li>
        </ul>
      </div>
    </div>
  </Section>
);

export default SpeciesSection;
