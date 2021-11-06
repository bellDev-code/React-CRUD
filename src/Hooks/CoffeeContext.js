import React, { createContext, useState } from "react";
import EditMenu from "../Components/EditMenu";

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

  const deleteMenu = (id) => {
    // 삭제 기능
    const deleteList = [...coffeeList];

    // for문 돌려서 내가 누른 오브젝트가 id와 일치한지 확인한다.
    for (let i = 0; i < deleteList.length; i++) {
      if (deleteList[i].id === id) {
        // 배열의 원소 삭제하는 방법 생각하기
        deleteList.splice(i, 1);
      }
    }
    setCoffeeList(deleteList);
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", price: 0 };

  const [currentData, setCurrentData] = useState(initialFormState);

  const editRow = (coffee) => {
    setEditing(true);

    setCurrentData({ id: coffee.id, name: coffee.name, price: coffee.price });
  };

  const EditMenu = (id, updateCoffee) => {
    setEditing(false);

    setCoffeeList(
      coffeeList.map((coffee) => (coffee.id === id ? updateCoffee : coffee))
    );
  };

  const updateOnSubmit = (event) => {
    event.preventDefault();

    const name = event.target[0].value;
    const price = event.target[1].value;

    EditMenu(name, price);
  };

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList: coffeeList,
        addMenu: addMenu,
        addOnSubmit: addOnSubmit,
        deleteMenu: deleteMenu,
        editing: editing,
        currentData: currentData,
        editRow: editRow,
        updateOnSubmit: updateOnSubmit,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
