import { getAuthToken } from '../utils';
import { BASE_URL } from '../constants/unit';

export const registerAPI = (user) => {
  const { username, password, email } = user;
  return fetch(`${BASE_URL}/users/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      email,
    }),
  }).then((res) => res.json());
};

export const loginAPI = (user) => {
  const { username, password } = user;
  return fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const getMeAPI = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
