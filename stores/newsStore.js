import React, { createContext, useContext, useEffect } from 'react';
import { useStaticRendering, useLocalStore } from 'mobx-react-lite';
import { getNewsAtPage } from '../utilis/newsSource';
import {
  DEFAULT_ITEM_PER_PAGE,
  INITIAL_NUMBER_OF_DATA,
} from '../utilis/constants';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

const NewsStoreContext = createContext();

export function createNewsStore() {
  return {
    nextPage: 0,
    newsList: [],
    search: '',
    isFetching: false,
    changeSearch(word) {
      if (typeof word !== 'string' || this.search === word) {
        return;
      }
      this.search = word;
    },
    async initData() {
      this.isFetching = true;
      this.newsList = await getNewsAtPage({ page: 1, NumOfItem: INITIAL_NUMBER_OF_DATA });
      this.nextPage = INITIAL_NUMBER_OF_DATA / DEFAULT_ITEM_PER_PAGE;
      this.isFetching = false;
    },
    async addNextPageNews() {
      if (this.isFetching) {
        return;
      }

      this.isFetching = true;
      const newItems = await getNewsAtPage({ pageNum: this.nextPage });
      this.newsList = [...this.newsList, ...newItems];
      this.nextPage++;
      this.isFetching = false;
    },
    get currentNewsList() {
      if (this.search === '') {
        return this.newsList;
      }

      return this.newsList.filter((news) => news.desc.includes(this.search) || news.title.includes(this.search));
    },
  };
}

export const NewsStoreProvider = ({ children }) => {
  const newsStore = useLocalStore(createNewsStore);

  if (newsStore.nextPage === 0) {
    newsStore.initData();
  }

  return (
    <NewsStoreContext.Provider value={newsStore}>
      {children}
    </NewsStoreContext.Provider>
  );
};

export const useNewsStore = () => {
  const newsStore = useContext(NewsStoreContext);
  if (!newsStore) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return newsStore;
};
