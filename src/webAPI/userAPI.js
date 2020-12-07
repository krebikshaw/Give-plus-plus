import { BASE_URL } from '../constants/unit';

const getMeAPI = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const updateUserAPI = (data) => {
  const token = localStorage.getItem('token');
  return getMeAPI().then((res) => {
    let id = res.data.userId;
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nickname: data.nickname,
        email: data.email,
        address: data.address,
        birthday: data.birthday,
      }),
    }).then((res) => res.json());
  });
};

export { getMeAPI, updateUserAPI };
