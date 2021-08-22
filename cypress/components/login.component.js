export const usernameField = () => cy.get('[placeholder="Enter username"]');
export const passwordField = () => cy.get('[placeholder="Enter password"]');
export const loginButton = () => cy.get('[data-cy=login_button]');

// actions
export const performLogin = (username, password) => {
  usernameField().type(username);
  passwordField().type(password);
  loginButton().click();
};
