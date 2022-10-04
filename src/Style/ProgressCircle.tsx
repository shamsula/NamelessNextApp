import React from "react";
import styled, { css } from "styled-components/macro";

type Props = {
  percentage: number;
  color?: string;
};
export function ProgressCircle({ percentage, color }: Props): JSX.Element {
  const ratio = percentage % 1;
  const rotateBy = 45 + ratio * 360;
  return (
    <PlayerContainer>
      <Player>
        <>
          <RightSide color={color}></RightSide>
          <LeftSide ratio={ratio} rotateBy={rotateBy} color={color}></LeftSide>
        </>
        <PlayerText color={color}>{`${percentage * 100}%`}</PlayerText>
      </Player>
    </PlayerContainer>
  );
}

ProgressCircle.displayName = "ProgressCircle";

// https://esstudio.site/2018/07/08/pure-css-progress-circles.html
const PlayerContainer = styled.div`
  display: flex;
  padding: 5px;
`;
const Player = styled.div`
  width: 100px;
  height: 100px;
  background: transparent;
  position: relative;
  border-radius: 50%;
  overflow: visible;

  &:hover {
    opacity: 0.8;
  }
`;

const PlayerText = styled.div<{ color?: string }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme, color }) => (color ? theme.colours[color] : "#4beade")};
  font-weight: 700;
  font-size: 20px;
`;

const LeftSide = styled.div<{
  ratio: number;
  rotateBy: number;
  color?: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  border: 10px solid #fff;
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: ${({ rotateBy }) => `rotate(${rotateBy}deg)`};

  ${({ theme, ratio, rotateBy, color }) =>
    ratio > 0.5
      ? css`
          border-color: transparent;
          border-left-color: ${color ? theme.colours[color] : "#4beade"};
          border-bottom-color: ${color ? theme.colours[color] : "#4beade"};
        `
      : ""};
`;

const RightSide = styled.div<{ color?: string }>`
  transform: rotate(45deg);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  border: 10px solid
    ${({ theme, color }) => (color ? theme.colours[color] : "#4beade")};
  border-left-color: #fff;
  border-bottom-color: #fff;
`;
