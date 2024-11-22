describe('date picker', () => {
    beforeEach(() => {
        cy.goHome();
        cy.login("papito@cyskills.com.br", "showtime");
        cy.userLoggedIn();

        cy.goTo("/date-picker", "Date Picker");
    });

    it("deve adicionar minha data de aniversário", () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]').click();

        cy.get('[aria-label="Month"]').select('Abril');
        cy.get('[aria-label="Year"]').type('1993');
        cy.get('span[aria-label="Abril 29, 1993"]').click();

    });
});