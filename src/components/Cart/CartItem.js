import { useState, useEffect } from "react";
import styles from "./CartItem.module.css";
const CartItem = (props) => {
  console.log("CartItem");
  const attributes = { ...props };
  console.log(attributes.items);
  const [value, setValue] = useState(attributes.items);

  useEffect(() => {
    setValue(attributes.items);
  }, [attributes.items]);

  useEffect(() => {
    if (value === 0) {
      props.onRemoveItem(attributes.id);
    }
  }, [value, attributes.id]);

  const incrementHandler = () => {
    setValue((prevState) => {
      return parseInt(prevState) + 1;
    });
  };

  const decrementHandler = () => {
    setValue((prevState) => {
      return parseInt(prevState) - 1;
    });
  };

  // if (value === 0) {
  //   props.onRemoveItem(attributes.id);
  // }

  return (
    <div className={styles.main_container}>
      <div className={styles.item}>
        <h4>{attributes.name}</h4>
        <h6>{attributes.price}</h6>
      </div>
      <div>
        {/* {console.log(value)} */}
        <button onClick={incrementHandler}>+</button>
        <input type="number" value={value} readOnly />
        <button onClick={decrementHandler}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
