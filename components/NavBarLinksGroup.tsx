import Link from "next/link";
import { navBarLinks } from "utils/links";

const NavBarLinksGroup = () => (
  <div className="flex items-center	gap-7">
    {navBarLinks.map(({ href, label }) => (
      <Link key={label} href={href}>
        <a
          className={`
            text-xl font-semibold duration-200 
          first:text-green-500
          hover:text-sky-500
        `}
        >
          {label}
        </a>
      </Link>
    ))}
  </div>
);

export default NavBarLinksGroup;
