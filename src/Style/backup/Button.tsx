import React from "react";
import styled, { css } from "styled-components/macro";
import { useSpring, animated, interpolate } from "react-spring";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

type Props = {
  label: string;
  colour?: string;
};
export function Button({ label, colour }: Props): JSX.Element {
  const [width, height] = useWindowSize();
  const onlyWidth = useWindowWidth();
  const onlyHeight = useWindowHeight();

  const isButtonAnimated: boolean = width >= 768;

  console.log("size", width, height, onlyWidth, onlyHeight);
  const [props, set] = useSpring(() => ({
    xys: [27, 1, 1],
    config: { mass: 5, tension: 350, friction: 140 },
  }));

  return (
    <>
      {isButtonAnimated === true ? (
        <StyledAnimatedButton
          className="card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [27, 1, 1] })}
          // style={{ transform: props.xys.interpolate(trans)}}
          style={{
            // @ts-ignore
            transform: interpolate(props.xys, (x, y, s) => {
              return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
            }),
          }}
          colour={colour}
        >
          {label}
        </StyledAnimatedButton>
      ) : (
        <StyledButton className="card" colour={colour}>
          {label}
        </StyledButton>
      )}
    </>
  );
}

const BaseButton = css<{ colour?: string }>`
  width: 100%;
  max-width: 500px;
  text-decoration: none;
  border: none;
  background-color: ${({ theme, colour }) =>
    colour ? colour : theme.colours.orangePeel};
  background: radial-gradient(
    circle closest-side,
    ${({ theme, colour }) => (colour ? colour : theme.colours.orangePeel)},
    blue
  );
  color: ${({ theme }) => theme.colours.honedew};
  padding: 12px 20px;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: ${({ theme, colour }) =>
      colour ? colour : theme.colours.lightOrangePeel};
  }
`;

const StyledAnimatedButton = styled(animated.button)`
  ${BaseButton}
  &:hover {
    box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
  }
`;

const StyledButton = styled.button<{ colour?: string }>`
  ${BaseButton}
`;
const Label = styled.label`
  font-weight: 800;
  text-decoration: none;
`;
