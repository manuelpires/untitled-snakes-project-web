import Layout from "../fragments/Layout";
import NavBar from "../fragments/NavBar";
import HeroSection from "../fragments/HeroSection";
import MintSection from "../fragments/MintSection";
import SpeciesSection from "../fragments/SpeciesSection";
import AboutSection from "../fragments/AboutSection";
import TeamSection from "../fragments/TeamSection";
import Separator from "../components/Separator";
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
