import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

type Props = {};
export function StyledBack(props: Props): JSX.Element {
  return (
    <StyledLink to="/" data-test="styled-back">
      <h3>Back</h3>
    </StyledLink>
  );
}

export default StyledBack;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: ${({ theme }) => theme.colours.orangePeel};
  margin-bottom: 12px;
  text-shadow: ${({ theme }) => theme.textShadow[0]};
`;
