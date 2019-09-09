import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import NewsCard from '../Common/NewsCard';
import { useNewsStore, useUIStore } from '../../stores/rootStore';
import SearchingInfo from './SearchingInfo';
import ListHeader from './ListHeader';
import NewsCardHorizontal from '../Common/NewsCardHorizontal';
import Loading from '../Common/Loading';

const InfiniteSectionWrapper = styled(Section)`
    padding-top: 100px;
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: auto;
`;

const SectionNewsList = observer(() => {
  const newsStore = useNewsStore();
  const uiStore = useUIStore();

  const handleScroll = (target) => {
    const offset = 1000;
    if (target.scrollHeight - (target.scrollTop + target.clientHeight) <= offset) {
      // do something at end of scroll
      newsStore.addNextPageNews();
    }
  };

  const throttleOnScroll = throttle((target) => handleScroll(target), 300);

  return (
    <InfiniteSectionWrapper
      id="news-list-wrapper"
      onScroll={({ target }) => throttleOnScroll(target)}
    >
      <Container fluid>
        <ListHeader />
        <SearchingInfo />
        <Row multi>
          {newsStore.currentNewsList.map((item, i) => (
            <Column col={uiStore.isGrid ? 'is-6-tablet is-4-desktop' : 'is-12'} key={i}>
              {uiStore.isGrid && <NewsCard {...item} /> }
              {!uiStore.isGrid && <NewsCardHorizontal {...item} /> }
            </Column>
          ))}
        </Row>
        {newsStore.isFetching && (
          <Row>
            <Column py={5}>
              <Loading />
            </Column>
          </Row>
        )}
      </Container>
    </InfiniteSectionWrapper>
  );
});

export default SectionNewsList;
