import styles from "./Header.module.css";
import Cart from "./FullCart";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1 onClick={props.hideCart}>React Meals</h1>
      <Cart totalOrders={props.totalOrders} cartShow={props.showCart} />
    </div>
  );
};

export default Header;
