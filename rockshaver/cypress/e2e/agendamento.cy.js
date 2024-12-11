import calendario from "../fixtures/calendario.json";
import agendamentos from "../fixtures/agendamentos.json";

describe("agendamento", () => {

  it("deve realizar um novo agendamento", () => {
    const agendamento = agendamentos.sucesso;

    cy.dropCollection("agendamentos", { failSilently: "true" }).then(
      (result) => {
        cy.log(result);
      }
    );

    cy.intercept("GET", "http://localhost:3333/api/calendario", {
      statusCode: 200,
      body: calendario,
    }).as("getCalendario");

    cy.iniciarPreCadastro(agendamento.usuario);
    cy.verificarPreCadastro(agendamento.usuario);
    cy.iniciarAgendamento();
    cy.escolherProfissional(agendamento.profissional.nome);
    cy.selecionarServico(agendamento.servico.descricao);
    cy.escolherDiaAgendamento(agendamento.dia);
    cy.escolherHoraAgendamento(agendamento.hora);
    cy.finalizarAgendamento();
    cy.contains("h3","Tudo certo por aqui! Seu horário está confirmado.").should("be.visible");
  });

  it("deve mostrar o slot ocupado", () => {
    const agendamento = agendamentos.duplicado;
    cy.dropCollection("agendamentos", { failSilently: "true" }).then(
      (result) => {
        cy.log(result);
      }
    );
    cy.agendamentoApi(agendamento);

    cy.intercept("GET", "http://localhost:3333/api/calendario", {
      statusCode: 200,
      body: calendario,
    }).as("getCalendario");

    cy.iniciarPreCadastro(agendamento.usuario);
    cy.verificarPreCadastro(agendamento.usuario);
    cy.iniciarAgendamento();
    cy.escolherProfissional(agendamento.profissional.nome);
    cy.selecionarServico(agendamento.servico.descricao);
    cy.escolherDiaAgendamento(agendamento.dia);
    cy.get(`[slot="${agendamento.hora} - ocupado"]`).should("be.visible").find('svg').should("be.visible").and('have.css','color','rgb(255, 255, 255)');
  });
});
