/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {useState, useContext, createContext} from 'react';
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from './styles/acordion';
const ToggleContext = createContext();
export function Accordion({children, ...restProps}) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

// eslint-disable-next-line react/prop-types
Accordion.Title = function AccordioTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordioFrame({children, ...restProps}) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordioItem({children, ...restProps}) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value = {{toggleShow, setToggleShow}}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordioHeader({children, ...restProps}) {
  // eslint-disable-next-line max-len
  const {toggleShow, setToggleShow} = useContext(ToggleContext);
  return (
    // eslint-disable-next-line max-len
    <Header onClick = {()=> setToggleShow((toggleShow)=>!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src = '/images/icons/close-slim.png' alt = 'close' />
      ) : (
        <img src = '/images/icons/add.png' alt = 'Open' />
      )}
    </Header>
  );
};

Accordion.Body = function AccordioBody({children, ...restProps}) {
  // eslint-disable-next-line max-len
  const {toggleShow} = useContext(ToggleContext);
  return (
      // eslint-disable-next-line max-len
      toggleShow ? <Body {...restProps}>
        {children}
      </Body> : null
  );
};
