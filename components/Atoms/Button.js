import React from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import {
  alignSelf, borderColor, borderRadius, borders, color, fontSize, space, textAlign, width,
} from 'styled-system';

export const StyledButton = styled.button`
  font-weight: bold;
  transition: background-color 100ms ease-in-out;
  &:hover {
    background-color: #b58d5c;
  }
  &:active {
    background-color: #a17e51;
  }
  &:disabled {
    background-color: #c99d66;
  }
  ${alignSelf}
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${borderColor}
  ${borderRadius}
  ${borders}
`;

const Button = ({
  children, primary, inverted, loading, outlined, className, text, ...props
}) => (
  <StyledButton
    className={`button is-primary ${inverted ? 'is-inverted' : ''} ${loading ? 'is-loading' : ''} ${outlined ? 'is-outlined' : ''} ${className || ''}`}
    fontSize={[0, 0, 1]}
    {...props}
  >
    {!text && !children && 'Submit'}
    {!text && children}
    {text && text === 'ok' && <FormattedMessage id="common:button.ok" defaultMessage="OK" />}
    {text && text === 'submit' && <FormattedMessage id="common:button.submit" defaultMessage="Submit" />}
    {text && text === 'send' && <FormattedMessage id="common:button.send" defaultMessage="Send" />}
    {text && text === 'back' && <FormattedMessage id="common:button.back" defaultMessage="Back" />}
    {text && text === 'next' && <FormattedMessage id="common:button.next" defaultMessage="Next" />}
    {text && text === 'viewAll' && <FormattedMessage id="common:button.viewAll" defaultMessage="View All" />}
    {text && text === 'login' && <FormattedMessage id="common:button.login" defaultMessage="Log in" />}
    {text && text === 'viewMore' && <FormattedMessage id="common:button.viewMore" defaultMessage="View More" />}
    {text && text === 'cancel' && <FormattedMessage id="common:button.cancel" defaultMessage="Cancel" />}
    {text && text === 'detail' && <FormattedMessage id="common:button.detail" defaultMessage="Detail" />}
    {text && text === 'close' && <FormattedMessage id="common:button.close" defaultMessage="Close" />}
    {text && text === 'subscribe' && <FormattedMessage id="common:button.subscribe" defaultMessage="Subscribe" />}
    {text && text === 'seeMenu' && <FormattedMessage id="common:button.seeMenu" defaultMessage="See Menu" />}
    {text && text === 'makeEnquiry' && <FormattedMessage id="common:button.makeEnquiry" defaultMessage="Make an enquiry" />}
  </StyledButton>
);

export default Button;
