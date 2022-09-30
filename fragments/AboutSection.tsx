import { Section } from "fragments";
import { ExternalLink } from "components";

const AboutSection = () => (
  <Section id="about" title="About">
    <p>
      Untitled Snakes Project is an NFT collection of 6,666 randomly generated
      snakes slithering on the Ethereum blockchain. The project was created out
      of pure fun and to mock my own fear of snakes. 💀
    </p>
    <p>
      The team fully supports{" "}
      <ExternalLink url="https://www.proofofhumanity.id/">
        <span className="text-green-500">Proof Of Humanity</span>
      </ExternalLink>
      &apos;s cause and their ERC-20 token{" "}
      <ExternalLink url="https://blog.kleros.io/introducing-ubi-universal-basic-income-for-humans/">
        <span className="text-green-500">UBI</span>
      </ExternalLink>
      , which is being dripped to every verified human on Earth as an universal
      basic income. Please check out their project if you haven&apos;t already!
    </p>
    <p>
      To help with the burning of UBI tokens, 100% of the minting profits gotten
      from addresses registered on Proof Of Humanity are transfered to the{" "}
      <ExternalLink url="https://ubiburner.com/">
        <span className="text-green-500">UBI Burner</span>
      </ExternalLink>{" "}
      pool in a trustless way, using a mechanism coded at smart contract level.
      The UBI Burner will then use this Ether from its pool to buy and burn UBI,
      helping all of humanity in the process.
    </p>
    <p>
      The main goal of Untitled Snakes Project is to add one more incentive for
      the community to burn UBI tokens, and to spread the word about Proof Of
      Humanity. 🙌
    </p>
  </Section>
);

export default AboutSection;
