import React from 'react';
import styled from 'styled-components'

import Box from './Atoms/Box';
import FlexBox from './Atoms/FlexBox';
import Paragraph from './Atoms/Paragraph';
import Image from './Atoms/Image';
import Heading from './Atoms/Heading';

const StyledCardBox = styled(Box)`
  box-shadow: 0px 3px 6px ${({ theme }) => theme.color.black20};
`

const NewsCard = ({
  company = '', date = '', title = '', desc = '', image = '',
}) => (
  <StyledCardBox>
    <FlexBox>
      <Box>
        <span>{company[0]}</span>
      </Box>
      <Box>
        <Paragraph>
          {company}
        </Paragraph>
        <Paragraph>
          {date}
        </Paragraph>
      </Box>
    </FlexBox>
    <FlexBox>
      <Image src={image} />
    </FlexBox>
    <FlexBox>
      <Heading h={2}>
        {title}
      </Heading>
      <Paragraph>
        {desc}
      </Paragraph>
    </FlexBox>
  </StyledCardBox>
);

export default NewsCard;
