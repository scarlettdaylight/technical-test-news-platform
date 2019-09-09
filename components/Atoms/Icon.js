import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from './Box';

const Icon = ({
  icon, className, spin, size = '1x', ...rest
}) => (
  <Box as="span" className={`icon ${className}`}>
    <FontAwesomeIcon icon={icon} spin={spin} size={size} {...rest} />
  </Box>
);

export default Icon;
