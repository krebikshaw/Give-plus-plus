import { BASE_URL } from '../constants/unit';

const getUnCheckProductsAPI = (page) => {
  const token = localStorage.getItem('token');
  const currentPage = page || 1;
  return fetch(`${BASE_URL}/products?_page=${currentPage}&_status=checking`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const getUsersAPI = (params) => {
  const token = localStorage.getItem('token');
  const queryString = `_page=${params.page ? params.page : 1}&_limit=${
    params.limit ? params.limit : 10
  }&_sort=${params.sort ? params.sort : ''}&_status=${
    params.status ? params.status : ''
  }&_order=${params.order ? params.order : ''}`;
  return fetch(`${BASE_URL}/users?${queryString}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const searchUsersAPI = (params) => {
  const token = localStorage.getItem('token');
  const queryString = `_keyword=${params.keyword}&_page=${
    params.page ? params.page : 1
  }&_limit=${params.limit ? params.limit : 10}&_sort=${
    params.sort ? params.sort : ''
  }&_status=${params.status ? params.status : ''}&_order=${
    params.order ? params.order : ''
  }`;
  return fetch(`${BASE_URL}/users/search?${queryString}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const updateProductStatusAPI = (id, status) => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/manages/check-products/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      status,
    }),
  }).then((res) => res.json());
};

const getProductsAPI = (params) => {
  const token = localStorage.getItem('token');
  const queryString = `_offset=${params.offset ? params.offset : 0}&_limit=${
    params.limit ? params.limit : ''
  }&_page=${params.page}&_sort=${params.sort ? params.sort : ''}&_status=${
    params.status ? params.status : ''
  }&_order=${params.order ? params.order : ''}`;
  return fetch(`${BASE_URL}/products/admin?${queryString}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const searchProductsAPI = (params) => {
  const token = localStorage.getItem('token');
  const queryString = `_keyword=${params.keyword}&_page=${
    params.page ? params.page : 1
  }&_limit=${params.limit ? params.limit : 10}&_sort=${
    params.sort ? params.sort : ''
  }&_status=${params.status ? params.status : ''}&_order=${
    params.order ? params.order : ''
  }`;
  return fetch(`${BASE_URL}/products/admin/search?${queryString}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const getMailsAPI = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/manages/mails`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export {
  getUnCheckProductsAPI,
  updateProductStatusAPI,
  getUsersAPI,
  searchUsersAPI,
  getProductsAPI,
  searchProductsAPI,
  getMailsAPI,
};
