import 'server-only'

const dictionaries: { [key: string]: () => Promise<any> } = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  he: () => import('./dictionaries/he.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]()
