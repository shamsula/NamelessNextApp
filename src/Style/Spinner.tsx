import React from "react";
import styled, { css, keyframes } from "styled-components/macro";

const spin = keyframes`
100% {
    transform:rotate(360deg);
  }
`;

type Props = {
  colour?: string;
};
export function Spinner({ colour }: Props): JSX.Element {
  return (
    <SpinnerContainer>
      <StyledLoader colour={colour} />
    </SpinnerContainer>
  );
}

export default Spinner;

const SpinnerContainer = styled.div`
  padding: 5px;
  display: flex;
`;
// courtesy of Chris Smith (March); default is original colours
const StyledLoader = styled.div<{ colour?: string }>`
  // animation:${spin} 1s infinite linear;
  animation: ${spin} 1s infinite cubic-bezier(1, 0, 0, 1);
  border: solid 2px transparent;
  border-radius: 50%;
  border-right-color: ${({ theme, colour }) =>
    colour ? theme.colours[colour] : "#09f"};
  border-top-color: ${({ theme, colour }) =>
    colour ? theme.colours[colour] : "#09f"};
  box-sizing: border-box;
  height: 20px;
  left: calc(50% - 10px);
  position: relative;
  top: calc(50% - 10px);
  width: 20px;
  z-index: 1;
  // &:before {
  //   animation:${spin} 2s infinite linear;
  //   border:solid 2px transparent;
  //   border-radius:50%;
  //   border-right-color: ${({ theme, colour }) =>
    colour ? theme.colours[colour] : "#3cf"} ;
  //   border-top-color: ${({ theme, colour }) =>
    colour ? theme.colours[colour] : "#3cf"} ;
  //   box-sizing:border-box;
  //   content:"";
  //   height:16px;
  //   left:0;
  //   position:absolute;
  //   top:0;
  //   width:16px;
  // }
  &:after {
    animation: ${spin} 3s infinite linear;
    border: solid 2px transparent;
    border-radius: 50%;
    border-right-color: ${({ theme, colour }) =>
      colour ? theme.colours[colour] : "#6ff"};
    border-top-color: ${({ theme, colour }) =>
      colour ? theme.colours[colour] : "#6ff"};
    box-sizing: border-box;
    content: "";
    height: 12px;
    left: 2px;
    position: absolute;
    top: 2px;
    width: 12px;
  }
`;
