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

const updatePasswordAPI = (data) => {
  const token = localStorage.getItem('token');
  return getMeAPI().then((res) => {
    return fetch(`${BASE_URL}/users/password`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
        confirmPassword: data.confirmPassword,
      }),
    }).then((res) => res.json());
  });
};

const uploadAvatarAPI = (data) => {
  const formData = new FormData();
  formData.append('image', data);
  return fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: 'Client-ID 4610c48a0c55b2a',
    },
    body: formData,
  })
    .then((data) => data.json())
    .then((data) => data.data.link)
    .then((avatarUrl) => {
      const token = localStorage.getItem('token');
      return getMeAPI().then((res) => {
        return fetch(`${BASE_URL}/users/me`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            avatar_url: avatarUrl,
          }),
        }).then((res) => res.json());
      });
    });
};

export { getMeAPI, updateUserAPI, updatePasswordAPI, uploadAvatarAPI };
