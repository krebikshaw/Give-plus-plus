import { useState, useEffect } from 'react';
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
  const [productPictureUrl, setProductPictureUrl] = useState(
    'https://i.imgur.com/uqZxFCm.png'
  );
  const [productPrice, setProductPrice] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('台灣');
  const [delivery, setDelivery] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [remark, setRemark] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const [hasProductName, setHasProductName] = useState();
  const [hasProductInfo, setHasProductInfo] = useState();
  const [hasProductCategory, setHasProductCategory] = useState();
  const [hasDeliveryLocation, setHasDeliveryLocation] = useState();
  const [hasProductPrice, setHasProductPrice] = useState();
  const [hasDeliveryTime, setHasDeliveryTime] = useState();
  const [hasDelivery, setHasDelivery] = useState();
  const [hasPaymentMethod, setHasPaymentMethod] = useState();
  const [hasProductQuantity, setHasProductQuantity] = useState();

  let hasError = false;

  const handleChange = (setValue) => (e) => setValue(e.target.value);

  const checkNumber = (str) => {
    let NumberRgexp = /^([1-9]\d*|[0]{1,1})$/;
    return NumberRgexp.test(str);
  };

  const checkInteger = (str) => {
    let IntegerRgexp = /^[0-9]*[1-9][0-9]*$/;
    return IntegerRgexp.test(str);
  };

  const checkDataValidity = () => {
    if (!productName || !productName.trim()) {
      hasError = true;
      setHasProductName(false);
    } else {
      setHasProductName(true);
    }

    if (!deliveryLocation || !deliveryLocation.trim()) {
      hasError = true;
      setHasDeliveryLocation(false);
    } else {
      setHasDeliveryLocation(true);
    }

    if (!productCategory || !productCategory.trim()) {
      hasError = true;
      setHasProductCategory(false);
    } else {
      setHasProductCategory(true);
    }

    if (!productInfo || !productInfo.trim()) {
      hasError = true;
      setHasProductInfo(false);
    } else {
      setHasProductInfo(true);
    }

    if (!checkInteger(productPrice)) {
      hasError = true;
      setHasProductPrice(false);
    } else {
      setHasProductPrice(true);
    }

    if (!checkInteger(productQuantity)) {
      hasError = true;
      setHasProductQuantity(false);
    } else {
      setHasProductQuantity(true);
    }

    if (!checkNumber(delivery)) {
      hasError = true;
      setHasDelivery(false);
    } else {
      setHasDelivery(true);
    }

    if (!checkInteger(deliveryTime)) {
      hasError = true;
      setHasDeliveryTime(false);
    } else {
      setHasDeliveryTime(true);
    }

    if (!checkNumber(paymentMethod)) {
      hasError = true;
      setHasPaymentMethod(false);
    } else {
      setHasPaymentMethod(true);
    }
  };

  let formData = {
    ProductCategoryId: productCategory,
    name: productName,
    picture_url: productPictureUrl,
    info: productInfo,
    price: productPrice,
    quantity: productQuantity,
    delivery: delivery, // 出貨方式  0:面交、1:郵寄
    delivery_location: deliveryLocation, // 出貨地點的欄位
    delivery_time: deliveryTime, // 備貨時間的欄位
    payment_method: paymentMethod, // 付款方式 0:貨到付款
    remark
  };

  useEffect(() => {
    if (isSubmitClicked === true) {
      checkDataValidity();
    }
  }, [formData]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    checkDataValidity();
    setIsSubmitClicked(true);
    console.log(formData);
    if (!hasError) {
      dispatch(postProduct(formData));
    }
  };

  return {
    deliveryLocation,
    productPrice,
    productPictureUrl,
    setProductName,
    setProductInfo,
    setProductCategory,
    setProductPictureUrl,
    setProductPrice,
    setDeliveryTime,
    setDeliveryLocation,
    setDelivery,
    setPaymentMethod,
    setRemark,
    setProductQuantity,
    handleChange,
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
