import Image from "next/image";
import { ExternalLink } from "components";
import { externalLinks } from "utils/links";

const ExternalLinksGroup = () => (
  <div className="flex items-center gap-4">
    {externalLinks.map(({ url, image, alt }) => (
      <ExternalLink key={alt} url={url}>
        <Image src={image} alt={alt} layout="fixed" />
      </ExternalLink>
    ))}
  </div>
);

export default ExternalLinksGroup;
