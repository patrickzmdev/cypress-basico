describe("table", () => {
    beforeEach(() => {
        cy.goHome();
        cy.goLogin();

        cy.goTo("/tables", "Tables");
    });

    it("deve validar a linha do github", () => {

        cy.contains('table tbody tr', '1004').should('be.visible').and('contain', 'Github');

    });

    it("deve remover uma rede social", () => {
        const name = 'Facebook';

        cy.contains('table tbody tr', '1002').find('.remove-item').click();

        cy.contains('button','Excluir').click();

        cy.get('table tbody').should('not.contain', name);
    });

    it("deve permanecer na tabela ao desistir da exclusao", () => {
        const name = 'Youtube';

        cy.contains('table tbody tr', '1005').find('.remove-item').click();

        cy.contains('button','Cancelar').click();

        cy.get('table tbody').should('contain', name);
    });

    it.only("deve validar o link que abre o instagram em outra aba", () => {
        const id = 'instapapito';

        cy.contains('table tbody tr', id)
            .contains('a', 'Visitar')
            .should('have.attr', 'href', `https://instagram.com/${id}`)
            .and('have.attr', 'target', '_blank'); //verificando se abre em outra aba
    });
});