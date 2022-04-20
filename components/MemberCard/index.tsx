import Image, { StaticImageData } from "next/image";
import TwitterLogo from "public/icons/twitter-logo.svg";
import { Card, ExternalLink } from "components";
import styles from "./MemberCard.module.css";

interface Props {
  name: string;
  bio: string;
  twitterLink: string;
  image: StaticImageData;
};

const MemberCard = ({ name, bio, twitterLink, image }: Props) => (
  <Card>
    <div className={styles.content}>
      <Image src={image} alt={name} layout="responsive" />
      <div className={styles.header}>
        <ExternalLink url={twitterLink}>
          <Image src={TwitterLogo} alt={`${name} Twitter`} layout="fixed" />
        </ExternalLink>
        <ExternalLink url={twitterLink}>
          <h3 className={styles.name}>{name}</h3>
        </ExternalLink>
      </div>
      <p className={styles.bio}>{bio}</p>
    </div>
  </Card>
);

export default MemberCard;
