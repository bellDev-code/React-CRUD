import React, { useContext } from "react";
import { CoffeeContext } from "../Hooks/CoffeeContext";
import UseInput from "../Hooks/UseInput";

const EditMenu = () => {
  const { updateOnSubmit } = useContext(CoffeeContext);

  const name = UseInput();
  const price = UseInput();

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
            type="text"
            name="price"
            value={price.value}
            onChange={price.onChange}
          ></input>
        </label>
        <button>수정하기</button>
      </form>
    </div>
  );
};

export default EditMenu;
