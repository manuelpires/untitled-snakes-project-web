import Image from "next/image";
import Link from "next/link";
import mintImage from "public/images/mint.gif";
import { Section } from "fragments";
import { MintPanel, Web3Connect } from "components";

const MintSection = () => (
  <Section id="mint" title="Mint">
    <div
      className={`
      flex flex-col items-center gap-8
      lg:flex-row lg:gap-16
    `}
    >
      <div className="w-full max-w-[350px]">
        <Image
          className="rounded-3xl"
          src={mintImage}
          alt="Mint"
          width={350}
          height={350}
          layout="responsive"
        />
      </div>
      <div>
        <p>
          You may mint up to 10 NFTs per transaction using any address,
          there&apos;s no allowlist.
        </p>
        <p>
          If you are registered on Proof Of Humanity, you can mint using your
          registered address to donate 100% of your Ether spent for burning UBI
          tokens. Please read more at the{" "}
          <Link href="#about" passHref>
            <a className="text-green-500">About</a>
          </Link>{" "}
          section.
        </p>
        <div className="flex justify-center pt-6">
          <Web3Connect>
            <MintPanel />
          </Web3Connect>
        </div>
      </div>
    </div>
  </Section>
);

export default MintSection;
