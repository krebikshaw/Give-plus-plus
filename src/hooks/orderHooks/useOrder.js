import { useSelector, useDispatch } from "react-redux";
import {
  selectOrder,
  selectUser,
  selectLoading,
  selectError,
  selectDetailOrder,
  selectMask,
  sentOrder,
  setMask,
  completeOrder,
  payOrder,
  cancelOrder,
  setErrorMessage,
} from "../../redux/slices/orderSlice/orderSlice";
import { useParams } from "react-router-dom";

export default function useOrder() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const orders = useSelector(selectOrder);
  const detailOrder = useSelector(selectDetailOrder);
  const errorMessage = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const mask = useSelector(selectMask);
  const formatter = new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "NTD",
    minimumFractionDigits: 0,
  });
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
  const createdAt = detailOrder.map((data) => Object.values(data)[10]);
  const cancelReason = detailOrder.map(
    (data) => Object.values(data)[11].cancelReason
  );
  const sellerId = detailOrder.map((data) => Object.values(data)[11].seller_id);

  const totalAmount = detailOrder.map(
    (data) => Object.values(data)[11].total_amount
  );

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

  const handleCloseModal = () => {
    dispatch(setMask(false));
  };
  const handleModal = () => {
    dispatch(setMask(true));
  };
  const handleSentOrder = (id) => {
    dispatch(sentOrder(id));
    window.location.reload(true);
  };
  const handleCompleteOrder = () => {
    dispatch(completeOrder(id));
    window.location.reload(true);
  };
  const handlePayOrder = () => {
    dispatch(payOrder(id));
    window.location.reload(true);
  };

  const handleSubmitCancelReason = (e, id, cancelReason) => {
    e.preventDefault();
    if (!cancelReason || !cancelReason.trim()) {
      return dispatch(setErrorMessage("請務必填寫取消訂單原因後再送出"));
    }
    dispatch(cancelOrder(id, cancelReason));
    dispatch(setMask(false));
    window.location.reload(true);
  };

  const user = useSelector(selectUser);
  return {
    orders,
    user,
    mask,
    sellerId,
    errorMessage,
    cancelReason,
    totalAmount,
    detailOrder,
    order_number,
    isLoading,
    is_sent,
    is_paid,
    is_canceled,
    is_completed,
    product_delivery,
    createdAt,
    seller_name,
    client_name,
    seller_email,
    client_address,
    formatter,

    handleSentOrder,
    handleCompleteOrder,
    handlePayOrder,
    handleModal,
    handleCloseModal,
    handleSubmitCancelReason,
  };
}
