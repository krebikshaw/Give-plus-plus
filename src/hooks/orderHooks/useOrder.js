import { useSelector, useDispatch } from 'react-redux';
import {
  selectOrder,
  selectUser,
  selectLoading,
  selectError,
  selectContent,
  selectDetailOrder,
  selectMask,
} from "../../redux/slices/orderSlice/orderSlice";
import {
  useParams,
} from "react-router-dom";
import {
  cancelOrder,
  sentOrder,
  setMask,
  completeOrder,
  payOrder,
} from "../../redux/slices/orderSlice/orderSlice";
const TOKEN_NAME = "token";

export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};
export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export default function useOrder() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const content = useSelector(selectContent);
  const orders = useSelector(selectOrder);
  const detailOrder = useSelector(selectDetailOrder);
  const errorMessage = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const mask = useSelector(selectMask);

  const order_number = detailOrder.map(
    (data) => Object.values(data)[11].order_number
  );
  const is_sent = detailOrder.map((data) => Object.values(data)[11].is_sent);
  const product_delivery = detailOrder.map((data) => Object.values(data)[6]);
  const is_canceled = detailOrder.map(
    (data) => Object.values(data)[11].is_canceled
  );
  const is_completed = detailOrder.map(
    (data) => Object.values(data)[11].is_completed
  );
   const is_paid = detailOrder.map((data) => Object.values(data)[11].is_paid);
  const contentData = detailOrder.map((data) => Object.values(data)[11].content);
  const createdAt = detailOrder.map((data) => Object.values(data)[10]);
  const seller_name = detailOrder.map(
    (data) => Object.values(data)[11].seller_name
  );
  const seller_email = detailOrder.map(
    (data) => Object.values(data)[11].seller_email
  );
  const client_name = detailOrder.map(
    (data) => Object.values(data)[11].client_name
  );
  const client_address = detailOrder.map(
    (data) => Object.values(data)[11].client_address
  );
  const handleCancelOrder = () => {
    dispatch(cancelOrder(id));
    dispatch(setMask(true));
  };
  const handleSentOrder = () => {
    dispatch(sentOrder(id));
    window.location.reload(true);
  }
  const handleCompleteOrder = () => {
    dispatch(completeOrder(id));
    window.location.reload(true);
  }
  const handlePayOrder = () => {
    dispatch(payOrder(id));
    window.location.reload(true);
  }

  const user = useSelector(selectUser);
  return {
    orders,
    user,
    mask,
    errorMessage,
    content,
    isLoading,
    detailOrder,
    order_number,
    is_sent,
    is_paid,
    product_delivery,
    is_canceled,
    is_completed,
    contentData,
    createdAt,
    seller_name,
    client_name,
    seller_email,
    client_address,
    handleCancelOrder,
    handleSentOrder,
    handleCompleteOrder,
    handlePayOrder,
  };
}
