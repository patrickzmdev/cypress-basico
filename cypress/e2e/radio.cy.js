describe('radio buttons', () => {

    beforeEach(() => {
        cy.goHome();
        cy.goLogin();
    
        cy.goTo("/radio", "Radio Buttons");
    });

    it("deve marcar cypress", () => {
        cy.contains('label','Cypress').click();
    });


});