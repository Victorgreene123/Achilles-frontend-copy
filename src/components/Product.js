import React from "react";

const Product = ({ image, title, description }) => {
  return (
    <div className="bg-white p-6 space-y-5">
      <img className="w-full" src={image} alt="" />
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};

export default Product;
