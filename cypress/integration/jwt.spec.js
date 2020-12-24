/* eslint-disable no-undef */

let token;

before(function fetchUser() {
  cy.request("POST", Cypress.env("apiUrl") + "/users/login", {
    username: Cypress.env("test_username"),
    password: Cypress.env("test_password"),
  })
    .its("body")
    .then((res) => {
      token = res.token;
    });
});

beforeEach(function setUser() {
  cy.visit("/", {
    onBeforeLoad(win) {
      win.localStorage.setItem("user", JSON.stringify(token));
    },
  });
});

describe("JWT", () => {
  it("get user info", () => {
    cy.request({
      url: Cypress.env("apiUrl") + "/users/me",
      auth: {
        bearer: token,
      },
    })
      .its("body.data.username")
      .should("deep.equal", "seller01");
  });
});
