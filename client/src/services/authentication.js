import { validateUser } from '../helpers/http';

export const getAuthState = () => ({
  userToken: localStorage.getItem('userToken'),
  username: localStorage.getItem('username'),
  role: localStorage.getItem('role')
});

export const login = (username, password) =>
  validateUser(username, password).then(user => {
    localStorage.setItem('userToken', user.token);
    localStorage.setItem('username', user.username);
    localStorage.setItem('role', user.role);
    return {
      userToken: user.token,
      username: user.username,
      role: user.role
    };
  });

export const logout = () => new Promise((resolve) => {
  localStorage.removeItem('userToken');
  localStorage.removeItem('username');
  localStorage.removeItem('role');
  resolve(true);
});
