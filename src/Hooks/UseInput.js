import { useState } from "react";

const useInput = (initialValue) => {
  // 목적 : 반복적인

  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value: value,
    onChange: onChange,
  };
};

export default useInput;

// const useCurrentData = (currentData) => {
//   // 목적 : 반복적인

//   const [value, setValue] = useState(currentData);

//   const onChange = (event) => {
//     if (event.target.name === 'name') {

//     setValue({
//       id: 0,
//       name: event.target.value,
//       price: value.price
//     });
//   } else if (event.target.name === 'price') {
//     setValue({
//       id: 0,
//       name: value.name,
//       price: event.target.value
//     });
//   };

//   return {
//     value: value,
//     onChange: onChange,
//   };
// };
