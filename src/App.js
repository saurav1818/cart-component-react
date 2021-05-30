import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
  const allMeals = [
    {
      id: "meal1",
      name: "Burger",
      description: "Veg Burger",
      price: 60,
    },
    {
      id: "meal2",
      name: "Pizza",
      description: "Veg Pizza",
      price: 180,
    },
    {
      id: "meal3",
      name: "Pasta",
      description: "Italian Pasta",
      price: 120,
    },
    {
      id: "meal4",
      name: "Noodles",
      description: "Garlic Noodles",
      price: 100,
    },
    {
      id: "meal5",
      name: "Momos",
      description: "Veg Momos",
      price: 60,
    },
  ];

  const [orders, setOrders] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const getNewOrder = (newOrder) => {
    console.log("Get New Order");
    const order = { ...newOrder };
    console.log(order);
    setOrders((prevState) => {
      const newState = [...prevState];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === order.id) {
          let a = parseInt(newState[i].items);
          let b = parseInt(order.items);
          a += b;
          newState[i].items = a.toString();
          // const latestState = [...newState];
          return newState;
        }
      }

      newState.push(order);
      return newState;
    });
  };

  const removeOrder = (id) => {
    console.log(id);
    setOrders((prevState) => {
      const newState = [...prevState];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === id) {
          newState.splice(i, 1);
          break;
        }
      }

      return newState;
    });
  };

  const cartShow = () => {
    setShowCart(true);
  };

  const cartHide = () => {
    setShowCart(false);
  };

  console.log("Re-render");
  console.log(orders);

  return (
    <div>
      <Header
        totalOrders={orders.length}
        showCart={cartShow}
        hideCart={cartHide}
      />
      {showCart && <Cart orders={orders} onRemoveOrder={removeOrder} />}
      <Description />
      <Meals allMeals={allMeals} onGetNewOrder={getNewOrder} />
    </div>
  );
};

export default App;
