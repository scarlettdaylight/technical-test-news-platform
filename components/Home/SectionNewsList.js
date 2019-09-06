import React from 'react';
import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import NewsCard from '../NewsCard';

const SectionNewsList = () => (
  <Section>
    <Container>
      <Row multi>
        <Column col="is-4 is-desktop-6">
          <NewsCard />
        </Column>
      </Row>
    </Container>
  </Section>
);

export default SectionNewsList;
