import { useState, useRef } from "react";
import styles from "./AddToCart.module.css";

const AddToCart = (props) => {
  console.log("Add To Cart");
  const [items, setItems] = useState(0);
  const inputRef = useRef();

  const inputChangeHandler = (event) => {
    // console.log(event.target.value);
    setItems(event.target.value);
  };

  const clickHandler = () => {
    // console.log("Click Handler");
    props.onGetValue(inputRef.current.value);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cart_value}>
        <p>Amount</p>
        <input
          type="number"
          // min="1"
          // max="10"
          value={items}
          onChange={inputChangeHandler}
          ref={inputRef}
        />
      </div>
      <div>
        <button type="button" onClick={clickHandler}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
