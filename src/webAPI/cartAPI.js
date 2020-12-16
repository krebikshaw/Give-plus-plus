import { BASE_URL } from '../constants/unit';
import { getAuthToken } from "../utils";

// 取得購物車內的商品
export const getItem = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/carts`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
// 加入商品到購物車
export const addItem = (productId, quantity) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/carts/cart-items/new`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      productId,
      quantity,
    }),
  }).then((res) => res.json());
};
// 編輯購物車的商品
export const updateItem = (quantity, id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/carts/cart-items/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      quantity,
    }),
  }).then((res) => res.json());
};
// 刪除購物車商品
export const deleteItem = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/carts/cart-items/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
// 刪除購物車同賣家商品
export const deleteItemsBySeller = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/carts/seller/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};