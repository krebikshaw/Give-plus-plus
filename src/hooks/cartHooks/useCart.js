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
  setPrice,
  setChecked,
  setErrorMessage,
  setIsSelect,
  addQuantity,
  minusQuantity,
  setIsPaying,
  setFilter,
  setUpdate,
  setPayWay,
  setComplete,
  createOrder,
  getCartItem,
} from "../../redux/slices/cartSlice/cartSlice";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/slices/orderSlice/orderSlice";
import { getProduct } from "../../redux/slices/productSlice/productSlice";

export default function useCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
   const handleClose = () => {
     dispatch(setErrorMessage(false));
   };
   const handleSelect = (id, TotalAmount) => {
     dispatch(setIsSelect(id));
     dispatch(setChecked(!checked));
     dispatch(setPrice(TotalAmount));
     if (checked === true) {
       dispatch(setPrice(0));
     }
   };
     const handleError = () => {
       dispatch(
         setErrorMessage(
           "勾選購物車後，即代表確認購買商品與數量，無法再更動購買的商品數量。若要重新選擇購買數量，請先取消勾選購物車。"
         )
       );
     };
       const handlePlus = (cartQuantity, cartItemId, productQuantity) => {
         if (cartQuantity >= productQuantity) {
           dispatch(
             setErrorMessage("抱歉，本次結帳最多購買" + productQuantity + "件")
           );
           return;
         }
         dispatch(addQuantity(cartQuantity, cartItemId));
       };
       const handleMinus = (cartQuantity, cartItemId) => {
         if (cartQuantity <= 1) {
           dispatch(setErrorMessage("抱歉，結帳最少購買1件"));
           return;
         }
         dispatch(minusQuantity(cartQuantity, cartItemId));
       };
        const handleCloseError = () => {
          dispatch(setErrorMessage(false));
        };
        
        const handlePay = (productId) => {
          if (checked === true) {
            dispatch(setIsPaying(true));
            dispatch(setFilter("select"));
            dispatch(getUser());
            dispatch(getProduct(productId));
          } else {
            dispatch(setErrorMessage("請勾選一個購物車才能前往結帳"));
          }
        };
          const handleUpdateInfo = () => {
            dispatch(setUpdate(false));
          };
           const handleUpdateBuyer = (e, setBuyer) => {
             setBuyer(e.target.value);
           };
            const handleUpdateAddress = (e, setReceiveAddress) => {
              setReceiveAddress(e.target.value);
            };
              const handleUpdateReceiver = (e, setReceiver) => {
                setReceiver(e.target.value);
              };
               const handleCloseUpdate = () => {
                 dispatch(setUpdate(false));
               };
                const handleUpdateReceiveInfo = () => {
                  dispatch(setUpdate(true));
                };
                const handlePayWay = () => {
                  dispatch(setPayWay(true));
                };
                 const handleToCheckOutCartPage = (readyToOrderItems) => {
                   if (payWay === true) {
                     navigate("/cart/checkout");
                     dispatch(setComplete(true));
                     dispatch(createOrder(readyToOrderItems));
                   } else {
                     dispatch(
                       setErrorMessage("請勾選一個付款方式後才能完成訂單")
                     );
                   }
                 };
                  const handleGetCart = () => {
                    window.location.reload(true);
                    dispatch(getCartItem());
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
    handleClose,
    handleSelect,
    handleError,
    handlePlus,
    handleMinus,
    handleCloseError,
    handlePay,
    handleUpdateInfo,
    handleUpdateBuyer,
    handleUpdateAddress,
    handleUpdateReceiver,
    handleCloseUpdate,
    handleUpdateReceiveInfo,
    handlePayWay,
    handleToCheckOutCartPage,
    handleGetCart,
  };
}







