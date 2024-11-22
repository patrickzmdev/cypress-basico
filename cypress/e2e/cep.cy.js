describe("CEP", () => {
    beforeEach(() => {
        cy.goHome();
        cy.goLogin();
        cy.goTo("/cep", "CEP (API dos Correios)");
    });

    it('deve cadastrar um endereco usando api dos correios', () => {

        const address = {
            cep: '88708545',
            logradouro: 'Rua Lucia Kulakowski Saldanha',
            localidade: 'Tubarão',
            uf: 'SC'
        }

        cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, {
            statusCode: 200,
            body: address            
        }).as('getCep')

        cy.get('input[name="cep"]').type('88708545');
        cy.contains('button', 'Cadastrar').click();

        cy.wait('@getCep');

        cy.get('input[name="logradouro"]', {timeout: 10000})
            .should('have.value', address.logradouro);

        cy.get('input[name="cidade"]')
            .should('have.value', address.localidade);
            
        cy.get('input[name="estado"]')
            .should('have.value', address.uf);    
    });


});