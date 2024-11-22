describe('tags', () => {

    beforeEach(() => {
        cy.goHome();
        cy.goLogin();

        cy.goTo("/tags", "Tags");
    });

    it("deve adicionar algumas tags", () => {

        const tags = ['Cypress', 'Javascript', 'Typescript'];

        tags.forEach(tag => {
            cy.get('.new-tag')
                .type(`${tag}{enter}`)
                .should('have.value', ''); //garante que pode digitar mais tags
            cy.wait(500); // simulando tempo de digitar de uma pessoa 
        });

        tags.forEach(tag => {
            cy.get('.tag-input')
            .should('contain.text', tag);
        });
    });
});