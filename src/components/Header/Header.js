import { useContext } from "react";
import { OrdersContext } from "../store/order-context";
import styles from "./Header.module.css";
import FullCart from "./FullCart";

const Header = () => {
  const ctx = useContext(OrdersContext);
  return (
    <div className={styles.header}>
      <h1
        onClick={() => {
          ctx.setShowCart(false);
        }}
      >
        React Meals
      </h1>
      <FullCart />
      {/* <h4>Cart: {ctx.orders.length}</h4> */}
    </div>
  );
};

export default Header;
