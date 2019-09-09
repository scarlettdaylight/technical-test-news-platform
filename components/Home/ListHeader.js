import React from 'react';
import { observer } from 'mobx-react-lite';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';
import { faAlignJustify, faTh } from '@fortawesome/free-solid-svg-icons';
import { useNewsStore, useUIStore } from '../../stores/rootStore';

import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import FlexBox from '../Atoms/FlexBox';
import Box from '../Atoms/Box';
import theme from '../../assets/styles/theme';
import {
  LIST_VIEW_GRID,
  LIST_VIEW_LIST,
  NEWS_TYPES_ALL,
  NEWS_TYPES_HEADLINES,
} from '../../utilis/constants';
import Icon from '../Atoms/Icon';

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
  const uiStore = useUIStore();
  const intl = useIntl();

  const handleOnChange = (e) => {
    newsStore.changeType(e.target.value);
  };

  const handleClickIcons = (type) => (e) => {
    uiStore.changeListView(type);
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
          <FlexBox ml={2} mt={[2, 0]} width={['100%', 'auto']} alignSelf="stretch" justifyContent="flex-end">
            <FlexBox p={1} cursorPointer onClick={handleClickIcons(LIST_VIEW_GRID)}>
              <Icon icon={faTh} color={uiStore.isGrid ? theme.color.purple : theme.color.black20} />
            </FlexBox>
            <FlexBox p={1} cursorPointer onClick={handleClickIcons(LIST_VIEW_LIST)}>
              <Icon icon={faAlignJustify} color={!uiStore.isGrid ? theme.color.purple : theme.color.black20} />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Column>
    </Row>
  );
});

export default ListHeader;
