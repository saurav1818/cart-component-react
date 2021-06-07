import { useContext } from "react";
import { OrdersContext } from "../store/order-context";
import CartItem from "./CartItem";

const Cart = () => {
  const ctx = useContext(OrdersContext);
  // let amount = 0;
  // useEffect(() => {
  //   console.log("triggered");
  //   ctx.orders.forEach((order) => {
  //     let a = parseInt(order.items);
  //     let b = order.price * a;
  //     amount += b;
  //     console.log(amount);
  //   });
  // }, [ctx.orders]);

  const amount = () => {
    let amt = 0;
    ctx.orders.forEach((order) => {
      let a = parseInt(order.items);
      let b = order.price * a;
      amt += b;
    });
    return amt;
  };

  return (
    <div style={{ backgroundColor: "green" }}>
      {ctx.orders.map((order) => (
        <CartItem
          key={order.id}
          items={order.items}
          name={order.name}
          price={order.price}
          id={order.id}
        />
      ))}
      <div>
        <h1>Total Amount: {amount()}</h1>
      </div>
    </div>
  );
};

export default Cart;
