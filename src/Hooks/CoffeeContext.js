import React, { createContext } from "react";

const coffeeData = [
  {
    id: 0,
    name: "아메리카노",
    price: 4000,
  },
  {
    id: 1,
    name: "카페라떼",
    price: 4500,
  },
];

export const CoffeeContext = createContext(undefined);

export const CoffeeContextProvider = ({ children }) => {
  return (
    <CoffeeContext.Provider
      value={{
        coffeeData: coffeeData,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
