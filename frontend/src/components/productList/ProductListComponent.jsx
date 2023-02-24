import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"
import { getAllProducts } from "../../services/product.services";
import ProductListItemComponent from "./component/ProductListItemComponent";

const ProductListComponent = () => {
  const [productList, setProductList] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [search, setSearch] = useState('');

  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("search"))
    setSearch(searchParams.get("search"))
  }, [searchParams]
  )

  useEffect(() => {
    getAllProducts(search)
      .then((result) => {
        setProductList(result.data);
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  }, [searchParams]);

  const renderProductListView = () => {
    return productList.map((el, index) => {
      return <ProductListItemComponent data={el} key={index} />;
    });
  };

  return <div>{errorMsg ? <p>{errorMsg}</p> : renderProductListView()}</div>;
};

export default ProductListComponent;





