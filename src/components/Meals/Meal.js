import { useRef, useContext, useState } from "react";
import { OrdersContext } from "../store/order-context";
import styles from "./Meal.module.css";
const Meal = (props) => {
  const mealInfo = { ...props };
  const ctx = useContext(OrdersContext);
  const inputRef = useRef();
  const [items, setItems] = useState(1);

  const setItemsHandler = (event) => {
    setItems(event.target.value);
  };

  const newOrder = () => {
    setItems(1);
    ctx.setOrders((prevState) => {
      console.log("New Order");
      console.log(items);
      // console.log(inputRef.current.value);
      const newOrder = { ...mealInfo, items: items };
      console.log(newOrder);

      console.log(prevState);
      if (prevState.length === 0) {
        const newState = [newOrder, ...prevState];
        return newState;
      } else {
        const newState = [...prevState];
        for (let i = 0; i < newState.length; i++) {
          if (newState[i].id === newOrder.id) {
            console.log("Match ID");
            let a = parseInt(newState[i].items);
            let b = parseInt(newOrder.items);
            console.log(a);
            console.log(b);
            newState[i].items = a + b;
            console.log(newState[i].items);
            return newState;
          }
        }
        newState.push(newOrder);
        return newState;
      }
    });
  };
  return (
    <ul className={styles.meals_list}>
      <li className={styles.meals_item}>
        <div>{props.name}</div>
        <div>₹ {props.price}</div>
      </li>

      <div>
        <li>
          <input
            type="number"
            ref={inputRef}
            min="1"
            max="5"
            step="1"
            value={items}
            onChange={setItemsHandler}
          />
          <button onClick={newOrder}>Add</button>
        </li>
      </div>
    </ul>
  );
};

export default Meal;
