/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {Pane, Item, Title, SubTitle, Image, Container, Inner} from './styles/Jumbotron';

// eslint-disable-next-line require-jsdoc
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line require-jsdoc
export function Jumbotron({children, direction = 'row', ...restProps}) {
  return (

    <Item>
      <Inner direction = {direction}>
        {children}
      </Inner>
    </Item>

  );
}
Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Pane = function JumbotronPane({children, ...restProps}) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({...restProps}) {
  return <Image {...restProps}/>;
};
