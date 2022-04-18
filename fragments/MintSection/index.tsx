import Image from "next/image";
import Link from "next/link";
import mintImage from "../../public/images/snake-1.png";
import Section from "../Section";
import { MintPanel, Web3Connect } from "../../components";
import styles from "./MintSection.module.css";

const MintSection = () => (
  <Section id="mint" title="Mint">
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={mintImage} alt="Mint" layout="responsive" />
      </div>
      <div>
        <p>
          You may mint up to 10 NFTs per transaction using any address,
          there&apos;s no allowlist.
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
        <div className={styles.mintContainer}>
          <Web3Connect>
            <MintPanel />
          </Web3Connect>
        </div>
      </div>
    </div>
  </Section>
);

export default MintSection;
