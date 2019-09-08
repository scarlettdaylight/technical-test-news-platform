import React from 'react';
import { observer, useAsObservableSource } from 'mobx-react-lite';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

import { FormattedMessage } from 'react-intl';
import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import NewsCard from '../Common/NewsCard';
import { useNewsStore } from '../../stores/newsStore';
import Paragraph from '../Atoms/Paragraph';
import theme from '../../assets/styles/theme';
import Box from '../Atoms/Box';
import FlexBox from '../Atoms/FlexBox';

const InfiniteSectionWrapper = styled(Section)`
    padding-top: 100px;
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: auto;
`;

const SectionNewsList = observer(() => {
  const newsStore = useNewsStore();

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
        {newsStore.isSearchNotEmpty && (
          <Row>
            <Column>
              <FlexBox>
                <Paragraph mr={5}>
                  <FormattedMessage
                    id="newslist.searchingFor.word"
                    defaultMessage="Searching For: <s>{searchWord}</s>"
                    values={{
                      s: (w) => <Box as="span" color={theme.color.black87}>{w}</Box>,
                      searchWord: newsStore.search,
                    }}
                  />
                </Paragraph>
                <Paragraph>
                  <FormattedMessage
                    id="newslist.searchingFor.result"
                    defaultMessage="Number of Result: <s>{number}<s/>"
                    values={{
                      s: (w) => <Box as="span" color={theme.color.black87}>{w}</Box>,
                      number: newsStore.currentNewsList.length || 0,
                    }}
                  />
                </Paragraph>
              </FlexBox>
            </Column>
          </Row>
        )}
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
