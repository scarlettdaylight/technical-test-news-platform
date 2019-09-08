import React from 'react';
import styled, { css } from 'styled-components';
import {
  alignContent,
  alignItems,
  alignSelf,
  background,
  bottom,
  color,
  display,
  flexDirection,
  flexWrap,
  fontSize,
  fontWeight,
  height,
  minHeight,
  justifyContent,
  left,
  lineHeight,
  width,
  maxWidth,
  minWidth,
  order,
  position,
  right,
  space,
  textAlign,
  top,
  border,
  borderBottom,
  borderTop,
  borderRight,
  flex,
  backgroundImage,
  backgroundRepeat,
  backgroundPosition,
  backgroundSize,
  borderRadius,
  zIndex,
} from 'styled-system';

const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  ${props => props.cursorPointer
    && css`
      cursor: pointer;
    `}
  ${props => props.overflowHidden
    && css`
      overflow: hidden;
    `}
    ${props => props.posAb
  && css`
      position: absolute;
    `}
  ${props => props.posRe
  && css`
      position: relative;
    `}
  ${space}
  ${width}
  ${minWidth}
  ${maxWidth}
  ${height}
  ${minHeight}
  ${fontSize}
  ${color}
  ${textAlign}
  ${lineHeight}
  ${position}
  ${bottom}
  ${top}
  ${left}
  ${right}
  ${order}
  ${fontWeight}
  ${display}
  ${alignItems}
  ${alignSelf}
  ${justifyContent}
  ${alignContent}
  ${background}
  ${flexDirection}
  ${flexWrap}
  ${flex}
  ${border}
  ${borderBottom}
  ${borderTop}
  ${borderRight}
  ${backgroundImage}
  ${backgroundRepeat}
  ${backgroundPosition}
  ${backgroundSize}
  ${borderRadius}
  ${zIndex}
`;

const FlexBox = props => <StyledFlex {...props}>{props.children}</StyledFlex>;

export default FlexBox;
