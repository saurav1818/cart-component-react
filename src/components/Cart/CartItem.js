import { useState, useContext, useEffect } from "react";
import { OrdersContext } from "../store/order-context";

const CartItem = (props) => {
  console.log("Re-render");
  const orderDetails = { ...props };
  console.log(orderDetails.items);
  const ctx = useContext(OrdersContext);

  console.log(orderDetails);

  const [noOfOrders, setNoOfOrders] = useState(orderDetails.items);

  useEffect(() => {
    setNoOfOrders(orderDetails.items);
  }, [orderDetails.items]);

  useEffect(() => {
    ctx.setOrders((prevState) => {
      if (noOfOrders !== 0) {
        const newState = [...prevState];
        for (let i = 0; i < newState.length; i++) {
          if (newState[i].id === orderDetails.id) {
            newState[i].items = noOfOrders;
          }
        }
        return newState;
      } else if (noOfOrders === 0) {
        const newState = [...prevState];
        let index = -1;
        for (let i = 0; i < newState.length; i++) {
          if (newState[i].id === orderDetails.id) {
            index = i;
            break;
          }
        }

        newState.splice(index, 1);
        return newState;
      }
    });
  }, [noOfOrders]);
  const decrementHandler = () => {
    console.log("Trigerred");
    setNoOfOrders((prevState) => {
      return prevState - 1;
    });
  };

  const incrementHandler = () => {
    console.log("Trigerred");
    setNoOfOrders((prevState) => {
      return parseInt(prevState) + 1;
    });
  };

  return (
    <ul>
      <li>{orderDetails.name}</li>
      <li>{orderDetails.price}</li>
      <li>
        <button onClick={decrementHandler}>-</button>
        <input type="text" value={noOfOrders} readOnly />
        <button onClick={incrementHandler}>+</button>
      </li>
    </ul>
  );
};
export default CartItem;
