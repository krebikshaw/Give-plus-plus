/* eslint-disable no-undef */

describe("login page test", () => {
  it("login form validation", () => {
    cy.visit(Cypress.env("login_url"));
    cy.get("#login_button").click();
    cy.contains("使用者帳號或密碼錯誤").should("be.visible");
  });

  it("login as test user", () => {
    cy.visit(Cypress.env("login_url"));
    cy.get(".username_input").type(Cypress.env("test_username"));
    cy.get(".password_input").type(Cypress.env("test_password"));
    cy.get("#login_button").click();
    cy.contains("登出").should("be.visible");
  });

  it("go to register page", () => {
    cy.visit(Cypress.env("login_url"));
    cy.get(".register_link").click();
    cy.contains("立即註冊 Give++ 帳號").should("be.visible");
  });
});
