import React from 'react';
import styled from 'styled-components';
import {
  alignItems,
  color,
  flexWrap,
  fontSize,
  height,
  justifyContent,
  position,
  textAlign,
  borderBottom,
  space,
  background,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  minHeight,
  maxHeight,
} from 'styled-system';

const SectionBase = styled.section`
  ${background}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${backgroundSize}
  ${space}
  ${fontSize}
  ${color}
  ${justifyContent}
  ${alignItems}
  ${textAlign}
  ${height}
  ${position}
  ${flexWrap}
  ${borderBottom}
  ${minHeight}
  ${maxHeight}
`;

const Section = ({ children, className, ...props }) => (
  <SectionBase className={`section ${className || ''}`} {...props}>
    {children}
  </SectionBase>
);

export default Section;
