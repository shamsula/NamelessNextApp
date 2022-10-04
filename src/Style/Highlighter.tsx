import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { useSpring, animated } from "react-spring";

type Props = {
  children: React.ReactNode;
};

const shine = keyframes`
from {
    background-position: 0% center;
  }
  50%{
      tranform: scale(1.2);
      overflow: none;
  }
to {
    background-position: 200% center;
  }
`;
function Highlighter(props: Props): JSX.Element {
  const borderProps = useSpring({
    opacity: 1,
    from: {
      opacity: 0.5,
    },
    config: {
      duration: 1500,
    },
  });

  return (
    <>
      {React.Children.map(props.children, (child) => (
        <Border style={borderProps}>
          <InnerBorder>{child}</InnerBorder>
        </Border>
      ))}
    </>
  );
}

export default Highlighter;

const Border = styled(animated.div)`
  padding: 5px 5px;
  border-radius: 20px;
  margin: 20px 5px;
  &:hover {
    //border: none;
    //     border-left: solid 1px transparent;
    // border-right: solid 1px transparent;
    // background: linear-gradient(to right, #fff 20%, #fff 40%, #ECD08C 50%, #ECD08C 55%, #fff 70%, #fff 100%);

    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colours.platinum} 20%,
      ${({ theme }) => theme.colours.platinum} 40%,
      ${({ theme }) => theme.colours.mountainMeadow} 50%,
      ${({ theme }) => theme.colours.mountainMeadow} 55%,
      ${({ theme }) => theme.colours.platinum} 70%,
      ${({ theme }) => theme.colours.platinum} 100%
    );
    background: -moz-linear-gradient(
      309deg,
      rgba(5, 102, 141, 1) 20%,
      rgba(5, 102, 141, 1) 40%,
      rgba(2, 128, 144, 1) 50%,
      rgba(2, 128, 144, 1) 55%,
      rgba(2, 195, 154, 1) 70%,
      rgba(2, 195, 154, 1) 100%
    );

    background-size: 200% auto;

    animation: ${shine} 1.5s linear infinite;
    animation-iteration-count: 1;
    animation-direction: reverse;

    //   margin-left: -25px;
    //   margin-right: -25px;
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
  }
`;

const InnerBorder = styled.div`
  border-radius: 50%;
  padding: 12px 10px;
  marging: 10px;
  // background: inherit;
`;
