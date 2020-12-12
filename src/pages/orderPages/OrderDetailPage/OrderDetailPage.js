import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Navbar } from "../../../components";
import { ThickNavPage } from "../../../components/Page";
import { NormalButton } from "../../../components/Button";
import { NavLink, useNavigate, useLocation, Link ,useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getUser,
  getDetailOrder,
  cancelOrder,
} from "../../../redux/slices/orderSlice/orderSlice";
import { getAuthToken } from "../../../hooks/orderHooks/useOrder";
import useOrder from "../../../hooks/orderHooks/useOrder";
import {
  COLOR,
  FONT,
  MEDIA_QUERY_MD,
  DISTANCE,
} from "../../../constants/style";
const Title = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.lg};
  width: 30%;
  padding: ${DISTANCE.xs};
  border-bottom: solid 1px ${COLOR.text_2};
`;
const Message = styled.p`
  color: red;
  font-size: ${FONT.md};
  width: 30%;
  padding: ${DISTANCE.xs};
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%), translateY(-50%);
`;
const OrderNumber = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.md};
  width: 50%;
  padding: ${DISTANCE.xs};
`;
const Detail = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.md};
  width: 50%;
  padding: ${DISTANCE.xs};
  margin-top: 70px;
`;
const Container = styled.p`
  margin: 100px auto;
  width: 90%;
  padding: ${DISTANCE.xs};
  min-width: ${MEDIA_QUERY_MD.md};
`;
const Table = styled.table`
  width: 90%;
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
  border-bottom: solid 1px ${COLOR.text_2};
`;
const NameContainer = styled.tr``;
const Name = styled.th`
  font-size: ${FONT.md};
  color: ${COLOR.black};
  border-bottom: solid 1px ${COLOR.text_2};
  padding: ${DISTANCE.sm};
`;
const ContentContainer = styled.tr``;
const Content = styled.td`
  font-size: ${FONT.md};
  color: ${COLOR.black};
  padding: ${DISTANCE.sm};
  cursor: pointer;
`;
const ProductContent = styled.td`
  font-size: ${FONT.md};
  color: ${COLOR.black};
  padding: ${DISTANCE.sm};
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Photo = styled.div`
  width: 90px;
  height: 90px;
`;
const PhotoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Product = styled.p`
  font-size: ${FONT.md};
  color: ${COLOR.black};
`;
const TotalTable = styled.table`
  width: 90%;
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
`;
const PayTitle = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.md};
  padding: ${DISTANCE.xs};
  margin-top: 74px;
  width: 90%;
  border-bottom: solid 1px ${COLOR.text_2};
`;
const PayTable = styled.table`
  width: 90%;
  margin-top: 74px;
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
`;
const Track = styled.div`
  border: solid 1px ${COLOR.btn_primary};
  background: ${COLOR.white};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-bottom: 60px;
  z-index: 1;
`;
const Line = styled.div`
  border: solid 1px ${COLOR.text_2};
  height: 68px;
  margin-bottom: 7px;
`;
const LineWrapper = styled.div`
  position: absolute;
  left: 4px;
  top: 11px;
`;
const PayLineWrapper = styled.div`
  position: absolute;
  left: 4px;
  top: 12px;
`;
const TrackContent = styled.div`
  display: flex;
  width: 90px;
  justify-content: space-between;
  align-items: baseline;
`;
const Status = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.xs};
`;
const Section = styled.div`
  position: absolute;
  top: 20%;
  left: 90%;
  transform: translateX(-50%), translateY(-50%);
`;
const PaySection = styled.div`
  position: absolute;
  top: 147%;
  left: 90%;
  transform: translateX(-50%), translateY(-50%);
`;
const PayTrack = styled.div`
  border: solid 1px ${COLOR.btn_primary};
  background: ${COLOR.white};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-bottom: 60px;
  z-index: 1;
`;
const ButtonSection = styled.div`
  position: absolute;
  top: 147%;
  left: 82%;
  transform: translateX(-50%), translateY(-50%);
`;
const OrderButtonSection = styled.div`
  position: absolute;
  top: 20%;
  left: 82%;
  transform: translateX(-50%), translateY(-50%);
  width: 50px;
`;
const Button = styled.div`
  padding: 5px 10px;
  border-radius: 4px;
  border: solid 1px ${COLOR.text_2};
  background-color: ${COLOR.text_2};
  color: ${COLOR.bg_primary};
  margin: 0px ${(props) => (props.$margin === 0 ? 0 : 20)}px;
  min-width: max-content;
  margin-bottom: 40px;
`;
const LoadingMessage = styled.div`
  color: ${COLOR.text_2};
  font-size: ${FONT.lg};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%), translateY(-50%);
`;

const OrderDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailOrder, user, isLoading } = useOrder();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getDetailOrder(id));
    dispatch(getUser());
  }, [dispatch,id]);
  const handleCancelOrder = () => {
    dispatch(cancelOrder(id))
    navigate(-1);
  }
  return (
    <>
      <Navbar />
      <ThickNavPage>
        {isLoading ? (
          <LoadingMessage>loading</LoadingMessage>
        ) : (
          <>
            <Container>
              <Title>編號</Title>
              <OrderNumber>
                {detailOrder && detailOrder[0].Order.order_number}
              </OrderNumber>
              <Detail>詳細</Detail>

              <Table>
                <NameContainer>
                  <Name>商品</Name>
                  <Name>金額</Name>
                  <Name>數量</Name>
                  <Name>小記</Name>
                </NameContainer>
                {detailOrder &&
                  detailOrder.map((data) => (
                    <ContentContainer>
                      <ProductContent>
                        <Photo>
                          <PhotoImg src={data.product_picture_url} />
                        </Photo>
                        <Product>{data.product_name}</Product>
                      </ProductContent>
                      <Content>NT${data.product_price}</Content>
                      <Content>{data.product_quantity}</Content>
                      <Content>
                        NT${data.product_price * data.product_quantity}
                      </Content>
                    </ContentContainer>
                  ))}
              </Table>
              <TotalTable>
                <ContentContainer>
                  <Content></Content>
                  <Content></Content>
                  <Content>小記</Content>
                  <Content></Content>
                </ContentContainer>
                <ContentContainer>
                  <Content></Content>
                  <Content></Content>
                  <Content>運費</Content>
                  <Content>NT$0</Content>
                </ContentContainer>
                <ContentContainer>
                  <Content></Content>
                  <Content></Content>
                  <Content>總額</Content>
                  <Content>NT$500</Content>
                </ContentContainer>
              </TotalTable>
              <PayTitle>付款方式及配送</PayTitle>
              <PayTable>
                <ContentContainer>
                  <Content>狀態</Content>
                  <Content>
                     {detailOrder && detailOrder[0].Order.is_sent ? "已出貨" : "備貨中"}
                  </Content>
                  <Content>編號</Content>
                  <Content> {detailOrder && detailOrder[0].Order.order_number}</Content>
                </ContentContainer>
                <ContentContainer>
                  <Content>付款方案</Content>
                  <Content>貨到付款</Content>
                  <Content>配送</Content>
                  <Content>
                     {detailOrder && detailOrder[0].product_delivery ? "面交" : "超商取貨"}
                  </Content>
                </ContentContainer>
                <ContentContainer>
                  <Content>備註</Content>
                  <Content> {detailOrder && detailOrder[0].Order.content}</Content>
                  <Content>日期</Content>
                  <Content>
                     {detailOrder &&
                      new Date(detailOrder[0].createdAt).toLocaleDateString()}
                  </Content>
                </ContentContainer>
              </PayTable>
              <PayTitle>賣家資料</PayTitle>
              <PayTable>
                <ContentContainer>
                  <Content>真實姓名</Content>
                  <Content> {detailOrder && detailOrder[0].Order.seller_name}</Content>
                  <Content></Content>
                  <Content></Content>
                </ContentContainer>
                <ContentContainer>
                  <Content>Email</Content>
                  <Content> {detailOrder && detailOrder[0].Order.seller_email}</Content>
                  <Content></Content>
                  <Content></Content>
                </ContentContainer>
                
              </PayTable>
              <PayTitle>收件人資料</PayTitle>
              <PayTable>
                <ContentContainer>
                  <Content>真實姓名</Content>
                  <Content> {detailOrder && detailOrder[0].Order.client_name}</Content>
                  <Content></Content>
                  <Content></Content>
                </ContentContainer>
                <ContentContainer>
                  <Content>地址</Content>
                  <Content> {detailOrder && detailOrder[0].Order.client_address}</Content>
                  <Content></Content>
                  <Content></Content>
                </ContentContainer>
                
              </PayTable>
               {detailOrder && detailOrder[0].Order.is_canceled ? (
                <Message>訂單已取消</Message>
              ) : (
                <>
                  <ButtonSection>
                    <NormalButton></NormalButton>
                  </ButtonSection>
                  <OrderButtonSection>
                     {detailOrder && detailOrder[0].Order.is_sent ? (
                      <Button>取消訂單</Button>
                    ) : (
                      <NormalButton
                        style={{
                          "margin-bottom": "40px",
                        }}
                        onClick={handleCancelOrder}
                      >
                        取消訂單
                      </NormalButton>
                    )}
                    {user && user.is_vendor ? (
                      <>
                        <NormalButton
                          style={{
                            "margin-bottom": "40px",
                          }}
                        >
                          完成出貨
                        </NormalButton>
                        <NormalButton>完成訂單</NormalButton>
                      </>
                    ) : null}
                  </OrderButtonSection>
                  <Section>
                    <LineWrapper>
                      <Line></Line>
                      <Line></Line>
                      <Line></Line>
                    </LineWrapper>
                    <TrackContent>
                      <Track></Track>
                      <Status>訂單成立</Status>
                    </TrackContent>
                    <TrackContent>
                      <Track></Track>
                      <Status>備貨中</Status>
                    </TrackContent>
                    <TrackContent>
                      <Track></Track>
                      <Status>已出貨</Status>
                    </TrackContent>
                    <TrackContent>
                      <Track></Track>
                      <Status>完成訂單</Status>
                    </TrackContent>
                  </Section>
                  <ButtonSection>
                    <NormalButton>完成付款</NormalButton>
                  </ButtonSection>
                  <PaySection>
                    <PayLineWrapper>
                      <Line></Line>
                    </PayLineWrapper>
                    <TrackContent>
                      <PayTrack></PayTrack>
                      <Status>尚未付款</Status>
                    </TrackContent>
                    <TrackContent>
                      <PayTrack></PayTrack>
                      <Status>完成付款</Status>
                    </TrackContent>
                  </PaySection>
                </>
              )}
              <NormalButton
                style={{
                  "margin-top": "70px",
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                onClick={() => navigate(-1)}
              >
                回總覽
              </NormalButton>
               
            </Container>
          </>
        )}
      </ThickNavPage>
    </>
  );
};

export default OrderDetailPage;
