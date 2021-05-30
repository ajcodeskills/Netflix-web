import React from 'react';
import {Footer} from '../components';
// eslint-disable-next-line require-jsdoc
export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions: Contact us</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href = '#'>FAQ</Footer.Link>
          <Footer.Link href = '#'>Investor Relations</Footer.Link>
          <Footer.Link href = '#'>Ways to watch</Footer.Link>
          <Footer.Link href = '#'>Coperate Information</Footer.Link>
          <Footer.Link href = '#'>Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href = '#'>Help Center</Footer.Link>
          <Footer.Link href = '#'>Jobs</Footer.Link>
          <Footer.Link href = '#'>Terms of Use</Footer.Link>
          <Footer.Link href = '#'>Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href = '#'>Account</Footer.Link>
          <Footer.Link href = '#'>Redeem Gifts</Footer.Link>
          <Footer.Link href = '#'>Privacy</Footer.Link>
          <Footer.Link href = '#'>Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href = '#'>Media Center</Footer.Link>
          <Footer.Link href = '#'>Buy Gifts Cards</Footer.Link>
          <Footer.Link href = '#'>Cookies Preferences</Footer.Link>
          <Footer.Link href = '#'>Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break/>
      <Footer.Text>Netflix United Kingdom</Footer.Text>
    </Footer>
  );
}
