import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import NewsCard from '../Common/NewsCard';
import { useNewsStore } from '../../stores/newsStore';

const InfiniteSectionWrapper = styled(Section)`
    padding-top: 100px;
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: auto;
`;

const SectionNewsList = observer(() => {
  const newsStore = useNewsStore();

  // TODO maybe throttle this?
  const handleScroll = (e) => {
    const element = e.target;
    const offset = 600;

    console.log('scrolled!!');
    console.log(`element.scrollHeight: ${element.scrollHeight}`);
    console.log(`element.scrollTop: ${element.scrollTop}`);
    console.log(`element.clientHeight: ${element.clientHeight}`);

    if (element.scrollHeight - (element.scrollTop + element.clientHeight) <= offset) {
      // do something at end of scroll
      newsStore.addNextPageNews();
    }
  };

  return (
    <InfiniteSectionWrapper id="news-list-wrapper" onScroll={handleScroll}>
      <Container fluid>
        <Row multi>
          {newsStore.currentNewsList.map((item, i) => (
            <Column col="is-6-tablet is-4-desktop" key={i}>
              <NewsCard {...item} />
            </Column>
          ))}
        </Row>
      </Container>
    </InfiniteSectionWrapper>
  );
});

export default SectionNewsList;
