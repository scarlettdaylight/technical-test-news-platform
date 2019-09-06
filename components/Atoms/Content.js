import React from 'react';

export const HTMLContent = ({ content, className }) => (
  <div className={`content ${className}`} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

export default Content;
