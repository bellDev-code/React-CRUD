import React, { useContext } from "react";
import { CoffeeContext } from "../Hooks/CoffeeContext";

const Menu = () => {
  const { coffeeList, deleteMenu } = useContext(CoffeeContext);
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
          {coffeeList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deleteMenu(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
