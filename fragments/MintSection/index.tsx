import Web3Connect from "../../components/Web3Connect";
import MintPanel from "../../components/MintPanel";
import styles from "./MintSection.module.css";

const MintSection = () => (
  <section id="mint" className={styles.container}>
    <Web3Connect>
      <MintPanel />
    </Web3Connect>
  </section>
);

export default MintSection;
