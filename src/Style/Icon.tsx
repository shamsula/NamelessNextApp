import React from "react";
import styled from "styled-components/macro";
import MaterialIcon from "@material-ui/core/Icon";

type Props = {
  colour?: string;
  icon: string;
};
export function Icon({ colour, icon }: Props): JSX.Element {
  return (
    <Container>
      <StyledIcon>{icon}</StyledIcon>
    </Container>
  );
}

export default Icon;

const StyledIcon = styled(MaterialIcon)<{ colour?: string }>`
  color: ${({ theme, colour }) =>
    colour ? theme.colours[colour] : theme.colours.desertSand};
`;
const Container = styled.div`
  display: flex;
`;
