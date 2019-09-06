import React from 'react';
import styled from 'styled-components';
import {
  borders, color, display, fontSize, fontWeight, lineHeight, maxWidth, minHeight, space, textAlign, width,
} from 'styled-system';

const StyledParagraph = styled.p`
  font-family: 'Karla', sans-serif;
  margin: 0;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: inherit;

  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${display}
  ${textAlign}
  ${lineHeight}
  ${minHeight}
  ${maxWidth}
  ${fontWeight}
  ${borders}
`;

const Paragraph = ({ children, ...props }) => (
  <StyledParagraph fontSize={[0, 0, 1]} pb={[2, 2, 3]} {...props}>
    {children}
  </StyledParagraph>
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
