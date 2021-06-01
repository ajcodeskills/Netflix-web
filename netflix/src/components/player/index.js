/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React, {useState, useContext, createContext} from 'react';
import ReactDom from 'react-dom';
import {Container, Button, Overlay, Inner, Close} from './styles/player';

export const PlayerContext = createContext();

export function Player({children, ...restProps}) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{showPlayer, setShowPlayer}}>
      <Container {...restProps}>
        {children}
      </Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({src, ...restProps}) {
  const {showPlayer, setShowPlayer} = useContext(PlayerContext);

  return showPlayer ? ReactDom.createPortal(
      <Overlay onClick = {() => setShowPlayer(false)}>
        <Inner>
          <video id="netflix-player" controls>
            <source src={src} type="video/mp4" />
          </video>
          <Close />
        </Inner>
      </Overlay>,
      document.body,
  ) : null;
};

Player.Button = function PlayerButton({...restProps}) {
  const {showPlayer, setShowPlayer} = useContext(PlayerContext);

  return (
    <Button {...restProps} onClick = {()=>setShowPlayer((showPlayer) => !showPlayer)}>
            Play
    </Button>
  );
};
