describe("renders the home page", () => {
  it("renders the picture plus default", () => {
    cy.visit("/inspire");
    cy.getBySel("canvas-picture").should("exist");
    cy.findByText(/you can do this/i).should("exist");
  });
  it("Daily Quote button working", () => {
    cy.intercept(
      "https://healthruwords.p.rapidapi.com/v1/quotes/?t=Mindfulness&maxR=1&size=large",
      { fixture: "inspireQuote.json" }
    ).as("quote");
    // if (cy.findByText(/get your daily quote/i).should("exist")) {
    //   cy.findByText(/get your daily quote/i).click();

    //   cy.findByText(/a whole new world/i).should("exist");
    // }
  });
});
