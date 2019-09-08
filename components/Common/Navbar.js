import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import throttle from 'lodash/throttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Box from '../Atoms/Box';
import Paragraph from '../Atoms/Paragraph';

import theme from '../../assets/styles/theme';
import { useNewsStore } from '../../stores/newsStore';

const StyledNavbar = styled.nav`
  background: ${({ theme }) => theme.color.purple};
  color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 3px 6px ${({ theme }) => theme.color.black20};
`;

const SearchInput = styled.input`
  background: ${({ theme }) => theme.color.white15};
  color: ${({ theme }) => theme.color.white};
  border: 0;
  &::placeholder {
    color: ${({ theme }) => theme.color.white42};
  }
`;

const Navbar = () => {
  const newsStore = useNewsStore();

  const handleOnChange = (value) => {
    newsStore.changeSearch(value);
  };

  const throttleOnChange = throttle((value) => handleOnChange(value), 500);

  return (
    <StyledNavbar className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Paragraph pb={0} color={theme.color.white}>
            <FormattedMessage id="navbar.logo" defaultMessage="US News" />
          </Paragraph>
        </a>
      </div>
      <Box ml="auto" className="navbar-item">
        <div className="field">
          <p className="control has-icons-left">
            <SearchInput
              onChange={({ target: { value } }) => throttleOnChange(value)}
              className="input"
              type="text"
              placeholder="Search"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </p>
        </div>
      </Box>
    </StyledNavbar>
  );
};

export default Navbar;
