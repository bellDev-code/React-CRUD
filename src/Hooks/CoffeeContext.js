import React, { createContext, useState } from "react";

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
  const [coffeeList, setCoffeeList] = useState(coffeeData);

  // addOnSubmit에서 받은 value를 인자에 담고
  const addMenu = (name, price) => {
    // Create는 기존 배열의 오브젝트에 추가한다.
    // 그러므로 새로운 오브젝트를 만든다.
    const coffee = {
      id: coffeeList.length,
      name: name,
      price: price,
    };

    // React 메모리 할당
    // 새로운 배열 선언하고, 기존 배열 오브젝트에다가 새로운 오르젝트를 추가한다.
    const newCoffeeList = [...coffeeList, coffee];

    setCoffeeList(newCoffeeList);
  };

  const addOnSubmit = (event) => {
    event.preventDefault();

    // console.log(event);

    // input에 담긴 value값
    const name = event.target[0].value;
    const price = event.target[1].value;

    // 제출되면 addMenu 함수 실행!
    addMenu(name, price);
  };

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList: coffeeList,
        addMenu: addMenu,
        addOnSubmit: addOnSubmit,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
