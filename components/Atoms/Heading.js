import React from 'react';
import styled, { css } from 'styled-components';
import {
  borderBottom,
  color,
  fontSize,
  fontWeight,
  space,
  textAlign,
  width,
  lineHeight,
  display,
} from 'styled-system';

export const Headline = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  margin: 0;
  text-align: inherit;
  line-height: 1.2;
  
  ${props => props.uppercase
    && css`
      text-transform: uppercase;
    `}
  
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${borderBottom}
  ${lineHeight}
  ${display}
`;

const AsH1 = Headline.withComponent('h1');
const AsH2 = Headline.withComponent('h2');
const AsH3 = Headline.withComponent('h3');
const AsH4 = Headline.withComponent('h4');

const Heading = ({
  children, uppercase, h, ...props
}) => {
  switch (h) {
    case 2:
      return (
        <AsH2 fontSize={[2]} fontWeight={700} pb={[2, 2, 3]} uppercase={uppercase} {...props}>
          {children}
        </AsH2>
      );
    case 3:
      return (
        <AsH3
          fontSize={[2]}
          pb={[1, 1, 2]}
          fontWeight={400}
          uppercase={uppercase}
          {...props}
        >
          {children}
        </AsH3>
      );
    case 4:
      return (
        <AsH4 fontSize={[1]} pb={[1, 1, 2]} uppercase={uppercase} {...props}>
          {children}
        </AsH4>
      );
    default:
      return (
        <AsH1 fontSize={[2, 2, 2, 3]} pb={[2, 2, 3]} fontWeight={700} uppercase={uppercase} {...props}>
          {children}
        </AsH1>
      );
  }
};

Heading.displayName = 'Heading';

export default Heading;
