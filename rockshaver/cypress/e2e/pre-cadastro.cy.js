import preRegPage from "../support/pages/pre-reg.page";

describe("pre-cadastro", () => {
  it("deve realizar o pre-cadastro do cliente", () => {
    preRegPage.go();
    preRegPage.fillForm("Patrick Zanela", "patrick@gmail.com.br");
    preRegPage.submit();
    preRegPage.verifyPreReg("Patrick", "patrick@gmail.com.br");
  });

  it("campos obrigatorios", () => {
    preRegPage.go();

    preRegPage.submit();

    preRegPage.alertHave("Nome Completo", "O campo nome é obrigatório.");

    preRegPage.alertHave("E-mail", "O campo e-mail é obrigatório.");
  });

  it("inserindo somente o primeiro nome no cadastro", () => {
    preRegPage.go();

    preRegPage.fillForm("Patrick", "patrick@gmail.com.br");

    preRegPage.submit();

    preRegPage.alertHave("Nome Completo", "Informe seu nome completo");
  });

  it("inserindo email invalido no cadastro", () => {
    preRegPage.go();

    preRegPage.fillForm("Patrick Zanela", "patrickgmail.com.br");

    preRegPage.submit();

    preRegPage.alertHave("E-mail", "O e-mail inserido é inválido.");
  });
});
