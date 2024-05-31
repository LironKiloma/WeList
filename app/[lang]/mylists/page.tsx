import { useState } from "react";
import { getDictionary } from "../dictionaries";
import List from "./list";
import data from './mockapData.json';

export default async function Page({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  const listsData = data?.lists;

  const [shownListId, setShownListId] = useState();

  const handleOnListClicked = (listId) => {
    setShownListId(listId)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>{dictionary.myListsPage.title}</h1>
        <div>
          {
            listsData.map(list => {
              return <button key={list?.id} onClick={() => handleOnListClicked(list?.id)} />
            }
          }
        </div>
        <div>
          {
            listsData.map(list => {
              if (shownListId === list?.id) {
                return <List listId={list?.id} lang={lang} />
              }
            })
          }
        </div>
      </div>
    </main>
  );
}