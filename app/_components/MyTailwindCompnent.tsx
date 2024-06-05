import React from "react";

const MyTailwindCompnent = () => {
  return (
    <div className="bg-gray-500 w-[500px] h-[500px] m-auto mt-[200px] rounded-md flex gap-[40px] justify-between">
      <p className={"text-white text-[40px] p-[20px] bg-[#c78181]"}>
        Hello Tailwind
      </p>
      <p className="bg-red-400 p-[20px] pt-10 ml-[20px] hover:bg-green-400 cursor-pointer">
        Footer
      </p>
      <p>asdas</p>
    </div>
  );
};
export default MyTailwindCompnent;
