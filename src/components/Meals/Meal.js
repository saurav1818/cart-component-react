import styles from "./Meal.module.css";
import AddToCart from "./AddToCart";
const Meal = (props) => {
  const getValue = (items) => {
    console.log("Get Value");
    const newOrder = {
      name: props.name,
      description: props.description,
      price: props.price,
      id: props.id,
      items: items,
    };

    props.onGetOrder(newOrder);
  };

  return (
    <div className={styles.meal}>
      <div>
        <h1>{props.name}</h1>
        <h6>{props.description}</h6>
        <h4>{props.price}</h4>
      </div>
      <AddToCart onGetValue={getValue} />
    </div>
  );
};

export default Meal;
