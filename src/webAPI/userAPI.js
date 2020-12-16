import { BASE_URL } from "../constants/unit";

const getVendorInfoAPI = (id) => {
  return fetch(`${BASE_URL}/users/vendor/${id}`).then((res) => res.json());
};

export { getVendorInfoAPI };
