import React from 'react';
import styled from 'styled-components';

import Box from './Atoms/Box';
import Paragraph from './Atoms/Paragraph';
import Image from './Atoms/Image';
import theme from '../assets/styles/theme';


const StyledCardBox = styled(Box)`
  box-shadow: 0px 3px 6px ${({ theme }) => theme.color.black20};
  height: 100%;
`;

const StyledCardTitle = styled.h3`
  line-height: 1.4;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.black87};
`;

const StyledMediaCircle = styled.div`
  width: 48px;
  height: 48px;
  font-size: 24px;
  text-align: center;
  line-height: 48px;
  color: ${({ theme }) => theme.color.gray};
  background-color: ${({ theme }) => theme.color.lighterGray};
  border-radius: 2048px;
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
    <StyledCardBox className="card">
      <Box className="media" p={3} mb="0 !important">
        <div className="media-left">
          <StyledMediaCircle>
            {sourceName[0]}
          </StyledMediaCircle>
        </div>
        <div className="media-content">
          <Paragraph
            pb={0}
            color={theme.color.black87}
            className="title is-4"
          >
            {sourceName}
          </Paragraph>
          <Paragraph
            pb={0}
            color={theme.color.black54}
            fontSize={[1, 1, 2]}
            className="subtitle is-6"
          >
            {publishedAt}
          </Paragraph>
        </div>
      </Box>
      <Box className="card-image" height={[250, 250, 300]} backgroundColor={theme.color.lighterGray}>
        <Image src={coverImage} alt={title} />
      </Box>
      <Box className="card-content" p={3}>
        <StyledCardTitle>
          {title}
        </StyledCardTitle>
        <Paragraph fontSize={2} color={theme.color.black54}>
          {desc}
        </Paragraph>
      </Box>
    </StyledCardBox>
  </a>
);

export default NewsCard;
