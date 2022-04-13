import Section from "../Section";
import Web3Connect from "../../components/Web3Connect";
import MintPanel from "../../components/MintPanel";
import styles from "./MintSection.module.css";

const MintSection = () => (
  <Section id="mint" title="Mint" className={styles.mint}>
    <Web3Connect>
      <MintPanel />
    </Web3Connect>
  </Section>
);

export default MintSection;
