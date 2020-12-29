import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postPictureAPI } from '../../webAPI/productAPI';
import {
  postProduct,
  updateProduct,
} from '../../redux/slices/productSlice/productSlice';

export default function useProductForm(id) {
  const navigate = useNavigate();
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

  const [hasProductName, setHasProductName] = useState('');
  const [hasProductInfo, setHasProductInfo] = useState('');
  const [hasProductCategory, setHasProductCategory] = useState('');
  const [hasDeliveryLocation, setHasDeliveryLocation] = useState('');
  const [hasProductPrice, setHasProductPrice] = useState('');
  const [hasDeliveryTime, setHasDeliveryTime] = useState('');
  const [hasDelivery, setHasDelivery] = useState('');
  const [hasPaymentMethod, setHasPaymentMethod] = useState('');
  const [hasProductQuantity, setHasProductQuantity] = useState('');

  let hasError = false;

  const handleChange = (setValue) => (e) => setValue(e.target.value);

  const checkValidNumber = (input, max, min) => {
    const num = Number(input);
    if (!Number.isInteger(num) || num > max || num < min) {
      return false;
    }
    return true;
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

    if (!productCategory) {
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

    if (!checkValidNumber(productPrice, 50000, 0)) {
      hasError = true;
      setHasProductPrice(false);
    } else {
      setHasProductPrice(true);
    }

    if (!checkValidNumber(productQuantity, 1000, 1)) {
      hasError = true;
      setHasProductQuantity(false);
    } else {
      setHasProductQuantity(true);
    }

    if (!checkValidNumber(delivery, 2, 0)) {
      hasError = true;
      setHasDelivery(false);
    } else {
      setHasDelivery(true);
    }

    if (!checkValidNumber(deliveryTime, 30, 0)) {
      hasError = true;
      setHasDeliveryTime(false);
    } else {
      setHasDeliveryTime(true);
    }

    if (!checkValidNumber(paymentMethod, 2, 0)) {
      hasError = true;
      setHasPaymentMethod(false);
    } else {
      setHasPaymentMethod(true);
    }
  };

  const changeProductValue = (product) => {
    if (product) {
      setProductName(product.name);
      setProductInfo(product.info);
      setProductCategory(product.ProductCategoryId);
      setProductPictureUrl(product.picture_url);
      setProductPrice(product.price);
      setProductQuantity(product.quantity);
      setDeliveryTime(product.delivery_time);
      setDeliveryLocation(product.delivery_location);
      setDelivery(product.delivery);
      setPaymentMethod(product.payment_method);
      setRemark(product.remark);
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
    remark,
  };

  useEffect(() => {
    if (isSubmitClicked === true) {
      checkDataValidity();
    }
  }, [formData]);

  const handleSubmitAddForm = (e) => {
    e.preventDefault();
    checkDataValidity();
    setIsSubmitClicked(true);
    if (!hasError) {
      dispatch(postProduct(formData));
      alert('商品已刊登成功，請耐心等待管理員審核商品！');
      navigate('/users/backstage');
    }
  };

  const handleSubmitEditForm = (e) => {
    e.preventDefault();
    checkDataValidity();
    setIsSubmitClicked(true);
    if (!hasError) {
      dispatch(updateProduct(id, formData));
      navigate('/users/backstage');
    }
  };

  const handleChangePicture = (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    postPictureAPI(formData).then((res) => setProductPictureUrl(res.data.link));
  };

  return {
    productCategory,
    productName,
    productInfo,
    productPrice,
    productQuantity,
    delivery,
    deliveryTime,
    deliveryLocation,
    paymentMethod,
    productPictureUrl,
    remark,

    hasProductName,
    hasProductInfo,
    hasProductCategory,
    hasDeliveryLocation,
    hasProductPrice,
    hasDeliveryTime,
    hasDelivery,
    hasPaymentMethod,
    hasProductQuantity,

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

    changeProductValue,
    handleChange,
    handleSubmitAddForm,
    handleSubmitEditForm,
    handleChangePicture,
  };
}
