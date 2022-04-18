import { ReactNode } from "react";
import { SectionHeader } from "components";
import styles from "./Section.module.css";

type Props = {
  id: string;
  title: string;
  children?: ReactNode;
};

const Section = ({ id, title, children }: Props) => (
  <section id={id} className={styles.container}>
    <SectionHeader title={title} />
    {children}
  </section>
);

export default Section;
