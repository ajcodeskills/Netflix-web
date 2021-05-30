/* eslint-disable require-jsdoc */
import React from 'react';
import {FaqsContainer} from '../container/Faqs';
import {FooterContainer} from '../container/Footer';
import {JumbotronContainer} from '../container/Jumbotron';
export function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
