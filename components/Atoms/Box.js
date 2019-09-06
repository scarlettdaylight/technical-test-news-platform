import React from 'react';
import styled, { css } from 'styled-components';
import {
  alignItems,
  borderRadius,
  borders,
  borderColor,
  bottom,
  boxShadow,
  color,
  display,
  fontSize,
  fontWeight,
  height,
  justifyContent,
  left,
  lineHeight,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
  order,
  position,
  right,
  space,
  textAlign,
  top,
  width,
  flex,
  verticalAlign,
  alignSelf,
  background,
  backgroundImage,
  backgroundRepeat,
  backgroundPosition,
  backgroundSize,
  opacity,
  zIndex,
  letterSpacing,
} from 'styled-system';

const BoxBase = styled.div`
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
  ${maxWidth}
  ${minWidth}
  ${height}
  ${fontSize}
  ${color}
  ${textAlign}
  ${lineHeight}
  ${position}
  ${boxShadow}
  ${bottom}
  ${top}
  ${left}
  ${right}
  ${order}
  ${fontWeight}
  ${display}
  ${alignItems}
  ${justifyContent}
  ${borders}
  ${borderRadius}
  ${borderColor}
  ${maxHeight}
  ${minHeight}
  ${flex}
  ${verticalAlign}
  ${alignSelf}
  ${background}
  ${backgroundImage}
  ${backgroundRepeat}
  ${backgroundPosition}
  ${backgroundSize}
  ${opacity}
  ${zIndex}
  ${letterSpacing}
`;

const BoxAsSpan = BoxBase.withComponent('span');
const BoxAsLi = BoxBase.withComponent('li');

const Box = ({ children, as, ...props }) => {
  if (as === 'span') {
    return (
      <BoxAsSpan display="inline-block" {...props}>
        {children}
      </BoxAsSpan>
    );
  }
  if (as === 'li') {
    return <BoxAsLi {...props}>{children}</BoxAsLi>;
  }
  return <BoxBase {...props}>{children}</BoxBase>;
};

export default Box;
