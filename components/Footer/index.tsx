import styles from "./Footer.module.css";
import ExternalLinksGroup from "../ExternalLinksGroup";

const Footer = () => (
  <footer className={styles.footer}>
    <ExternalLinksGroup />
  </footer>
);

export default Footer;
