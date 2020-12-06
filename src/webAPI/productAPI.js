import { BASE_URL } from '../constants/unit';

const getCategoriesAPI = () => {
  return fetch(`${BASE_URL}/products/categories`).then((res) => res.json());
};

export { getCategoriesAPI };
