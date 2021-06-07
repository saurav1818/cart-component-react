import { useContext } from "react";

import { OrdersContext } from "./components/store/order-context";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Description from "./components/Description/Description";
import Cart from "./components/Cart/Cart";
import Card from "./components/UI/Card";

const App = () => {
  const ctx = useContext(OrdersContext);
  return (
    <>
      <Header />
      {ctx.showCart && <Cart />}
      {!ctx.showCart && <Description />}
      <Card>
        <Meals />
      </Card>
    </>
  );
};

export default App;
