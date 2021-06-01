/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Spinner,
  LockBody,
  ReleaseBody,
  Picture,
} from './styles/loading';
export function Loading({src, ...restProps}) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src = {`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
