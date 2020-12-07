import { BASE_URL } from "../constants/unit";

const getProductsAPI = () => {
  return fetch(`${BASE_URL}/products`).then((res) => res.json());
};

const getProductCategoriesAPI = () => {
  return fetch(`${BASE_URL}/products/categories`).then((res) => res.json());
};

const getProductsFromCategoryAPI = (id) => {
  return fetch(`${BASE_URL}/products/categories/${id}`).then((res) =>
    res.json()
  );
};

const getProductsFromVendorAPI = (id) => {
  return fetch(`${BASE_URL}/products/vendor/${id}`).then((res) => res.json());
};

const searchProductAPI = (keyword) => {
  return fetch(`${BASE_URL}/products/search?_keyword=${keyword}`).then((res) =>
    res.json()
  );
};

const getProductAPI = (id) => {
  return fetch(`${BASE_URL}/products/${id}`).then((res) => res.json());
};

const postProductAPI = ({
  ProductCategoryId,
  name,
  picture_url,
  info,
  price,
  quantity,
  delivery, // 出貨方式  0:面交、1:郵寄
  delivery_location, // 出貨地點的欄位
  delivery_time, // 備貨時間的欄位
  payment_method, // 付款方式 0:貨到付款
  remark, // 備註
}) => {
  const token = localStorage.getItem("token");

  return fetch(`${BASE_URL}/products/new`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ProductCategoryId,
      name,
      picture_url,
      info,
      price,
      quantity,
      delivery,
      delivery_location,
      delivery_time,
      payment_method,
      remark,
    }),
  }).then((res) => res.json());
};

const updateProductAPI = ({
  ProductCategoryId,
  name,
  picture_url,
  info,
  price,
  quantity,
  delivery, // 出貨方式  0:面交、1:郵寄
  delivery_location, // 出貨地點的欄位
  delivery_time, // 備貨時間的欄位
  payment_method, // 付款方式 0:貨到付款
  remark, // 備註
}) => {
  const token = localStorage.getItem("token");

  return fetch(`${BASE_URL}/products/new`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ProductCategoryId,
      name,
      picture_url,
      info,
      price,
      quantity,
      delivery,
      delivery_location,
      delivery_time,
      payment_method,
      remark,
    }),
  }).then((res) => res.json());
};

const deleteProductAPI = (id) => {
  const token = localStorage.getItem("token");

  return fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export {
  getProductsAPI,
  getProductCategoriesAPI,
  getProductsFromCategoryAPI,
  getProductsFromVendorAPI,
  searchProductAPI,
  getProductAPI,
  postProductAPI,
  updateProductAPI,
  deleteProductAPI,
};
