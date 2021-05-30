import React from 'react';
import {FaqsContainer} from './container/Faqs';
import {FooterContainer} from './container/Footer';
import {JumbotronContainer} from './container/Jumbotron';
// eslint-disable-next-line require-jsdoc
export function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
