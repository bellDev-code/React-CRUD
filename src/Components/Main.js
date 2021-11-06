import React, { useContext } from "react";
import { CoffeeContext } from "../Hooks/CoffeeContext";
import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu";
import Menu from "./Menu";

const Main = () => {
  const { editing } = useContext(CoffeeContext);
  return (
    <div>
      <h1>커피 메뉴판</h1>
      {editing ? <EditMenu /> : <AddMenu />}
      <Menu />
    </div>
  );
};

export default Main;
