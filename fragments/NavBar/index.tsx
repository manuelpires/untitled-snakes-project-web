import NavBarLinksGroup from "../../components/NavBarLinksGroup";
import ExternalLinksGroup from "../../components/ExternalLinksGroup";
import Web3Connect from "../../components/Web3Connect";
import AccountLink from "../../components/AccountLink";
import styles from "./NavBar.module.css";

const NavBar = () => (
  <header className={styles.header}>
    <div className={styles.leftSide}>
      <NavBarLinksGroup />
    </div>
    <div className={styles.rightSide}>
      <ExternalLinksGroup />
      <Web3Connect isSmall>
        <AccountLink />
      </Web3Connect>
    </div>
  </header>
);

export default NavBar;
