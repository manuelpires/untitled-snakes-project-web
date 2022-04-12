import { navBarLinks } from "../../config";
import Link from "next/link";
import styles from "./NavBarLinksGroup.module.css";

const NavBarLinksGroup = () => (
  <div className={styles.container}>
    {navBarLinks.map(({ href, label }) => (
      <Link key={label} href={href}>
        <a>{label}</a>
      </Link>
    ))}
  </div>
);

export default NavBarLinksGroup;
