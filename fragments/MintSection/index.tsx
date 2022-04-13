import Section from "../Section";
import Web3Connect from "../../components/Web3Connect";
import MintPanel from "../../components/MintPanel";

const MintSection = () => (
  <Section id="mint" title="Mint">
    <Web3Connect>
      <MintPanel />
    </Web3Connect>
  </Section>
);

export default MintSection;
