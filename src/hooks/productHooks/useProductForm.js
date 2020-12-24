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

    if (!productCategory || !productInfo.trim()) {
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
      navigate('/users/backstage');
    }
    alert('商品已刊登成功，請耐心等待管理員審核商品！');
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
    changeProductValue,
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
    handleSubmitAddForm,
    handleSubmitEditForm,
    handleChangePicture,
  };
}
