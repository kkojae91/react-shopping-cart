import React, { useEffect } from "react";
import OrdersListItem from "./OrdersListItem/OrdersListItem";
import * as S from "./OrdersList.styled";

import Empty from "../@shared/Empty/Empty";
import { useOrder } from "../../hooks/useOrder";

const OrdersList = () => {
  const { orders, getOrders } = useOrder();
  const ordersList = Object.values(orders).sort(
    (a, b) => b.order_id - a.order_id
  );

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <S.OrdersList>
      <S.PageTitle>주문목록</S.PageTitle>
      {Object.keys(ordersList).length === 0 ? (
        <Empty>주문목록이 텅 비었어요</Empty>
      ) : (
        <S.List aria-label="orders-list">
          {ordersList.map((order) => (
            <OrdersListItem
              key={order.order_id}
              id={order.order_id}
              items={order.order_details}
            />
          ))}
        </S.List>
      )}
    </S.OrdersList>
  );
};

export default OrdersList;