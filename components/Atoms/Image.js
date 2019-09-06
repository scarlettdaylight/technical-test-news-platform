import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

const Image = ({ src, alt, ...rest }) => {
  if (!src) {
    return null;
  }

  return (
    <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ width: '100%', paddingBottom: '62.5%' }} />
      <StyledImg src={src} alt={alt} />
    </div>
  );
};

export default Image;
