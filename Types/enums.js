// UP DOWN LEFT RIGHT
// PENDING, SHIPPED, DELIVERED
// WO TYPESCRIPT
var PENDING = 0;
var SHIPPED = 1;
var DELIVERD = 2;
// IN TS, WE CAN USE THE ENUMS
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var status3 = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status3 === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["RIGHT"] = "right";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys[ArrowKeys["ERROR"] = 1234] = "ERROR";
})(ArrowKeys || (ArrowKeys = {}));
var move = "left";
if (move === ArrowKeys.LEFT) {
}
