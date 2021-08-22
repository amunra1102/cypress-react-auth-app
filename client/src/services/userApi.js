import { getHttp } from '../helpers/http';

export const getUsers = () => getHttp('/users');
