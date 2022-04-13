import { ReactNode } from "react";
import Title from "../../components/Title";
import styles from "./Section.module.css";

type Props = {
  id: string;
  title: string;
  className?: string;
  isMainSection?: boolean;
  children?: ReactNode;
};

const Section = ({
  id,
  title,
  className = "",
  isMainSection = false,
  children,
}: Props) => (
  <section id={id} className={`${styles.section} ${className}`}>
    <header>
      <Title isMainTitle={isMainSection} text={title} />
    </header>
    {children}
  </section>
);

export default Section;
