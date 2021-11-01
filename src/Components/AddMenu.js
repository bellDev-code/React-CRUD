import React from "react";

const AddMenu = () => {
  return (
    <div>
      <h2>메뉴 추가하기</h2>
      <form>
        <label>
          메뉴 이름
          <input type="text" name="name"></input>
        </label>
        <label>
          가격
          <input type="text" name="price"></input>
        </label>
      </form>
    </div>
  );
};

export default AddMenu;
