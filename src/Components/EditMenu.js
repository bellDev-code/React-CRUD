import React, { useContext, useState } from "react";
import { CoffeeContext } from "../Hooks/CoffeeContext";
import UseInput from "../Hooks/UseInput";

const EditMenu = () => {
  const { updateOnSubmit, currentData } = useContext(CoffeeContext);

  console.log(currentData);

  // const id = UseInput(currentData.id);
  const name = UseInput(currentData.name);
  const price = UseInput(currentData.price);

  // const currData = useCurrentData(currentData);

  // const [name, setName] = useState(currentData.name);
  // const [price, setPrice] = useState(currentData.price);

  // const onChangeName = (event) => {
  //   setName(event.target.value);
  // };

  // const onChangePrice = (event) => {
  //   setPrice(event.target.value);
  // };

  return (
    <div>
      <h2>메뉴 수정하기</h2>
      <form onSubmit={updateOnSubmit}>
        <label>
          메뉴 이름
          <input
            type="text"
            name="name"
            value={name.value}
            onChange={name.onChange}
          ></input>
        </label>
        <label>
          가격
          <input
            type="number"
            name="price"
            value={price.value}
            onChange={price.onChange}
          ></input>
        </label>
        <input
          style={{ display: "none" }}
          name="id"
          value={currentData.id}
          onChange={() => null}
        ></input>
        <button>수정하기</button>
      </form>
    </div>
  );
};

export default EditMenu;
