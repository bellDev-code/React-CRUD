import React, { useContext } from "react";
import { CoffeeContext } from "../Hooks/CoffeeContext";

const Menu = () => {
  const { coffeeList, deleteMenu, editRow } = useContext(CoffeeContext);
  return (
    <div>
      <h2>메뉴판</h2>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>메뉴</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {coffeeList.map((coffee) => (
            <tr key={coffee.id}>
              <td>{coffee.id}</td>
              <td>{coffee.name}</td>
              <td>{coffee.price}</td>
              <td>
                <button onClick={() => editRow(coffee)}>Edit</button>
                <button onClick={() => deleteMenu(coffee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
