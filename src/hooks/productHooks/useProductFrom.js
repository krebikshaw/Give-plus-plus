import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  postProduct,
  updateProduct,
} from '../../redux/slices/productSlice/productSlice';

export default function useProduct() {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productInfo, setProductInfo] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [delivery, setDelivery] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [remark, setRemark] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const [hasProductName, setHasProductName] = useState();
  const [hasProductInfo, setHasProductInfo] = useState();
  const [hasProductCategory, setHasProductCategory] = useState();
  const [hasDeliveryLocation, setHasDeliveryLocation] = useState();
  const [hasProductPrice, setHasProductPrice] = useState();
  const [hasDeliveryTime, setHasDeliveryTime] = useState();
  const [hasDelivery, setHasDelivery] = useState();
  const [hasPaymentMethod, setHasPaymentMethod] = useState();
  const [hasProductQuantity, setHasProductQuantity] = useState();
  const [hasError, setHasError] = useState(false);

  const handleChange = (setValue) => (e) => setValue(e.target.value);

  const checkDataValidity = () => {
    const checkNumber = (str) => {
      let NumberRgexp = /^([1-9]\d*|[0]{1,1})$/;
      return NumberRgexp.test(str);
    };

    const checkInteger = (str) => {
      let IntegerRgexp = /^[0-9]*[1-9][0-9]*$/;
      return IntegerRgexp.test(str);
    };

    if (!productName || !productName.trim()) {
      setHasError(true);
      setHasProductName(false);
    } else {
      setHasProductName(true);
    }

    if (!deliveryLocation || !deliveryLocation.trim()) {
      setHasError(true);
      setHasDeliveryLocation(false);
    } else {
      setHasDeliveryLocation(true);
    }

    if (!productCategory || !productCategory.trim()) {
      setHasError(true);
      setHasProductCategory(false);
    } else {
      setHasProductCategory(true);
    }

    if (!productInfo || !productInfo.trim()) {
      setHasError(true);
      setHasProductInfo(false);
    } else {
      setHasProductInfo(true);
    }

    if (!checkInteger(productPrice)) {
      setHasError(true);
      setHasProductPrice(false);
    } else {
      setHasProductPrice(true);
    }

    if (!checkInteger(productQuantity)) {
      setHasError(true);
      setHasProductQuantity(false);
    } else {
      setHasProductQuantity(true);
    }

    if (!checkNumber(delivery)) {
      setHasError(true);
      setHasDelivery(false);
    } else {
      setHasDelivery(true);
    }

    if (!checkInteger(deliveryTime)) {
      setHasError(true);
      setHasDeliveryTime(false);
    } else {
      setHasDeliveryTime(true);
    }

    if (!checkNumber(paymentMethod)) {
      setHasError(true);
      setHasPaymentMethod(false);
    } else {
      setHasPaymentMethod(true);
    }
  };

  let formData = {
    ProductCategoryId: productCategory,
    name: productName,
    picture_url: '',
    info: productInfo,
    price: productPrice,
    quantity: productQuantity,
    delivery: delivery, // 出貨方式  0:面交、1:郵寄
    delivery_location: deliveryLocation, // 出貨地點的欄位
    delivery_time: deliveryTime, // 備貨時間的欄位
    payment_method: paymentMethod, // 付款方式 0:貨到付款
    remark: remark, // 備註
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    checkDataValidity();
    if (!hasError) {
      dispatch(postProduct(formData));
    }
  };

  return {
    setProductName,
    setProductInfo,
    setProductCategory,
    setProductPrice,
    setDeliveryTime,
    setDeliveryLocation,
    setDelivery,
    setPaymentMethod,
    setRemark,
    setProductQuantity,
    handleChange,
    hasError,
    hasProductName,
    hasProductInfo,
    hasProductCategory,
    hasDeliveryLocation,
    hasProductPrice,
    hasDeliveryTime,
    hasDelivery,
    hasPaymentMethod,
    hasProductQuantity,
    handleSubmitForm,
  };
}
