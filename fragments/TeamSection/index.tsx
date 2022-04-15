import shakaImage from "../../public/images/snake-4.png";
import Section from "../Section";
import MemberCard from "../../components/MemberCard";
import styles from "./TeamSection.module.css";

const TeamSection = () => (
  <Section id="team" title="Team">
    <div className={styles.container}>
      <MemberCard
        name="Shaka"
        bio={"Code + Pixels.\nMaker of snakes.\nNot good at naming projects."}
        twitterLink="https://twitter.com/ShakaZaitsev"
        image={shakaImage}
      />
    </div>
  </Section>
);

export default TeamSection;
