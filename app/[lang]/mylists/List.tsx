import { getDictionary } from "../dictionaries";
import data from './mockapData.json';

export default async function List({ lang, listId }) {
    const dictionary = await getDictionary(lang);
    const listsData = data?.lists;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1>{dictionary.myListsPage.title}</h1>
                {
                    listsData.map(list => {
                        if (list?.id === listId) {
                            return <div key={list?.id}>
                                <h2>{list?.name}</h2>
                                <h3>{dictionary.myListsPage.sharedWith}</h3>
                                {
                                    list?.sharedWith.map(user => {
                                        if (user.name) {
                                            return <h2 key={user?.email}>{user.name}</h2>
                                        }
                                    })
                                }
                                <div>
                                    {
                                        list?.categories.map(category => {
                                            return <div key={category?.id}>
                                                {category?.name} && <h3> {category.name} </h3>
                                                <div> {
                                                    list?.items.map(item => {
                                                        if (item?.categoryId === category?.id) {
                                                            if (item?.description) {
                                                                return <h4 key={item.id}>{item.description}</h4>
                                                            }
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        </main>
    );
}