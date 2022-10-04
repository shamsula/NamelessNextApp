import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";
import { theme } from "../Style/theme";

export function TestWrapper(props) {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">{props.children}</BrowserRouter>
    </ThemeProvider>
  );
}

TestWrapper.displayName = "TestWrapper";
