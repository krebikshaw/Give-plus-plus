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
        id_card_no: data.id_card_no,
        email: data.email,
        address: data.address,
        birthday: data.birthday,
        socialmedia_id: data.socialmedia_id,
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

const uploadBannerAPI = (data) => {
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
    .then((bannerUrl) => {
      const token = localStorage.getItem('token');
      return getMeAPI().then((res) => {
        return fetch(`${BASE_URL}/users/me`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            banner_url: bannerUrl,
          }),
        }).then((res) => res.json());
      });
    });
};

const uploadQRCodeAPI = (data) => {
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
    .then((data) => data.data.link);
};

const getUserByIdAPI = (id) => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/users/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const updatePermissionAPI = (data) => {
  const token = localStorage.getItem('token');
  return getUserByIdAPI(data.id).then((res) => {
    return fetch(`${BASE_URL}/users/${data.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        status: data.status,
      }),
    }).then((res) => res.json());
  });
};

const updateUserInfoAPI = (id, data) => {
  const token = localStorage.getItem('token');
  return getMeAPI().then((res) => {
    return fetch(`${BASE_URL}/users/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  });
};

const applyForVendorAPI = () => {
  const token = localStorage.getItem('token');
  return getMeAPI().then((res) => {
    return fetch(`${BASE_URL}/users/apply`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  });
};

const updateAnnouncementAPI = (data) => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/users/announcement`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      announcement: data,
    }),
  }).then((res) => res.json());
};

export {
  getMeAPI,
  updateUserAPI,
  updatePasswordAPI,
  uploadAvatarAPI,
  uploadQRCodeAPI,
  uploadBannerAPI,
  updatePermissionAPI,
  getUserByIdAPI,
  updateUserInfoAPI,
  applyForVendorAPI,
  updateAnnouncementAPI,
};
