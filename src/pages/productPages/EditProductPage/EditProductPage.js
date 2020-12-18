import { StandardNavPage } from '../../../components/Page';
import styled from 'styled-components';
import { COLOR, FONT, DISTANCE } from '../../../constants/style';
import { InputItem, ButtonsBox } from '../../../components/productSystem/';
import useProduct from '../../../hooks/productHooks/useProduct';
import useProductForm from '../../../hooks/productHooks/useProductForm';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProduct } from '../../../redux/slices/productSlice/productSlice';
import { useDispatch } from 'react-redux';

const Wrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding: 30px 0;
`;

const FormWrap = styled.form``;

const Title = styled.h1`
  color: ${COLOR.text_2};
  font-size: ${FONT.lg};
  margin-bottom: ${DISTANCE.lg};
`;

const EditProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productCategories, productErrorMessage } = useProduct();
  const {
    setProductName,
    setProductInfo,
    setProductCategory,
    setProductPrice,
    setProductPictureUrl,
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
    handleSubmitEditForm,
    productPictureUrl,
    productCategory,
    productName,
    productInfo,
    productPrice,
    productQuantity,
    delivery,
    deliveryTime,
    deliveryLocation,
    paymentMethod,
    remark,
    changeProductValue,
  } = useProductForm(id);

  useEffect(() => {
    dispatch(getProduct(id)).then((res) => {
      changeProductValue(res.product);
    });
  }, [id, dispatch]);

  return (
    <StandardNavPage>
      <Wrapper>
        <FormWrap>
          <Title>編輯商品</Title>
          <InputItem
            title={'商品名稱'}
            type={'input'}
            hasValue={hasProductName}
            errorMessage={'請輸入商品名稱'}
            handleChange={handleChange(setProductName)}
            value={productName}
          />

          <InputItem
            title={'商品介紹'}
            type={'textArea'}
            hasValue={hasProductInfo}
            textareaRows={4}
            errorMessage={'請輸入商品介紹'}
            handleChange={handleChange(setProductInfo)}
            value={productInfo}
          />

          <InputItem
            title={'圖片'}
            type={'picture'}
            errorMessage={'請選擇商品照片'}
            productPictureUrl={productPictureUrl}
            setProductPictureUrl={setProductPictureUrl}
          />

          <InputItem
            title={'分類'}
            type={'radio'}
            options={productCategories}
            hasValue={hasProductCategory}
            errorMessage={'請選擇商品分類'}
            handleChange={handleChange(setProductCategory)}
            value={productCategory}
          />

          <InputItem
            isNumber
            title={'價格'}
            type={'input'}
            hasValue={hasProductPrice}
            errorMessage={'請輸入商品價格'}
            handleChange={handleChange(setProductPrice)}
            value={productPrice}
          />

          <InputItem
            isNumber
            title={'數量'}
            type={'input'}
            errorMessage={'請輸入商品數量'}
            hasValue={hasProductQuantity}
            handleChange={handleChange(setProductQuantity)}
            value={productQuantity}
          />

          <InputItem
            isNumber
            title={'備貨時間'}
            type={'input'}
            hasValue={hasDeliveryTime}
            errorMessage={'請輸入備貨時間'}
            handleChange={handleChange(setDeliveryTime)}
            value={deliveryTime}
          />

          <InputItem
            title={'出貨地點'}
            type={'select'}
            options={['台灣', '台北', '高雄']}
            hasValue={hasDeliveryLocation}
            errorMessage={'請選擇出貨地點'}
            handleChange={handleChange(setDeliveryLocation)}
            value={deliveryLocation}
          />

          <InputItem
            title={'取貨方式'}
            type={'radio'}
            options={[
              { name: '面交', id: '0' },
              { name: '郵寄', id: '1' },
            ]}
            hasValue={hasDelivery}
            errorMessage={'請選擇取貨方式'}
            handleChange={handleChange(setDelivery)}
            value={delivery}
          />

          <InputItem
            title={'付款方式'}
            type={'radio'}
            options={[{ name: '貨到付款', id: '0' }]}
            errorMessage={'請選擇付款方式'}
            handleChange={handleChange(setPaymentMethod)}
            hasValue={hasPaymentMethod}
            value={paymentMethod}
          />

          <InputItem
            title={'備註'}
            type={'textArea'}
            textareaRows={2}
            handleChange={handleChange(setRemark)}
            value={remark || ''}
          />

          <ButtonsBox
            handler={handleSubmitEditForm}
            productErrorMessage={productErrorMessage}
          />
        </FormWrap>
      </Wrapper>
    </StandardNavPage>
  );
};

export default EditProductPage;
