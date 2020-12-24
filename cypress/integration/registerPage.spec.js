/* eslint-disable no-undef */

describe("register page test", () => {
  it("register with no username, password and email", () => {
    cy.visit(Cypress.env("register_url"));
    cy.get("#register_button").click();
    cy.contains("請輸入有效的帳號").should("be.visible");
    cy.contains("請輸入有效的密碼").should("be.visible");
    cy.contains("請輸入有效的信箱").should("be.visible");
  });

  it("register with no username and password", () => {
    cy.visit(Cypress.env("register_url"));
    cy.get(".email_input").type("test@gmail.com");
    cy.get("#register_button").click();
    cy.contains("請輸入有效的帳號").should("be.visible");
    cy.contains("請輸入有效的密碼").should("be.visible");
  });

  it("register with no password and no email", () => {
    cy.visit(Cypress.env("register_url"));
    cy.get(".username_input").type(Cypress.env("test_password"));
    cy.get("#register_button").click();
    cy.contains("請輸入有效的密碼").should("be.visible");
    cy.contains("請輸入有效的信箱").should("be.visible");
  });

  it("register with no username and no email", () => {
    cy.visit(Cypress.env("register_url"));
    cy.get(".password_input").type(Cypress.env("test_password"));
    cy.get("#register_button").click();
    cy.contains("請輸入有效的帳號").should("be.visible");
    cy.contains("請輸入有效的信箱").should("be.visible");
  });

  it("register with no username", () => {
    cy.visit(Cypress.env("register_url"));
    cy.get(".password_input").type(Cypress.env("test_password"));
    cy.get(".email_input").type("test@gmail.com");
    cy.get("#register_button").click();
    cy.contains("請輸入有效的帳號").should("be.visible");
  });

  it("register with no password", () => {
    cy.visit("/register");
    cy.get(".username_input").type("123456");
    cy.get(".email_input").type("test@gmail.com");
    cy.get("#register_button").click();
    cy.contains("請輸入有效的密碼").should("be.visible");
  });

  it("register with no email", () => {
    cy.visit("/register");
    cy.get("#register_button").click();
    cy.get(".username_input").type("123456");
    cy.get(".password_input").type("123456");
    cy.contains("請輸入有效的信箱").should("be.visible");
  });

  it("register with duplicate username", () => {
    cy.visit("/register");
    cy.get(".username_input").type("Seller01");
    cy.get(".password_input").type("123456");
    cy.get(".email_input").type("test@gmail.com");
    cy.get("#register_button").click();
    cy.contains("使用者帳號重複，請使用別的帳號").should("be.visible");
  });

  it("register with valid data", () => {
    cy.visit("/register");
    let username = "test" + Math.floor(Math.random() * 10000);
    cy.get(".username_input").type(username);
    cy.get(".password_input").type("123456");
    cy.get(".email_input").type("test@gmail.com");
    cy.get("#register_button").click();
    cy.contains("登出").should("be.visible");
  });

  it("go to rules page", () => {
    cy.visit("/register");
    cy.get(".rules_link").should("have.attr", "target", "_blank");
    cy.get(".rules_link").invoke("removeAttr", "target").click();
    cy.url().should("include", "rules");
  });
});
