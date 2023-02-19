import React from "react";

const ProductListItemComponent = (props) => {
  const { data } = props;

  return (
    <div>
      <h1 className="display-5">{data.title}</h1>
    </div>
  );
};

export default ProductListItemComponent;
