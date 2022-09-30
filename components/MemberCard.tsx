import Image, { StaticImageData } from "next/image";
import TwitterLogo from "public/icons/twitter-logo.svg";
import { Card, ExternalLink } from "components";

interface Props {
  name: string;
  bio: string;
  twitterLink: string;
  image: StaticImageData;
}

const MemberCard = ({ name, bio, twitterLink, image }: Props) => (
  <Card>
    <div
      className={`
        flex flex-col w-full gap-4
        sm:gap-5
      `}
    >
      <Image src={image} alt={name} layout="responsive" />
      <div className="flex items-center gap-3">
        <ExternalLink url={twitterLink}>
          <Image src={TwitterLogo} alt={`${name} Twitter`} layout="fixed" />
        </ExternalLink>
        <ExternalLink url={twitterLink}>
          <h3
            className={`
              m-0 text-xl duration-200 text-green-500
              hover:text-sky-500
              sm:text-2xl
            `}
          >
            {name}
          </h3>
        </ExternalLink>
      </div>
      <p
        className={`
          m-0 text-base whitespace-pre-wrap
          sm:text-xl
        `}
      >
        {bio}
      </p>
    </div>
  </Card>
);

export default MemberCard;
