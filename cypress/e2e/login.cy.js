describe('login', () => {

  beforeEach(() => {
    cy.goHome();
  });

  it('Deve logar com sucesso', () => {

   cy.login('papito@cyskills.com.br', 'showtime');

    cy.userLoggedIn();
  });

  it('nao deve logar com senha invalida', () => {

    cy.login('papito@cyskills.com.br', '123456');
    
    cy.noticeHaves('E-mail ou senha incorretos. Por favor, tente novamente!' )
  });

  it('nao deve logar com email nao cadastrado', () => {

    cy.login('p@cyskills.com.br', 'showtime');

    cy.noticeHaves('E-mail ou senha incorretos. Por favor, tente novamente!' )
  });

  it('nao deve logar com email incorreto', () => {

    cy.login('www.com.br', 'showtime');

    cy.noticeHaves('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!');
  });

  it('nao deve logar sem o email', () => {

    cy.login('', 'showtime');

    cy.noticeHaves('Parece que você esqueceu de informar seu e-mail.');
  });

  it('nao deve logar sem a senha', () => {

    cy.login('papito@teste.com', '');

    cy.noticeHaves('Por favor, digite sua senha para continuar.');
  });

  it('nao deve logar sem o email e a senha', () => {

    cy.login('', '');

    cy.noticeHaves('Parece que você esqueceu de informar seu e-mail.');
  });


  
})

