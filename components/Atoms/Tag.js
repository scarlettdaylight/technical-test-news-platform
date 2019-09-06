import React from 'react';
import Box from './Box';

const Tag = ({ name, className, primary, ...rest }) => <Box className={`tag is-normal ${className || ''}`} {...rest} />;

export default Tag;
