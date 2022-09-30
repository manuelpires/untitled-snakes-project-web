import { ReactNode } from "react";
import { SectionHeader } from "components";

interface Props {
  id: string;
  title?: string;
  className?: string;
  children?: ReactNode;
}

const Section = ({ id, title, className, children }: Props) => (
  <section id={id} className={className ? className : "py-16"}>
    {title && <SectionHeader title={title} />}
    {children}
  </section>
);

export default Section;
