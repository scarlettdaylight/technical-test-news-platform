import React from 'react';
import { observer } from 'mobx-react-lite';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';
import { useNewsStore } from '../../stores/newsStore';

import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import FlexBox from '../Atoms/FlexBox';
import Box from '../Atoms/Box';
import theme from '../../assets/styles/theme';
import { NEWS_TYPES_ALL, NEWS_TYPES_HEADLINES } from '../../utilis/constants';

const MiddleLine = styled(Box)`
    height: 1px;
    flex: 1;
    margin: 0 16px;
    background: ${({ theme }) => theme.color.lighterGray};
`;

const ListTitle = styled.h1`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black87};
`;

const messages = defineMessages({
  typeAll: {
    id: 'newsList.header.type.all',
    defaultMessage: 'All',
  },
  typeHeadline: {
    id: 'newsList.header.type.headlines',
    defaultMessage: 'Top headlines',
  },
});

const ListHeader = observer(() => {
  const newsStore = useNewsStore();
  const intl = useIntl();

  const handleOnChange = (e) => {
    console.log(e.target.value);
    newsStore.changeType(e.target.value);
  };

  return (
    <Row>
      <Column>
        <FlexBox borderLeft={`6px solid ${theme.color.purple}`} pl={3} mb={3}>
          <ListTitle>
            <FormattedMessage id="newsList.header.title" defaultMessage="Stories" />
          </ListTitle>
          <MiddleLine />
          <Box className="select">
            <select onChange={handleOnChange}>
              <option
                value={NEWS_TYPES_ALL}
                selected={newsStore.type === NEWS_TYPES_ALL}
              >
                {intl.formatMessage(messages.typeAll)}
              </option>
              <option
                value={NEWS_TYPES_HEADLINES}
                selected={newsStore.type === NEWS_TYPES_HEADLINES}
              >
                {intl.formatMessage(messages.typeHeadline)}
              </option>
            </select>
          </Box>
        </FlexBox>
      </Column>
    </Row>
  );
});

export default ListHeader;
