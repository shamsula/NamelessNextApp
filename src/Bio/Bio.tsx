import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components/macro";
import {
  Top,
  StyledContainer,
  Header,
  headerSpringProps,
  Body,
} from "../Style/Stuff";
import { useSpring, animated } from "react-spring";
import Dashwund from "../img/dashwund.jpg";
import Texture from "../img/paper.png";
import Back from "../Style/StyledBack";

type Props = {
  isFlipped?: boolean;
};
export function Bio(props: Props): JSX.Element {
  const [flipped, set] = useState<boolean>(props.isFlipped ?? false);
  const [canClick, setCanClick] = useState<boolean>(true);
  const { transform } = useSpring({
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 900, friction: 100 },
  });

  const headerProps = useSpring(headerSpringProps);

  const rotateContainer = useCallback(() => {
    if (!flipped && canClick) {
      return transform;
    } else {
      return transform.interpolate((t) => `${t} rotateX(180deg)`);
    }
  }, [flipped, canClick, transform]);

  const Text = (): JSX.Element => {
    if (!flipped && canClick) {
      return (
        <>
          <SubHeadingCont data-test="front-side">
            <H4>Intro</H4>
          </SubHeadingCont>
          <p className="cursive">
            I'm Limon. Coder by day, Artist by night - I'm leaving my footpring
            in this world. I've put in quite an effort trying to learn how to
            code, to only come to a realization that maybe one day none of us
            will need/want to. I've come to like techniques that make our lives
            better. Software Engineering, for example will always have a place
            in my heart. Speaking of heart, I've put some into making this
            peace. I hope some of you like it, but I predict that as it grows
            it'll start making less sense. If I'm selling an emotion, it might
            just be nostalgia.
          </p>
          <p style={{ textAlign: "right" }} className="cursive">
            - Limon
          </p>
        </>
      );
    } else {
      return (
        <>
          <SubHeadingCont data-test="flip-side">
            <H4>Flip Side</H4>
          </SubHeadingCont>
          <p className="cursive">Fin.</p>
        </>
      );
    }
  };

  const handleOnClick = () => {
    setCanClick(false);
    setTimeout(() => {
      set((state) => !state);
    }, 50);
    setCanClick(true);
  };

  return (
    <>
      <Header maxWidth="md">
        <animated.h1 style={headerProps} data-test="header-bio">
          Biography
        </animated.h1>
      </Header>
      <StyledContainer maxWidth="md">
        <Body onClick={handleOnClick} role="clickable">
          <Back />
          <FlipContainer>
            <TextContainer
              style={{ transform: rotateContainer() }}
              flipped={flipped ? 1 : 0}
              data-test="bio-text"
            >
              {Text()}
            </TextContainer>
          </FlipContainer>
        </Body>
      </StyledContainer>
    </>
  );
}

export default Bio;

const FlipContainer = styled.div`
  position: relative;
`;
const TextContainer = styled(animated.div)<{ flipped: number }>`
  color: ${({ flipped }) => (flipped === 1 ? "#fff" : `#fff`)};
  padding: 24px;
  background: ${({ theme, flipped }) =>
    flipped === 1
      ? `url(${Dashwund}), black`
      : `url(${Texture}), ${theme.colours.orangePeel}`};
  background-size: ${({ flipped }) => (flipped === 1 ? "auto 100%" : "auto")};
  background-repeat: ${({ flipped }) =>
    flipped === 1 ? "no-repeat" : "repeat"};
  background-position: center;
  min-height: 419px;
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
  }
`;

const SubHeadingCont = styled.div`
  margin: 0 5px 20px 5px;
  padding: 0;
`;

const H4 = styled.h2`
  && {
    color: ${({ theme }) => theme.colours.honeydew};
  }
`;
