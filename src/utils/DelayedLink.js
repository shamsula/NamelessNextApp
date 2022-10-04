import React, { useState } from "react";
import styled from "styled-components/macro";

import { Link, Redirect } from "react-router-dom";
import breakpoints from "../Style/Common/breakpoints";
import { useWindowSize } from "@react-hook/window-size";
import breakpoint from "../Style/Common/breakpoints";

// class DelayedLink extends Component {
function DelayedLink(props) {
  const [width, height] = useWindowSize();
  const isAnimationEnabled = width >= breakpoint.size.md;

  const [state, setState] = useState({ delay: 500, t: false });
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(true);
    if (isAnimationEnabled) {
      setTimeout(() => setState({ t: true }), state.delay);
    } else {
      setState({ t: true });
    }
  };

  return state.t ? (
    <Redirect to={props.to} />
  ) : (
    <StyledLink onClick={handleClick} to={props.to} data-active={clicked}>
      {props.children}
    </StyledLink>
  );
}

export default DelayedLink;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  height: 40px;
  margin-bottom: 15px;

  @media only screen and (min-width: ${breakpoints.size.md}px) {
    height: 80px;
    font-size: 24px;
    transition: transform 5s ease-out;

    &[data-active="true"] {
      transform: scale(200);
    }
  }
`;
