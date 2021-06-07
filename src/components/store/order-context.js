import React, { useState } from "react";

export const OrdersContext = React.createContext();

export const OrdersProvider = (props) => {
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

  return (
    <OrdersContext.Provider
      value={{
        allMeals: allMeals,
        orders: orders,
        setOrders: setOrders,
        showCart: showCart,
        setShowCart: setShowCart,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};
