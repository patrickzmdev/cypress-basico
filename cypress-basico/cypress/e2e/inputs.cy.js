describe('input fields', () => {

    beforeEach(() => {
        cy.goHome();
        cy.goLogin();
      });

    it('Deve preencher o campo de texto', () => {

        cy.goTo('/input-fields','Input Fields' );

        cy.get('input[name=fullname]').type('Patrick'); //por nome
        //cy.get('input[placeholder="John Doe"]').type('Patrick'); //por placeholder

        cy.get('#email').type('papito@cyskills.com.br');// por id

        cy.get('input[placeholder= "12345').type(20);

        cy.get('input[name=date]').type('2022-10-10');
    });
});
