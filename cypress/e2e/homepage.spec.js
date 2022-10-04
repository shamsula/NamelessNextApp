describe("renders the home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("renders home content correctly", () => {
    cy.findByText(/Home/i).should("exist");
    cy.getBySel("body-home").should("exist");
  });
  it("navigate to bio", () => {
    // cy.get('[href="/bio"] > .Button__StyledButton-sc-1906yzf-0').click();
    cy.findByText(/auto-biography/i).click();
    cy.getBySel("bio-text");
  });
  it("navigate to portfolio", () => {
    cy.findByText(/portfolio/i).click();
    cy.getBySel("image-container").should("exist");
  });
});
