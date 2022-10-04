import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { Container } from "@material-ui/core";
import Omni from "../img/omnimon.jpg";

export const StyledContainer = styled(Container)<{ colour?: string }>`
  background: ${({ theme, colour }) =>
    colour ? colour : theme.colours.platinum};
  min-height: 100vh;
  padding: 12px;
`;

const HeaderCont = styled(Container)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  text-transform: uppercase;
  letter-spacing: 10px;
  line-height: 36px;
  padding: 24px 4px;
  color: ${({ theme }) => theme.colours.orangePeel};
  text-shadow: ${({ theme }) => theme.textShadow[1]};
  background: ${({ theme }) => theme.colours.honeyDew};
  border-bottom: solid 2px ${({ theme }) => theme.colours.quickSilver};
`;

export function Header(props: any): JSX.Element {
  return <HeaderCont {...props} data-test="header-page" />;
}

export const Body = styled.div`
  padding: 25px;
  min-height: 500px;
  background: ${({ theme }) => theme.colours.honeyDew};
  border: 1px solid ${({ theme }) => theme.colours.quickSilver};
  border-radius: 4px;
  margin-top: 12px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: ${({ theme }) => theme.colours.orangePeel};
  margin-bottom: 12px;
  text-shadow: ${({ theme }) => theme.textShadow[0]};
  &:hover {
    background-color: ${({ theme }) => theme.colours.darkGrey};
  }
`;

export const headerSpringProps = {
  to: {
    transform: "translate3d(0,0,0)",
    scale: "1",
    opacity: 1,
  },

  from: {
    transform: "translate3d(1.8%,0,0)",
    scale: "1.05",
    opacity: 0.8,
  },
  config: {
    duration: 1000,
  },
};

// @ts-ignore
export const aberration = keyframes`
0% {
  text-shadow:1px 1px 0px #f0f, -1px -1px 0 #0ff;
}
33% {
  text-shadow:2px 3px 0px #f0f, -3px -2px 0 #0ff;
}
66% {
   text-shadow:-1px -1px 0px #f0f, 1px 1px 0 #0ff;
}
to {
  text-shadow:2px 1px 0px #f0f, -1px -2px 0 #0ff;
}
`;

export const Top = styled.main`
  position: relative;
  width: 100%;

  ${({ theme }) => `${theme.media.desktop} {
    padding: 1.6rem;
    background: url(${Omni}), #fff;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    }
  `}
`;
