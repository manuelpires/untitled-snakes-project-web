import { Section } from "fragments";
import { ExternalLink } from "components";

const FaqSection = () => (
  <Section id="faq" title="FAQ">
    <ul className="pl-6" role="list">
      <li>
        <b>
          What&apos;s the licensing of the NFTs from Untitled Snakes Project?
        </b>
        <p>CC0 - Public domain. 🕊</p>
      </li>
      <li>
        <b>Is there a roadmap?</b>
        <p>
          There&apos;s no roadmap planned. I just wanted to build a fun web3
          project all by myself to kickstart my career in this awesome and
          vibrant space. Nevertheless, without making any promises, I&apos;d
          love to do an airdrop for holders in the future.
        </p>
      </li>
      <li>
        <b>Can I mint if I&apos;m not registered on Proof Of Humanity?</b>
        <p>
          Yes, you can. There&apos;s no allowlist so you can mint from any
          address. Bear in mind that the Ether will be donated for burning UBI
          tokens <b>only</b> if you mint from a registered Proof Of Humanity
          address, so I encourage you to do it that way! But if you just like
          the snakes and want to support me, you can mint from whatever address
          you want. 🤝
        </p>
      </li>
      <li>
        <b>
          Are there any benefits from minting using a registered Proof Of
          Humanity address?
        </b>
        <p>
          Yes! Not only you&apos;ll be helping to burn UBI with your minting,
          but also your NFTs will get a special trait in their metadata. 👀
        </p>
      </li>
      <li>
        <b>Where are the NFTs metadata and images located?</b>
        <p>
          All images and metadata files are stored on IPFS. Right now these
          files are served through our own middleware API to prevent the leaking
          of the whole collection before all NFTs are minted. After the minting
          is finished, the middleware will be removed and the data will be
          served directly from IPFS.
        </p>
      </li>
      <li>
        <b>
          How can I verify that the NFTs and their order in the collection
          won&apos;t be manipulated at any time?
        </b>
        <p>
          There&apos;s a SHA-256 hash available for the image of each one of the
          snakes NFTs. For instance, if you want to get the hash for the NFT
          #666, you can find it here:
        </p>
        <ExternalLink url="https://snakesproject.infura-ipfs.io/ipfs/QmWEwMFUHoEtyyCMnrDvUraSAT5QFsKRdgBBu4LG1SQLY7/666">
          <span className="text-green-500">
            https://snakesproject.infura-ipfs.io/ipfs/QmWEwMFUHoEtyyCMnrDvUraSAT5QFsKRdgBBu4LG1SQLY7/666
          </span>
        </ExternalLink>
        <p>
          If you want to get the hash of a different snake, you just have to
          replace the number after the last slash bar with the ID of the target
          NFT. This way, there&apos;s full guarantee that the NFTs images and
          their order in the collection were fully set pre-mint.
        </p>
        <p>
          Here&apos;s also the provenance hash of the collection which is stored
          in the smart contract:{" "}
          <span className="italic break-words">
            1c50eb3010dc8e6047f1c0e448040c38aa510ce847bdb66ae2c9d87521ae6db6
          </span>
        </p>
      </li>
    </ul>
  </Section>
);

export default FaqSection;
