import Title from "../../components/Title";
import Web3Connect from "../../components/Web3Connect";
import MintPanel from "../../components/MintPanel";
import styles from "./MintSection.module.css";

const MintSection = () => (
  <section id="mint" className={styles.container}>
    <header>
      <Title text="Mint" />
    </header>
    <Web3Connect>
      <MintPanel />
    </Web3Connect>
  </section>
);

export default MintSection;
