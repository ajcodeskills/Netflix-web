/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import {
  Container,
  Input,
  Button,
  Text,
  Break,
} from './styles/opt-form';
// eslint-disable-next-line react/prop-types
export function OptForm({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  );
}

OptForm.Input = function OptFormInput({...restProps}) {
  return <Input {...restProps} />;
};

// eslint-disable-next-line react/prop-types
OptForm.Button = function OptFormButton({children, ...restProps}) {
  return <Button {...restProps}>
    {children}
    <img src = 'images/icons/chevron-right.png' alt = "Try Now" />
  </Button>;
};

// eslint-disable-next-line react/prop-types
OptForm.Text = function OptFormText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({children, ...restProps}) {
  return <Break {...restProps} />;
};
