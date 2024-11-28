describe('textarea', () => {

    beforeEach(() => {
        cy.goHome();
        cy.goLogin();
      });

    it('deve preencher o campo de area de texto', () => {

        cy.goTo("/textarea", "Textarea");

        cy.get('textarea[name="message"]').should('be.visible').type('testando textarea');
    });  

});
