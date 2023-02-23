import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAllProducts } from "../../services/product.services";
import ProductListItemComponent from "./component/ProductListItemComponent";

const ProductListComponent = () => {
  const [productList, setProductList] = useState([]);
  const [errorMsg, setErrorMsg] = useState();

  const params = useParams();

  useEffect((params) => {
    console.log(params)
  }, [params]
  )

  useEffect(() => {
    getAllProducts()
      .then((result) => {
        setProductList(result.data);
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  }, []);

  const renderProductListView = () => {
    return productList.map((el, index) => {
      return <ProductListItemComponent data={el} key={index} />;
    });
  };

  return <div>{errorMsg ? <p>{errorMsg}</p> : renderProductListView()}</div>;
};

export default ProductListComponent;





