/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Home, Signin, Signup, Browse} from './pages';
import {IsUserRedirect, ProtectedRoute} from './helpers/Routes';
import {useAuthListener} from './hooks';
// eslint-disable-next-line require-jsdoc
export function App() {
  const {user} = useAuthListener();
  return (
    <Router>
      <IsUserRedirect user={user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_IN} exact>
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_UP} exact>
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={user} loggedInPath = {ROUTES.BROWSE} path={ROUTES.HOME} exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
