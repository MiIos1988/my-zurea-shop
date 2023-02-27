import React from "react";
import { useNavigate } from "react-router-dom";

const ProductListItemComponent = (props) => {
  const { data } = props;
  // console.log(data)
  const navigate = useNavigate()

  return (
    <div className="product" >
      <img src={data.imgUrl} alt="" />
      <h1>{data.title}</h1>
    </div>
  );
};

export default ProductListItemComponent;
