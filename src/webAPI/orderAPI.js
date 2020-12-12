import { BASE_URL } from '../constants/unit';
import { getAuthToken } from "../hooks/orderHooks/useOrder";

export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const getClientOrder = () => {
   const token = getAuthToken();
   return fetch(`${BASE_URL}/orders/buy`, {
     headers: {
       "content-type": "application/json",
       authorization: `Bearer ${token}`,
     },
   }).then((res) => res.json());
}

export const getSellerOrder = () => {
    const token = getAuthToken();
    return fetch(`${BASE_URL}/orders/sell`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
}

export const getDetailOrder = (id) => {
    const token = getAuthToken();
    return fetch(`${BASE_URL}/orders/order/${id}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
}

export const cancelOrder = (id) => {
   const token = getAuthToken();
   return fetch(`${BASE_URL}/orders/${id}/cancel`, {
     method: "PATCH",
     headers: {
       "content-type": "application/json",
       authorization: `Bearer ${token}`,
     },
   }).then((res) => res.json());
}