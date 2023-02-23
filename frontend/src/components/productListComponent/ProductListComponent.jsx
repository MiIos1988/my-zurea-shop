import React, { useEffect, useState } from 'react'
import { GetProductAll } from '../../services/product.service'
import ProductItem from './component/ProductItem';

const ProductListComponent = () => {
    const [productList, setProductList] = useState([])
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        GetProductAll().then(res => setProductList(res.data))
            .catch(err => setErrorMsg(err.message))

    }, []
    )

    return (
        <>
            {
                errorMsg && <p>{errorMsg}</p>
            }
            {
                productList.length ?
                    productList.map((el, index) => {
                        return <ProductItem key={index} product={el} />
                    })
                    :
                    null
            }
        </>
    )
}

export default ProductListComponent
