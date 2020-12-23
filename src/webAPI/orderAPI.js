import { BASE_URL } from '../constants/unit';
import { getAuthToken } from "../utils";

export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
// 取得自己買的訂單列表
export const getClientOrder = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders/buy`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}
// 取得自己賣的訂單列表
export const getSellerOrder = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders/sell`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}
// 取得單一訂單明細
export const getDetailOrder = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders/order/${id}`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}
// 訂單取消
export const cancelOrder = (id, cancelReason) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders/${id}/cancel`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      cancelReason,
    }),
  }).then((res) => res.json());
};
// 訂單出貨
export const sentOrder = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders/${id}/send`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}
// 刪除訂單資料
export const deleteOrder = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}
// 取得全部訂單資料
export const getAllOrder = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders/`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
// 訂單付款
export const payOrder = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders/${id}/pay`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
// 訂單完成
export const completeOrder = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders/${id}/complete`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
