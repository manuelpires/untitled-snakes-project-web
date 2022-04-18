import Image from "next/image";
import { externalLinks } from "config";
import { ExternalLink } from "components";
import styles from "./ExternalLinksGroup.module.css";

const ExternalLinksGroup = () => (
  <div className={styles.container}>
    {externalLinks.map(({ url, image, alt }) => (
      <ExternalLink key={alt} url={url}>
        <Image src={image} alt={alt} layout="fixed" />
      </ExternalLink>
    ))}
  </div>
);

export default ExternalLinksGroup;
