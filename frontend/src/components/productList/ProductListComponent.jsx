import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"
import { getAllProducts } from "../../services/product.services";
import ProductListItemComponent from "./component/ProductListItemComponent";

const ProductListComponent = () => {
  const [productList, setProductList] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [search, setSearch] = useState('');
  const [paginationObj, SetPaginationObj] = useState({
    page: 0,
    totalItems: 0,
    elPerPage: 12
  })
  const [searchParams] = useSearchParams();



  // useEffect(() => {
  //   console.log(searchParams.get("search"))
  //   setSearch(searchParams.get("search"))
  // }, [searchParams]
  // )

  useEffect(() => {
    getAllProducts(paginationObj.page, paginationObj.elPerPage)
      .then((result) => {
        setProductList(result.data.elements);
        SetPaginationObj({
          page: result.data.page,
          totalItems: result.data.totalItems,
          elPerPage: result.data.elPerPage
        })
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  }, [searchParams]);


  useEffect(() => {
    !isNaN(paginationObj.page) && getAllProducts(paginationObj.page, paginationObj.elPerPage)
      .then((result) => {
        setProductList(result.data.elements);
        SetPaginationObj({
          page: result.data.page,
          totalItems: result.data.totalItems,
          elPerPage: result.data.elPerPage
        })
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });

  }, [paginationObj.page]
  )

  const renderProductListView = () => {
    return productList.map((el, index) => {
      return <ProductListItemComponent data={el} key={index} />;
    });
  };

  const renderPaginationNumber = () => {
    let pageNumber = Math.ceil(paginationObj.totalItems / paginationObj.elPerPage)
    const arrayPag = [...Array(pageNumber).keys()]

    return arrayPag.map((number) => {
      return <li className="page-item" key={number} onClick={() => {
        SetPaginationObj(prevState => ({ ...prevState, page: number }))
      }
      }><p className="page-link" >{number + 1}</p></li>
    }
    )
  }

  return <div className="row">
    <div className="d-flex gap-5 flex-wrap justify-content-center">{errorMsg ? <p>{errorMsg}</p> : renderProductListView()}</div>;
    <div className="row my-5 ">
      {/* <div className="col-12  "> */}
      <nav aria-label="Page navigation example" className="d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item" onClick={() => {
            if (paginationObj.page > 0) {

              SetPaginationObj(prevState => ({ ...prevState, page: paginationObj.page - 1 }))
            }
          }
          }><p className="page-link">Previous</p></li>
          {
            renderPaginationNumber()
          }
          <li className="page-item" onClick={() => {
            let pageNumber = Math.ceil(paginationObj.totalItems / paginationObj.elPerPage)
            console.log(pageNumber)
            console.log(paginationObj.page)
            if (paginationObj.page + 1 < pageNumber) {
              SetPaginationObj(prevState => ({ ...prevState, page: paginationObj.page + 1 }))
            }
          }
          }><p className="page-link">Next</p></li>
        </ul>
      </nav>
      {/* </div> */}
    </div>
  </div>
};

export default ProductListComponent;





