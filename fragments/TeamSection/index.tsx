import shakaImage from "public/images/snake-4.png";
import { Section } from "fragments";
import { MemberCard } from "components";
import styles from "./TeamSection.module.css";

const TeamSection = () => (
  <Section id="team" title="Team">
    <div className={styles.container}>
      <MemberCard
        name="0xShaka"
        bio={"Code + Pixels.\nMaker of snakes.\nNot good at naming projects."}
        twitterLink="https://twitter.com/0xShaka"
        image={shakaImage}
      />
    </div>
  </Section>
);

export default TeamSection;
