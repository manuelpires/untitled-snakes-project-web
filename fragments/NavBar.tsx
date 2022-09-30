import {
  AccountLink,
  ExternalLinksGroup,
  NavBarLinksGroup,
  Web3Connect,
} from "components";

const NavBar = () => (
  <header
    className={`
      hidden justify-between items-center mx-auto mt-14 w-full max-w-[1120px] min-h-[45px] px-12
      md:flex
      xl:p-0
    `}
  >
    <div className="flex">
      <NavBarLinksGroup />
    </div>
    <div className="flex justify-end items-center gap-4 pl-12">
      <div
        className={`
          hidden
          lg:block
        `}
      >
        <ExternalLinksGroup />
      </div>
      <Web3Connect isSmall>
        <AccountLink />
      </Web3Connect>
    </div>
  </header>
);

export default NavBar;
