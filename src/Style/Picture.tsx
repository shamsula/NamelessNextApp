import React, { useMemo } from "react";
import styled from "styled-components/macro";
import { useSpring, animated, interpolate } from "react-spring";

type Props = {
  // name?: string;
  url: string;
  hasMargin: boolean;
  isAnimationEnabled: boolean;
  isThumbs?: boolean;
};
const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 150,
  (x - window.innerWidth / 2) / 150,
  1.1,
];

export function Picture({
  url,
  hasMargin = true,
  isAnimationEnabled = false,
  isThumbs = false,
}: Props): JSX.Element {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const pictureCanvasStyle = useMemo(
    () =>
      isAnimationEnabled
        ? {
            // @ts-ignore
            transform: interpolate(props.xys, (x, y, s) => {
              return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
            }),
          }
        : {},
    [isAnimationEnabled]
  );

  return (
    <PictureCanvas
      onMouseMove={({ clientX: x, clientY: y }) =>
        isAnimationEnabled && set({ xys: calc(x, y) })
      }
      onMouseLeave={() => isAnimationEnabled && set({ xys: [0, 0, 1] })}
      url={url}
      margin={hasMargin && !isThumbs ? "5rem" : "0"}
      style={pictureCanvasStyle}
      data-test="canvas-picture"
      thumbs={isThumbs}
      animation={isAnimationEnabled}
    />
  );
}

export default Picture;

const PictureCanvas = styled(animated.div)<{
  url: string;
  margin: string;
  thumbs?: boolean;
  animation?: boolean;
}>`
  //   margin: 1.2rem 2rem;

  background: ${({ url }) => `url(${url}), black`};
  background-size: ${({ animation }) => (animation ? "100% auto" : "100%")};
  // background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: ${({ thumbs }) => (thumbs ? " 100px" : "500px")};
  border-radius: ${({ thumbs }) => (thumbs ? " 50px" : "0")};

  margin-bottom: 15px;

  &:hover {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }

  ${({ theme, margin }) => `${theme.media.tablet} {
    margin: ${margin};
    }
  `}
`;
