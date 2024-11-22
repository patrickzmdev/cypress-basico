describe("upload", () => {
    beforeEach(() => {
        cy.goHome();
        cy.goLogin();

        cy.goTo("/upload", "Upload");
    });

    it("deve anexar um doc", () => {
        cy.get('input[name="doc"]')
            .selectFile("cypress/fixtures/doc.pdf")
            .then((element) => {
                expect(element[0].files[0].name).to.equal("doc.pdf");
            });
    });

    it("deve anexar uma imagem", () => {
        cy.get('input[name="photo"]')
            .selectFile("cypress/fixtures/liga.jpg")
            .then((element) => {
                expect(element[0].files[0].name).to.equal("liga.jpg");
            }
        );

        cy.get('#image-upload')
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src') //have attr serve para verificar se possui o atributo nesse caso se a imagem possui src
            .and('include', 'blob'); //verifica se contem blob que no caso serve para verificar a pré visualizacao da imagem 
    });
});
