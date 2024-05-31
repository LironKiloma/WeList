import Link from "next/link";
import styles from './NavbarComponent.module.css';
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function NavbarComponent({ dictionary, lang }) {
  return (
    <nav className={`${styles.navbarContainer}`}>
     <div className={styles.leftPartLinks}>
      <Link className={styles.linkItem} href="/">{dictionary.NavbarComponent.home}</Link>
      <Link className={styles.linkItem} href="/he">עברית</Link>
      <Link className={styles.linkItem} href="/en">English</Link>
     </div>
      <div className={styles.rightPartLinks}>
        <Link className={styles.linkItem} href="/mylists">{dictionary.NavbarComponent.myLists}</Link>
        <Link className={styles.linkItem} href="/api/auth/signin">{dictionary.NavbarComponent.signIn  }</Link>
      </div>
    </nav>
    );
}