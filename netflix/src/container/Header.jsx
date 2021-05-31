/* eslint-disable react/prop-types */
import React from 'react';
import {Header} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
// eslint-disable-next-line require-jsdoc
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line require-jsdoc
export function HeaderContainer({children}) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
