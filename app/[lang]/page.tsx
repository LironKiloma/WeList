import Image from "next/image";
import styles from './page.module.css';
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang }}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className={styles.title}>{dictionary.homePage.title}t</h1>
      </div>
    </main>
  );
}
