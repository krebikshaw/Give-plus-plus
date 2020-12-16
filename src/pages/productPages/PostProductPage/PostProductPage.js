import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StandardNavPage } from '../../../components/Page';
import { COLOR, FONT, DISTANCE, EFFECT } from '../../../constants/style';
import styled from 'styled-components';
import { InputComponent, TextAreaComponent } from '../../../components/Input';
import { NormalButton } from '../../../components/Button';
import useProductFrom from '../../../hooks/productHooks/useProductFrom';
import { SetAvatarComponent } from '../../../components/productSystem/';
import useProduct from '../../../hooks/productHooks/useProduct';

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

const QuestionContainer = styled.div`
  margin-bottom: 50px;
`;

const QuestionName = styled.div`
  color: ${COLOR.text_2};
  font-size: ${FONT.lg};
  margin-bottom: 20px;
`;

const RadioInput = styled.input`
  &[type='radio'] {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }

  span {
    color: ${COLOR.text_2};
    font-size: ${FONT.xs};
    vertical-align: text-bottom;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  ${RadioInput}[type="radio"] {
    width: 15px;
    height: 15px;
  }
`;

const RadioWrap = styled.div``;

const RadioLabel = styled.label`
  width: 150px;
  margin: 5px 0;
`;

const NormalInput = ({ question, placeholder }) => {
  return (
    <InputComponent
      $margin={0}
      $size={question === '名稱' && 'lg'}
      placeholder={placeholder}
    ></InputComponent>
  );
};

const TextArea = () => {
  return (
    <TextAreaComponent $margin={0} $size={'lg'} rows='7'></TextAreaComponent>
  );
};

const Radio = ({ label, value }) => {
  return (
    <RadioLabel>
      <RadioWrap>
        <RadioInput
          $margin={0}
          rows='15'
          type='radio'
          value={value}
          name='category'
        ></RadioInput>
        <span>{label}</span>
      </RadioWrap>
    </RadioLabel>
  );
};

const Radios = ({ productCategories }) => {
  return (
    <RadioContainer>
      {productCategories.map((category) => {
        return (
          <Radio key={category.id} value={category.id} label={category.name} />
        );
      })}
    </RadioContainer>
  );
};

const Selector = styled.select`
  height: 30px;
  width: 100px;
  box-shadow: ${EFFECT.shadowInput};
  border-radius: 5px;
  outline: none;
  border: none;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  padding: 3px;
`;

const Options = ({ location }) => {
  let options = [];
  // for (let i = 1; i <= quantity; i++) {
  options.push(
    <option value={location} key={location}>
      {location}
    </option>
  );
  // }
  return <>{options}</>;
};

const Select = ({ location }) => {
  return (
    <Selector>
      <Options location={location} />
    </Selector>
  );
};

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(NormalButton)`
  padding: 8px 45px;
  border-radius: 12px;
  &:last-child {
    margin-left: ${DISTANCE.sm};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 4px;
  color: ${COLOR.text_alert};
  position: absolute;
`;

const Buttons = ({ handleSubmitForm }) => {
  return (
    <ButtonContainer>
      <Button $margin={0} onClick={handleSubmitForm}>
        送出
      </Button>
      <Button $margin={0}>返回</Button>
    </ButtonContainer>
  );
};

const InputItem = ({
  question,
  placeholder,
  type,
  location,
  setSuccessMode,
  errorMessage,
  hasValue,
}) => {
  const { productCategories } = useProduct();
  return (
    <QuestionContainer>
      <QuestionName>{question}</QuestionName>
      {type === 'input' && (
        <NormalInput question={question} placeholder={placeholder} />
      )}
      {type === 'textArea' && <TextArea />}
      {type === 'radio' && <Radios productCategories={productCategories} />}
      {type === 'select' && <Select location={location} />}
      {type === 'picture' && (
        <SetAvatarComponent setSuccessMode={setSuccessMode} />
      )}
      {hasValue === false && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </QuestionContainer>
  );
};

const PostProductPage = () => {
  const [successMode, setSuccessMode] = useState(false);
  const { handleGetProductCategories } = useProduct();
  const {
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
  } = useProductFrom();

  useEffect(() => {
    handleGetProductCategories();
  }, []);

  return (
    <StandardNavPage>
      <Wrapper>
        <FormWrap>
          <Title>刊登商品</Title>
          <InputItem
            name={'productName'}
            question={'名稱'}
            type={'input'}
            errorMessage={'請輸入商品名稱'}
            onChange={handleChange(setProductName)}
            hasValue={hasProductName}
          />
          <InputItem
            name={'productInfo'}
            question={'商品介紹'}
            type={'textArea'}
            errorMessage={'請輸入商品介紹'}
            onChange={handleChange(setProductInfo)}
            hasValue={hasProductInfo}
          />
          <InputItem
            name={'productPicture'}
            question={'圖片'}
            type={'picture'}
            errorMessage={'請選擇商品照片'}
            setSuccessMode={setSuccessMode}
            // hasValue={hasProductName}
          />
          <InputItem
            name={'productCategory'}
            question={'分類'}
            type={'radio'}
            errorMessage={'請選擇商品分類'}
            onChange={handleChange(setProductCategory)}
            hasValue={hasProductCategory}
          />
          <InputItem
            name={'productPrice'}
            question={'價格'}
            type={'input'}
            placeholder={'請輸入正整數'}
            errorMessage={'請輸入商品價格'}
            onChange={handleChange(setProductPrice)}
            hasValue={hasProductPrice}
          />
          <InputItem
            name={'productPrice'}
            question={'數量'}
            type={'input'}
            placeholder={'請輸入正整數'}
            errorMessage={'請輸入商品數量'}
            onChange={handleChange(setProductQuantity)}
            hasValue={hasProductQuantity}
          />
          <InputItem
            name={'deliveryTime'}
            question={'備貨時間'}
            type={'input'}
            placeholder={'請輸入正整數'}
            errorMessage={'請輸入備貨時間'}
            onChange={handleChange(setDeliveryTime)}
            hasValue={hasDeliveryTime}
          />
          <InputItem
            name={'deliveryLocation'}
            question={'出貨地點'}
            type={'select'}
            location={'台灣'}
            errorMessage={'請選擇出貨地點'}
            onChange={handleChange(setDeliveryLocation)}
            hasValue={hasDeliveryLocation}
          />
          <InputItem
            name={'delivery'}
            question={'取貨方式'}
            type={'radio'}
            errorMessage={'請選擇取貨方式'}
            onChange={handleChange(setDelivery)}
            hasValue={hasDelivery}
          />
          <InputItem
            name={'paymentMethod'}
            question={'付款方式'}
            type={'radio'}
            errorMessage={'請選擇付款方式'}
            onChange={handleChange(setPaymentMethod)}
            hasValue={hasPaymentMethod}
          />
          <InputItem
            name={'remark'}
            question={'備註'}
            type={'textArea'}
            onChange={handleChange(setRemark)}
          />
          <Buttons handleSubmitForm={handleSubmitForm} />
        </FormWrap>
      </Wrapper>
    </StandardNavPage>
  );
};

export default PostProductPage;
