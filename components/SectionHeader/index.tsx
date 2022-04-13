import styles from "./SectionHeader.module.css";

type Props = {
  title: string;
};

const SectionHeader = ({ title }: Props) => (
  <header>
    <h2 className={styles.title}>{title}</h2>
  </header>
);

export default SectionHeader;
