import React from 'react';
import SectionNewsList from '../components/Home/SectionNewsList';
import { NewsStoreProvider } from '../stores/newsStore';

function Home() {
  return (
    <NewsStoreProvider>
      <SectionNewsList />
    </NewsStoreProvider>
  );
}

export default Home;
