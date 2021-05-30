import CartItem from "./CartItem";
import styles from "./Cart.module.css";
const Cart = (props) => {
  console.log("Cart");
  console.log(props.orders);
  const removeItem = (id) => {
    props.onRemoveOrder(id);
  };

  const addItem = (id, items) => {
    props.onAddNewOrder(id, items);
  };

  const totalCost = () => {
    let totalAmount = 0;
    props.orders.forEach((order) => {
      totalAmount += parseInt(order.items) * parseInt(order.price);
    });
    return totalAmount;
  };

  return (
    <div className={styles.main_container}>
      {props.orders.map((order) => {
        return (
          <CartItem
            key={order.id}
            id={order.id}
            name={order.name}
            price={order.price}
            items={order.items}
            onRemoveItem={removeItem}
          />
        );
      })}
      <div>
        <h1>Total Amount</h1>
        <h3>a</h3>
      </div>
    </div>
  );
};

export default Cart;
