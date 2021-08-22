export const visitAPage = path => {
  cy.visit(`/${path}`);
};

export const checkUrl = path => cy.url().should('contain', `/${path}`);

export const loginWithApi = (username, password) => {
  cy.request({
    method: 'GET',
    url: '/user_token',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(`${username}:${password}`)
    }
  }).then(response => {
    const { token, username, role } = response.body;
    localStorage.setItem('userToken', token);
    localStorage.setItem('username', username);
    localStorage.setItem('role', role);
  });
};
