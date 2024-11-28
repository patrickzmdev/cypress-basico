describe('iframe', () => {
    beforeEach(() => {
        cy.goHome();
        cy.goLogin();

        cy.goTo("/iframe", "IFrame");
    });

    it('deve preencher o nome em uma pagina que contem iframe', () => {

        const today = new Date().toISOString().split('T')[0];

        cy.get('#iframe-inputs')
        .wait(1000)
        .then(($iframe) => {
          const $body = $iframe.contents().find('body')

          cy.wrap($body).find('#fullname').type('Patrick');

          cy.wrap($body).find('#email').type('papito@cyskills.com.br');

          cy.wrap($body).find('input[name="number"]').type(10);

          cy.wrap($body).find('#date').type(today);

        });

    });
});