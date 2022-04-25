import {
  AboutSection,
  HeroSection,
  Layout,
  MintSection,
  NavBar,
  SpeciesSection,
  TeamSection,
} from "fragments";
import { Separator } from "components";
import styles from "styles/Home.module.css";

const Home = () => (
  <Layout
    title="Untitled Snakes Project | 6,666 Snakes NFTs"
    description="NFT collection of 6,666 Snakes slithering on the Ethereum blockchain 🐍"
  >
    <NavBar />
    <main className={styles.main}>
      <HeroSection />
      <Separator />
      <MintSection />
      <Separator />
      <SpeciesSection />
      <Separator />
      <AboutSection />
      <Separator />
      <TeamSection />
    </main>
  </Layout>
);

export default Home;
