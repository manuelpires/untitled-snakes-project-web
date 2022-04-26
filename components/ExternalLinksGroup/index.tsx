import Image from "next/image";
import { ExternalLink } from "components";
import { externalLinks } from "links";
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
