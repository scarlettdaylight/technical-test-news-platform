import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import Box from '../Atoms/Box';
import Paragraph from '../Atoms/Paragraph';
import Image from '../Atoms/Image';
import theme from '../../assets/styles/theme';
import FlexBox from '../Atoms/FlexBox';

const StyledCardBox = styled(FlexBox)`
  box-shadow: 0px 3px 6px ${({ theme }) => theme.color.black20};
  transition: box-shadow 200ms ease;
  height: 100%;
  &:hover {
    box-shadow: 0px 3px 6px ${({ theme }) => theme.color.black54};
  }
`;

const StyledCardTitle = styled.h3`
  line-height: 1.4;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.black87};
`;

const StyledMediaCircle = styled.div`
  width: 40px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  color: ${({ theme }) => theme.color.gray};
  background-color: ${({ theme }) => theme.color.lighterGray};
  border-radius: 2048px;
  display: inline-block;
  margin-right: 16px;
`;

const NewsCard = ({
  sourceName = '',
  publishedAt = '',
  title = '',
  desc = '',
  url = '',
  coverImage = '/static/image/default.png',
}) => (
  <a href={url} target="_blank" rel="noreferrer noopener">
    <StyledCardBox>
      <Box flex={['0 0 100%', '0 0 100%', '0 0 27%']} className="card-image" height={[250, 250, '100%', 200]} backgroundColor={theme.color.lighterGray}>
        <LazyLoad scrollContainer="#news-list-wrapper" once>
          <Image src={coverImage} alt={title} />
        </LazyLoad>
      </Box>
      <FlexBox flex={1} py={3} px={[3, 3, 5]} flexDirection="column" alignItems="flex-start" height="100%">
        <FlexBox width="100%" pb={3}>
          <StyledMediaCircle>
            {sourceName[0]}
          </StyledMediaCircle>
          <Paragraph
            pb={0}
            color={theme.color.black87}
            className="title is-4"
          >
            {sourceName}
          </Paragraph>
          <Paragraph
            ml="auto"
            pb={0}
            color={theme.color.black54}
            fontSize={[1, 1, 2]}
            className="subtitle is-6"
          >
            {publishedAt}
          </Paragraph>
        </FlexBox>
        <StyledCardTitle>
          {title}
        </StyledCardTitle>
        <Paragraph fontSize={2} color={theme.color.black54}>
          {desc}
        </Paragraph>
      </FlexBox>
    </StyledCardBox>
  </a>
);

export default NewsCard;
