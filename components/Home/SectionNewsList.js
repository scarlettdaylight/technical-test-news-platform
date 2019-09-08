import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import NewsCard from '../NewsCard';
import { useNewsStore } from '../../stores/newsStore';

const SectionNewsList = observer(() => {
  const newsStore = useNewsStore();

  return (
    <Section>
      <Container fluid>
        <Row multi>
          {newsStore.newsList.map((item, i) => (
            <Column col="is-6-tablet is-4-desktop" key={i}>
              <NewsCard {...item} />
            </Column>
          ))}
        </Row>
      </Container>
    </Section>
  );
});

export default SectionNewsList;
