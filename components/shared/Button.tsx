import React, { FC } from "react";

// const Button: FC<{ text: string }> = (props) => {
//   props.text;
//   return (
//     <>
//       <button className="bg-[#00616C] text-white p-3 rounded-full w-[158px] font-semibold mt-8">
//         {props.text}
//       </button>
//     </>
//   );
// };

//After destucturing props
const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <button className="bg-[#00616C] text-white py-3 px-6 rounded-full shadow-lg text-lg font-semibold hover:scale-105 duration-300">
        {text}
      </button>
    </>
  );
};
export default Button;
