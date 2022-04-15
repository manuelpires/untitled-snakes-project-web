import Link from "next/link";
import Section from "../Section";
import Web3Connect from "../../components/Web3Connect";
import MintPanel from "../../components/MintPanel";
import styles from "./MintSection.module.css";

const MintSection = () => (
  <Section id="mint" title="Mint">
    <p>
      You may mint up to 10 NFTs per transaction using any address, there&apos;s
      no allowlist.
    </p>
    <p>
      If you are registered on Proof Of Humanity, you can mint using the
      registered address to donate 100% of your Ether spent for burning UBI
      tokens. Read more at the{" "}
      <Link href="#about" passHref>
        <a className={styles.colored}>About</a>
      </Link>{" "}
      section.
    </p>
    <Web3Connect>
      <MintPanel />
    </Web3Connect>
  </Section>
);

export default MintSection;
