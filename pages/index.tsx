import {
  AboutSection,
  HeroSection,
  Layout,
  MintSection,
  NavBar,
  SpeciesSection,
  TeamSection,
} from "../fragments";
import { Separator } from "../components";
import styles from "../styles/Home.module.css";

const Home = () => (
  <Layout
    title="Untitled Snakes Project"
    description="NFT collection of 6666 Snakes slithering on the Ethereum Blockchain 🐍"
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
