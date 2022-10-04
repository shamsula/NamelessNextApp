describe("renders biography component", () => {
  it("renders corretly", () => {
    cy.visit("/bio");
    cy.getBySel("header-page").should("have.text", "Biography");
  });
  it("test the Flip Container function", () => {
    cy.visit("/bio");
    cy.getBySel("bio-text").click().wait(500).click().wait(500).click();
    cy.getBySel("flip-side").should("have.text", "Flip Side");
  });
  it("faster consecutive clicks", () => {
    cy.visit("/bio");
    cy.getBySel("bio-text")
      .click()
      .wait(150)
      .click()
      .wait(150)
      .click()
      .wait(150)
      .click();
    cy.getBySel("front-side").should("have.text", "Intro");
  });
  it("Click back button to return to homepage", () => {
    cy.visit("/bio");
    cy.getBySel("styled-back").click();
    cy.getBySel("header-page").should("have.text", "Home");
  });
});
