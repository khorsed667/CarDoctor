import React from "react";

const Button = ({buttonName}) => {
  return (
    <button className="bg-orange-600 rounded-md cursor-pointer my-3">
      <p className="text-white p-3">{buttonName}</p>
    </button>
  );
};

export default Button;
