import { useState } from "react";

const UseInput = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value: value,
    onChange: onChange,
  };
};

export default UseInput;
