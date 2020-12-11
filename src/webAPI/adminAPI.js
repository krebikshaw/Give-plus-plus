import { BASE_URL } from '../constants/unit';

const getUnExamineProductsAPI = (page) => {
  const token = localStorage.getItem('token');
  const currentPage = page || 1;
  return fetch(`${BASE_URL}/products?_page=${currentPage}&_status=checking`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export { getUnExamineProductsAPI };
