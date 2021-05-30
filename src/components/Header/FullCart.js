import styles from "./FullCart.module.css";

const Cart = (props) => {
  return (
    <div className={styles.cart}>
      <div>Logo</div>
      <button onClick={props.cartShow}>Your cart</button>
      <div className={styles.items}>{props.totalOrders}</div>
    </div>
  );
};

export default Cart;
