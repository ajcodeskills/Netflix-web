/* eslint-disable require-jsdoc */
import React from 'react';
import {Feature, OptForm} from '../components';
import {FaqsContainer} from '../container/Faqs';
import {FooterContainer} from '../container/Footer';
import {HeaderContainer} from '../container/Header';
import {JumbotronContainer} from '../container/Jumbotron';
export function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder = "Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
            Ready to watch? Enter you email to create or restart your membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
