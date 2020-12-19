import styled from "styled-components";
import React from "react";
import { IconComponent } from "../../components";
import { COLOR, FONT, MEDIA_QUERY_MD } from "../../constants/style";
import { useDispatch } from "react-redux";

import ItemDetail from "./ItemDetail";
import useCart from "../../hooks/cartHooks/useCart";
import {
  setIsSelect,
  setPrice,
  setFilter,
} from "../../redux/slices/cartSlice/cartSlice";
const Container = styled.p`
  margin: 20px auto;
  width: 95%;
  min-width: ${MEDIA_QUERY_MD.md};
  border: solid 1px #f6f5f5;
  border-radius: 8px 8px;
  margin-bottom: 40px;
  position: relative;
`;

const Top = styled.div`
  background: #b6deea;
  border: 2px solid #b6deea;
  padding: 15px;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
`;
const Seller = styled.div`
  display: flex;
`;
const Check = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin: 8px 11px;
`;
const Name = styled.p`
  margin: 8px 11px;
  color: ${COLOR.white};
  font-size: ${FONT.sm};
`;
const SendDetail = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Hr = styled.hr`
  border: solid 0.2px #f6f5f5;
  margin-bottom: 20px;
`;
const Title = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
`;
const Select = styled.select`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  border-color: ${COLOR.text_2};
  outline: none;
  border-radius: 7px;
  padding: 6px 20px;
  width: 15%;
  margin: 10px 0 10px 0;
`;
const IconContainer = styled.div`
`;
const Section = styled.div`
  position: fix;
  right: 0;
  margin-left: 535px;
 
`;
const Wrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;
const Price = styled.p`
  color: ${COLOR.text_1};
  font-size: ${FONT.sm};
  font-weight: bold;
`;
const TotalAmountTitle = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.sm};
  margin-right: 20px;
`;

export default function CartItem({ cart }) {
  
  const dispatch = useDispatch();
  const {
    handleDeleteSeller,
    isSelect,
    isPaying,
    formatter,
    completeOrder,
  } = useCart();
  const SellerId = cart.cartDetail.map((data) => Object.values(data)[1]);
  const TotalAmount = cart.cartDetail.map(
    (data) => Object.values(data)[6] * Object.values(data)[7]
  );
  const handleSelect = (id, TotalAmount) => {
    dispatch(setIsSelect(id));
    dispatch(setPrice(TotalAmount));
    dispatch(setFilter("select"));
  };
  return (
    <Container>
      <Top>
        <Seller>
          {isPaying ? null : (
            <Check
              type="checkbox"
              onClick={() => handleSelect(SellerId[0], TotalAmount[0])}
            ></Check>
          )}
          <Name isSelect={isSelect}>{cart.sellerName}</Name>
        </Seller>
        {isPaying || isSelect ? null : (
          <IconContainer onClick={() => handleDeleteSeller(SellerId)}>
            <IconComponent kind={"close"} />
          </IconContainer>
        )}
      </Top>
      {cart.cartDetail.map((Item) => (
        <ItemDetail Item={Item} key={Item.productId} />
      ))}
      <SendDetail>
        {completeOrder ? null : <Hr />}
        {completeOrder ? null : isPaying ? (
          <Section>
            <Wrapper>
              <TotalAmountTitle>商品總計</TotalAmountTitle>
              <Price>{formatter.format(TotalAmount[0])}</Price>
            </Wrapper>
            <Wrapper>
              <TotalAmountTitle>運費總計</TotalAmountTitle>
              <Price>{formatter.format(0)}</Price>
            </Wrapper>
            <Hr />
            <Wrapper>
              <TotalAmountTitle>總共金額</TotalAmountTitle>
              <Price>{formatter.format(TotalAmount[0])}</Price>
            </Wrapper>
          </Section>
        ) : (
          <>
            <Title>選擇收件地與運送方式</Title>
            <Select name="地區">
              <option value="台灣">台灣</option>
            </Select>
            <Select name="交貨方式">
              <option value="面交">面交</option>
            </Select>
          </>
        )}
      </SendDetail>
    </Container>
  );
}







