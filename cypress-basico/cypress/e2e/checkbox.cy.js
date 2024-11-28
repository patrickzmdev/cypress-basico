describe("checkbox", () => {
  beforeEach(() => {
    cy.goHome();
    cy.goLogin();

    cy.goTo("/checkbox", "Checkbox");
  });

  it("deve marcar as linguagens que usam nodejs", () => {
    cy.get('label[for="javascript"]').click();
    //cy.get('input[value=1]').parent().click();// usado parent para conseguir clicar mesmo que o elemento esteja escondido

    cy.get('label[for="typescript"]').click();
  });

  it("deve marcar todas as opcoes", () => {
    const langs = ["javascript", "python", "rust", "go", "typescript"];

    langs.forEach((lang) => {
      cy.get(`label[for="${lang}"]`).click();
    });
  });
});
