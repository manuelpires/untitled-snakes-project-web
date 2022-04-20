import { ReactNode } from "react";
import styles from "./Card.module.css";

interface Props {
  children?: ReactNode;
};

const Card = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
);

export default Card;
