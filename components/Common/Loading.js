import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Atoms/Icon';
import Box from '../Atoms/Box';

const Loading = () => (
  <Box textAlign="center">
    <Icon icon={faSpinner} spin size="2x" />
  </Box>
);

export default Loading;
