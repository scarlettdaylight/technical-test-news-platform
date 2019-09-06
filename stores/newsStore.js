import { createContext } from 'react';

export function createNewsStore() {
  return {
    newsList: [],
    addNews(newItems) {
      this.newsList = [...this.newsList, ...newItems]
    },
    get engadgetNews() {
      return this.newsList.filter((news) => news.company === 'engadget');
    },
  };
}

const newsStore = createContext(null);

export const a = 'aa';
