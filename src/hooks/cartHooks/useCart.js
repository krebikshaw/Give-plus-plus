import { useSelector, useDispatch } from 'react-redux';
import {
  selectCart,
  selectError,
  selectLoading,
  deleteCartItemsBySeller,
  deleteCartItem,
  selectIsSelect,
  selectIsPaying,
  selectFilter,
  selectPrice,
  selectPayWay,
  selectComplete,
  selectOrderNumber,
  selectQuantity,
  selectAdd,
  selectUpdate,
  selectChecked,

} from "../../redux/slices/cartSlice/cartSlice";

export default function useCart() {
  const dispatch = useDispatch();
  const formatter = new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "NTD",
    minimumFractionDigits: 0,
  });
  const carts = useSelector(selectCart);
  const errorMessage = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const isSelect = useSelector(selectIsSelect);
  const isPaying = useSelector(selectIsPaying);
  const filter = useSelector(selectFilter);
  const price = useSelector(selectPrice);
  const payWay = useSelector(selectPayWay);
  const completeOrder = useSelector(selectComplete);
  const orderNumber = useSelector(selectOrderNumber);
  const SelectQuantity = useSelector(selectQuantity);
  const hasAdd = useSelector(selectAdd);
  const update = useSelector(selectUpdate);
  const checked = useSelector(selectChecked);
  
  const handleDelete = (id) => {
    dispatch(deleteCartItem(id));
    window.location.reload();
  };
  const handleDeleteSeller = (id) => {
    dispatch(deleteCartItemsBySeller(id));
    window.location.reload();
  };

  
  return {
    update,
    isSelect,
    completeOrder,
    price,
    isPaying,
    checked,
    payWay,
    filter,
    carts,
    formatter,
    errorMessage,
    isLoading,
    handleDelete,
    handleDeleteSeller,
    orderNumber,
    SelectQuantity,
    hasAdd,

  };
}







