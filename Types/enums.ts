// UP DOWN LEFT RIGHT
// PENDING, SHIPPED, DELIVERED

// WO TYPESCRIPT
const PENDING = 0;
const SHIPPED = 1;
const DELIVERD = 2;

// IN TS, WE CAN USE THE ENUMS
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const status3 = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status3 === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  RIGHT = "right",
  LEFT = "left",
  ERROR = 1234,
}

const move = "left";
if (move === ArrowKeys.LEFT) {
}

const enum OrderStatus2 {
  PENDING2,
  SHIPPED2,
  DELIVERED2,
  RETURNED2,
}

const order = {
  orderNumber: 2234234,
  status: OrderStatus.PENDING,
};

const order2 = {
  orderNumber: 23423423,
  status: OrderStatus2.DELIVERED2,
};
