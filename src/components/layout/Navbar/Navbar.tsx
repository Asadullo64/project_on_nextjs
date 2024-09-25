import Link from "next/link";

import { navBarItems } from "@/src/constants/constant";

import styles from "./Navbar.module.scss";

const NavbarItems = () =>
  navBarItems.map((item) => (
    <li key={item.title}>
      <Link href={item.link}>{item.title}</Link>
    </li>
  ));

export const Navbar: React.FC = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navbar_list}>
      <NavbarItems />
    </ul>
  </nav>
);
