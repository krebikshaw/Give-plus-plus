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

export { getUnCheckProductsAPI, updateProductStatusAPI };
