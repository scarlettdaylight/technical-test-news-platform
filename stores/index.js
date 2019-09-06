import React, { createContext } from 'react';
import { useStaticRendering, useLocalStore } from 'mobx-react-lite';
import { newsStore, createNewsStore } from './newsStore';


const isServer = typeof window === 'undefined';
useStaticRendering(isServer);


export const NewsStoreProvider = ({ children }) => {
  const store = useLocalStore(createNewsStore);
  return <newsStore.Provider value={store}>{children}</newsStore.Provider>;
};
