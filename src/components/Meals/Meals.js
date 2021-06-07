import { useContext } from "react";
import { OrdersContext } from "../store/order-context";
import Meal from "./Meal";
const Meals = () => {
  const ctx = useContext(OrdersContext);
  return (
    <>
      {ctx.allMeals.map((meal) => (
        <Meal key={meal.id} name={meal.name} price={meal.price} id={meal.id} />
      ))}
    </>
  );
};

export default Meals;
