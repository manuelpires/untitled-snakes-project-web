import { useMemo } from "react";
import Image from "next/image";
import Link from "../Link";
import { formatEtherscanLink, EtherscanLinkType } from "../../utils";
import OpenSeaLogo from "../../public/icons/opensea-logo.svg";
import EtherscanLogo from "../../public/icons/etherscan-logo.svg";
import TwitterLogo from "../../public/icons/twitter-logo.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  const etherscanLink = useMemo(
    () =>
      formatEtherscanLink(EtherscanLinkType.Contract, [
        Number(process.env.NEXT_PUBLIC_CHAIN_ID),
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
      ]),
    []
  );

  return (
    <footer className={styles.footer}>
      <Link url="https://twitter.com/snakesproject">
        <Image src={TwitterLogo} alt="Twitter" width={32} height={32} />
      </Link>
      <Link url="https://opensea.io/collection/snakesproject">
        <Image src={OpenSeaLogo} alt="OpenSea" width={32} height={32} />
      </Link>
      <Link url={etherscanLink}>
        <Image src={EtherscanLogo} alt="Etherscan" width={32} height={32} />
      </Link>
    </footer>
  );
};

export default Footer;
