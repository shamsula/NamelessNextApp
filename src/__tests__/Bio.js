import React from "react";
import Bio from "../Bio/Bio";
import { render, fireEvent } from "@testing-library/react";
import { TestWrapper } from "../utils/TestWrapper";

test("bio front-side renders correctly", () => {
  const { getByText } = render(<Bio />, { wrapper: TestWrapper });
  const backButton = getByText(/back/i);
  fireEvent.click(backButton);

  const welcomeDiv = getByText(/software developer/i);
  expect(welcomeDiv).toBeVisible();
});

test("test bio flip-side render", () => {
  const { getByText } = render(<Bio isFlipped={true} />, {
    wrapper: TestWrapper,
  });
  const flipDiv = getByText(/flip side/i);
  expect(flipDiv).toBeVisible();
});
