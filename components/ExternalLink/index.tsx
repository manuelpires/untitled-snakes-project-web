import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  url?: string;
};

const ExternalLink = ({ children, url }: Props) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "inline-flex" }}
  >
    {children}
  </a>
);

export default ExternalLink;
