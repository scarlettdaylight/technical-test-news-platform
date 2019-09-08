import React from 'react';
import { observer } from 'mobx-react-lite';
import { FormattedMessage } from 'react-intl';
import { useNewsStore } from '../../stores/newsStore';

import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import FlexBox from '../Atoms/FlexBox';
import Paragraph from '../Atoms/Paragraph';
import Box from '../Atoms/Box';
import theme from '../../assets/styles/theme';

const SearchingInfo = observer(() => {
  const newsStore = useNewsStore();

  return (
    <>
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
    </>
  );
});

export default SearchingInfo;
