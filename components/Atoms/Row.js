import React from 'react';
import styled from 'styled-components';
import {
  alignItems,
  color,
  flexWrap,
  fontSize,
  height,
  maxHeight,
  justifyContent,
  position,
  textAlign,
  space,
  background,
  border,
} from 'styled-system';

const RowBase = styled.div`
  ${space}
  ${background}
  ${fontSize}
  ${color}
  ${justifyContent}
  ${alignItems}
  ${textAlign}
  ${height}
  ${maxHeight}
  ${position}
  ${flexWrap}
  ${border}
`;

const Row = ({
  multi, mobile, children, ...props
}) => (
  <RowBase className={`columns ${multi ? 'is-multiline ' : ''}${mobile ? 'is-mobile' : ''}`} {...props}>
    {children}
  </RowBase>
);

export default Row;
