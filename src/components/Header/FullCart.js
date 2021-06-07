import styles from "./FullCart.module.css";
import { useContext } from "react";
import { OrdersContext } from "../store/order-context";

const FullCart = (props) => {
  const ctx = useContext(OrdersContext);
  return (
    <div className={styles.cart}>
      <div>Logo</div>
      <button onClick={() => ctx.setShowCart(true)}>Your cart</button>
      <div className={styles.items}>{ctx.orders.length}</div>
    </div>
  );
};

export default FullCart;
