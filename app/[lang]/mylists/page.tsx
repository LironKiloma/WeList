import { getDictionary } from "../dictionaries";

export default async function Page({ params : { lang }}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>{dictionary.myListsPage.title}</h1>
      </div>
    </main>
  );
}