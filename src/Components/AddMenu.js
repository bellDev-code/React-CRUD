import React, { useContext } from "react";
import { CoffeeContext } from "../Hooks/CoffeeContext";
import UseInput from "../Hooks/UseInput";

const AddMenu = () => {
  const { addOnSubmit } = useContext(CoffeeContext);

  const name = UseInput();
  const price = UseInput();

  // input의 value값 확인
  // console.log(name, price);

  return (
    <div>
      <h2>메뉴 추가하기</h2>
      <form onSubmit={addOnSubmit}>
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
        <button>메뉴 추가하기</button>
      </form>
    </div>
  );
};

export default AddMenu;
