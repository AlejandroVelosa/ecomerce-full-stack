import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CartProducts from '../home/CartProducts'
import './styles/SimilarProducts.css'
const SimilarProducts = ({ product }) => {
    const BASE_URL = import.meta.env.VITE_REACT_APP_URL;
    const baseUrl = BASE_URL


    const [productsByCategory, getProductsByCategory] = useFetch(baseUrl)

    useEffect(() => {
        if (product) {
            getProductsByCategory(`/products?categoryId=${product.category.id}`)
        }
    }, [product])


    return (
        <div className='similar_products'>
            <h2 className='similar_products-title'>Similar Products</h2>
            <div className='home_Product-container'>
                {
                    productsByCategory?.map(prod => {
                        if (product.id !== prod.id) {
                            return (< CartProducts
                                key={prod.id}
                                prod={prod}
                            />)
                        }
                    })
                }
            </div>
        </div>
    )
}

export default SimilarProducts