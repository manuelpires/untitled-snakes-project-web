import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  url?: string;
};

const ExternalLink = ({ children, url }: Props) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default ExternalLink;
