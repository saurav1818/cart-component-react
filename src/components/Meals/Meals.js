import Meal from "./Meal";
import styles from "./Meals.module.css";
const Meals = (props) => {
  const getOrder = (order) => {
    console.log("getOrder");
    props.onGetNewOrder(order);
  };

  return (
    <div className={styles.meals}>
      {props.allMeals.map((meal) => {
        return (
          <Meal
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            id={meal.id}
            onGetOrder={getOrder}
          />
        );
      })}
    </div>
  );
};

export default Meals;
