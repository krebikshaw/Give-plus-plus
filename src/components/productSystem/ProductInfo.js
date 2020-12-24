import { COLOR, FONT, DISTANCE } from '../../constants/style';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import useOrder from '../../hooks/orderHooks/useOrder';
import useCart from '../../hooks/cartHooks/useCart';
import { ActionButton } from '../../components/Button';
import { IconComponent } from '../../components';
import { InfoBlock } from '../../components/productSystem';
import {
  addCartItem,
  setQuantity,
  setHasAdd,
  setErrorMessage,
  getCartItem,
} from '../../redux/slices/cartSlice/cartSlice';
import { getUser } from '../../redux/slices/orderSlice/orderSlice';
const ProductName = styled.div`
  width: 500px;
  word-break: break-all;
  font-weight: bold;
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
`;

const ProductPrice = styled.div`
  margin-top: ${DISTANCE.md};
  font-weight: bold;
  font-size: ${FONT.xs};
  color: ${COLOR.text_1};
`;

const ProductQuantityContainer = styled.div`
  margin-top: ${DISTANCE.md};
  margin-bottom: 50px;
  label {
    display: block;
    font-size: ${FONT.xs};
    color: ${COLOR.text_2};
    margin-bottom: ${DISTANCE.sm};
  }
`;

const ProductCountSelect = styled.select`
  line-height: 1.4;
  font-size: 14px;
  color: #39393e;
  padding: 10px 14px 10px 14px;
  background-color: #fff;
  border: none;
  border-right: 14px solid #fff;
  box-shadow: 0 0 0 1px #d3d3d5;
  box-sizing: border-box;
  border-radius: 0;
  padding-right: 34px;
  margin: 1px;
  background-image: url(data:image/svg+xml,%3Csvg width='10' height='6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath class='color' d='M0 0h10L5 6z' fill='%23D3D3D5' fill-rule='evenodd'/%3E%3C/svg%3E%0A);
}
`;

const SoldOutMessage = styled.div`
  margin-top: ${(props) => props.$margin || '0px'};
  display: flex;
  align-items: center;
  font-size: ${FONT.lg};
  font-weight: bold;
  color: ${COLOR.hover};
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLOR.bg_mask};
  z-index: 2;
  padding-top: 90px;
`;
const Form = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 80px auto;
  height: 300px;
  width: 40%;
  min-width: 300px;
  border-radius: 9px;
  background: ${COLOR.white};
  letter-spacing: 1px;
  color: ${COLOR.text_1};
  font-size: ${FONT.md};
`;
const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 10px;
`;

const Options = ({ quantity }) => {
  let options = [];
  for (let i = 1; i <= quantity; i++) {
    options.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return <>{options}</>;
};

const ProductQuantitySelector = ({ quantity }) => {
  const dispatch = useDispatch();
  const handleSelectQuantity = (e) => {
    dispatch(setQuantity(e.target.value));
  };
  return (
    <>
      {quantity > 0 ? (
        <ProductQuantityContainer>
          <label>數量</label>
          <ProductCountSelect onChange={handleSelectQuantity}>
            <Options quantity={quantity} />
          </ProductCountSelect>
        </ProductQuantityContainer>
      ) : (
        <ProductQuantityContainer>
          <SoldOutMessage>已售出</SoldOutMessage>
        </ProductQuantityContainer>
      )}
    </>
  );
};

const ShoppingCart = styled(ActionButton)`
  width: 100%;
`;

const RemindBlock = styled(InfoBlock)`
  margin-top: 20px;
  height: 100px;
  width: 100%;
  font-weight: normal;
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
`;

const Remind = () => {
  return (
    <RemindBlock>
      付款後，從備貨到寄出商品為 1 個工作天。（不包含假日）
    </RemindBlock>
  );
};

export const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useOrder();
  const { SelectQuantity, hasAdd, errorMessage } = useCart();
  const formatter = new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'NTD',
    minimumFractionDigits: 0,
  });
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleAddProduct = (productId, quantity, userId) => {
    dispatch(addCartItem(productId, quantity, userId)).then((res) => {
      if (res.ok === 1 || quantity === 1) {
        dispatch(setHasAdd(true));
      }
    });
  };
  const handleClose = () => {
    dispatch(setHasAdd(false));
    dispatch(setErrorMessage(false));
  };
  const handleAlert = () => {
    if (!user) {
      dispatch(setErrorMessage('請先登入再購買商品，謝謝'));
    }
  };

  return (
    <>
      {errorMessage && (
        <Modal>
          <Form>
            <IconContainer onClick={handleClose}>
              <IconComponent kind={'close-black'} />
            </IconContainer>
            {errorMessage}
          </Form>
        </Modal>
      )}
      {hasAdd && (
        <Modal>
          <Form>
            <IconContainer onClick={handleClose}>
              <IconComponent kind={'close-black'} />
            </IconContainer>
            商品已成功加入購物車囉！
          </Form>
        </Modal>
      )}
      <ProductName>{product.name || '商品載入中...'}</ProductName>
      <ProductPrice>{formatter.format(product.price)}</ProductPrice>
      <ProductQuantitySelector quantity={product.quantity} />
      {user ? (
        <ShoppingCart
          $margin={0}
          $size={'lg'}
          onClick={() =>
            handleAddProduct(product.id, SelectQuantity, user.userId)
          }
        >
          放 入 購 物 車
        </ShoppingCart>
      ) : (
        <ShoppingCart $margin={0} $size={'lg'} onClick={handleAlert}>
          放 入 購 物 車
        </ShoppingCart>
      )}
      <Remind />
    </>
  );
};
