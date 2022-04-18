import {
  AccountLink,
  ExternalLinksGroup,
  NavBarLinksGroup,
  Web3Connect,
} from "../../components";
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
