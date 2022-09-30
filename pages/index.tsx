import {
  AboutSection,
  HeroSection,
  Layout,
  MintSection,
  NavBar,
  SpeciesSection,
  TeamSection,
  FaqSection,
} from "fragments";
import { Separator } from "components";

const Home = () => (
  <Layout
    title="Untitled Snakes Project | 6,666 Snakes NFTs"
    description="NFT collection of 6,666 Snakes slithering on the Ethereum blockchain 🐍"
  >
    <NavBar />
    <main className="flex flex-col justify-center mx-auto w-full max-w-[1120px] px-8 md:px-12 xl:px-0">
      <HeroSection />
      <Separator />
      <MintSection />
      <Separator />
      <SpeciesSection />
      <Separator />
      <AboutSection />
      <Separator />
      <TeamSection />
      <Separator />
      <FaqSection />
    </main>
  </Layout>
);

export default Home;
