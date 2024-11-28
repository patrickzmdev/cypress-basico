describe("utilizando selects", () => {

    beforeEach(() => {
        cy.goHome();
        cy.goLogin();
    
        cy.goTo("/select", "Select");
    });

    it("deve selecionar o cypress", () => {
        cy.contains('label', "Selecione um Framework de Testes").parent().find('select').select('Cypress');
    });

    it("deve escolher as linguagens que usam nodejs", () => {

        const langs = ["JavaScript", "TypeScript"];

        cy.get('input[placeholder^="Linguagens de programação"]').click(); //^= serve para o cypress conseguir buscar um valor que comece com o testo sugerido

        langs.forEach(lang => {
            cy.get('.option-item').contains(lang).click();
        });
    });    
        
    it("deve escolher a linguagem java", () => {

        const langs = ["TypeScript", "Java", "Python"];

        cy.get('input[placeholder^="Linguagens de programação"]').click();

        langs.forEach(lang => {
            cy.contains('.option-item', new RegExp("^"+ lang + "$")).click(); //regex para selecionar a opcao correta 
        });

        cy.get('.language-item').should('have.length', langs.length);

    });
});