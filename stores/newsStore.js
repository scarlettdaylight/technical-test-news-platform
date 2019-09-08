import React, { createContext, useContext, useEffect } from 'react';
import lowerCase from 'lodash/lowerCase';
import { useStaticRendering, useLocalStore, useAsObservableSource } from 'mobx-react-lite';
import { getNews } from '../utilis/newsSource';
import {
  DEFAULT_ITEM_PER_PAGE,
  INITIAL_NUMBER_OF_DATA, NEWS_TYPES_ALL,
} from '../utilis/constants';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

const NewsStoreContext = createContext();

export function createNewsStore() {
  return {
    nextPage: 0,
    newsList: [],
    search: '',
    type: NEWS_TYPES_ALL,
    isFetching: false,
    changeType(type) {
      this.type = type;
      this.initData();
    },
    changeSearch(word) {
      if (typeof word !== 'string' || this.search === word) {
        return;
      }
      this.search = word;
    },
    get isSearchNotEmpty() {
      return typeof this.search === 'string' && this.search.length > 0;
    },
    async initData() {
      this.newsList = [];
      this.isFetching = true;
      this.newsList = await getNews({
        type: this.type,
        page: 1,
        NumOfItem: INITIAL_NUMBER_OF_DATA,
      });
      this.nextPage = INITIAL_NUMBER_OF_DATA / DEFAULT_ITEM_PER_PAGE + 1;
      this.isFetching = false;
    },
    async addNextPageNews() {
      if (this.isFetching) {
        return;
      }

      this.isFetching = true;
      const newItems = await getNews({
        type: this.type,
        page: this.nextPage,
        NumOfItem: DEFAULT_ITEM_PER_PAGE,
      });
      this.newsList = [...this.newsList, ...newItems];
      this.nextPage = this.nextPage + 1;
      this.isFetching = false;
    },
    get currentNewsList() {
      if (this.search === '') {
        return this.newsList;
      }
      const lowerSearch = lowerCase(this.search);

      return this.newsList.filter((news) => lowerCase(news.desc).includes(lowerSearch) || lowerCase(news.title).includes(lowerSearch));
    },
  };
}

// to test multiple store
export function createUIStore() {
  return {
    isMenuOpened: false,
  };
}


export const NewsStoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    newsStore: createNewsStore(),
    uiStore: createUIStore(),
  }));

  if (store.newsStore.nextPage === 0) {
    store.newsStore.initData();
  }

  return (
    <NewsStoreContext.Provider value={store}>
      {children}
    </NewsStoreContext.Provider>
  );
};

export const useRootStore = () => {
  const store = useContext(NewsStoreContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return store;
};

export const useNewsStore = () => {
  const store = useContext(NewsStoreContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return store.newsStore;
};
