describe("Example test", () => {
  before(() => {
    cy.signIn();
  });

  after(() => {
    cy.clearLocalStorageSnapshot();
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("should be logged in", () => {
    cy.visit("/");
    cy.get(".App-logo").should("be.visible");

    it("Should talk about react", () => {
      cy.visit("/")
      cy.contains("React")
    })
  });
});
