import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import {
  getUser,
  getClientOrder,
} from "../../../redux/slices/orderSlice/orderSlice";
import { Navbar } from "../../../components";
import { ThickNavPage } from "../../../components/Page";
import { getAuthToken} from "../../../utils";
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
`;
const Message = styled.p`
  color: ${COLOR.text_2};
  font-size: ${FONT.lg};
  margin: 70px auto;
  text-align:center;
`;
const Container = styled.p`
  margin: 200px auto;
  width: 80%;
  padding: ${DISTANCE.xs};
  min-width: ${MEDIA_QUERY_MD.md};
`;
const Table = styled.table`
  width: 100%;
  min-width: 500px;
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
  margin-top: ${DISTANCE.lg};
`;
const NameContainer = styled.tr`
`;
const Name = styled.th`
  font-size: ${FONT.md};
  color: ${COLOR.black};
  border-bottom: solid 1px ${COLOR.text_2};
  padding: ${DISTANCE.sm};
`;
const ContentContainer = styled.tr`
`;
const Content = styled.td`
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
  border-bottom: solid 1px ${COLOR.text_2};
  padding: ${DISTANCE.sm};
  cursor: pointer;
  &:hover:nth-child(1) {
    color: ${COLOR.hover};
  }
`;
const OrderContent = styled(Link)`
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
  border-bottom: solid 1px ${COLOR.text_2};
  padding: ${DISTANCE.sm};
  cursor: pointer;
  &:hover:nth-child(1) {
    color: ${COLOR.hover};
  }
`;

const ClientOrdersPage = () => {
const navigate = useNavigate();
const location = useLocation();
const currentPath = location.pathname;
const dispatch = useDispatch();
const { orders, formatter } = useOrder();
useEffect(() => {
  if (getAuthToken()) {
    dispatch(getUser());
  }
}, [dispatch]);
useEffect(() => {
  dispatch(getClientOrder())
}, [dispatch]);

  return (
    <>
      <ThickNavPage>
        <Container>
          <Title>訂單查詢</Title>
          {!orders || orders.length === 0 ? (
            <Message>尚無訂單</Message>
          ) : (
            <Table>
              <NameContainer>
                <Name>編號</Name>
                <Name>成立日期</Name>
                <Name>總金額</Name>
                <Name>狀態</Name>
              </NameContainer>
              {orders &&
                orders.map((order) => (
                  <ContentContainer key={order.id}>
                    <OrderContent to={`/orders/${order.id}`}>
                      {order.order_number}
                    </OrderContent>
                    <Content>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </Content>
                    <Content>{formatter.format(order.total_amount)}</Content>
                    <Content>
                      {order.is_canceled
                        ? "已取消"
                        : order.is_sent
                        ? "已出貨"
                        : "未出貨"}
                    </Content>
                  </ContentContainer>
                ))}
            </Table>
          )}
        </Container>
      </ThickNavPage>
    </>
  );
};

export default ClientOrdersPage;
