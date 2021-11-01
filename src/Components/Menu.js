import React, { useContext } from "react";
import { CoffeeContext } from "../Hooks/CoffeeContext";

const Menu = () => {
  const { coffeeData } = useContext(CoffeeContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>메뉴</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {coffeeData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
