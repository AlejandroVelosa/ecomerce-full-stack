import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../componets/productId/ProductInfo"
import SimilarProducts from "../componets/productId/SimilarProducts"
import SliderImgs from "../componets/productId/SliderImgs"
import './Styles/ProductIdPage.css'

const ProductIdPage = () => {

    const { id } = useParams()

    const BASE_URL = import.meta.env.VITE_REACT_APP_URL;

    const baseUrl = BASE_URL
    const [product, getProductById] = useFetch(baseUrl)

    useEffect(() => {
        getProductById(`/products/${id}`)
    }, [id])

    return (
        <div className="productId">
            <div className="productId_volver">
                <button>
                    <Link to={'/'}> <i className="bx bx-left-arrow-alt"></i></Link>
                </button>
                <h3>{product?.title}</h3>
            </div>
            <div className="productId_flex">
                <div className="sliderimgs">
                    <SliderImgs
                        product={product}
                    />
                </div>
                <div className="productinfo">
                    <ProductInfo
                        product={product}
                    />
                </div>
            </div>
            <SimilarProducts
                product={product}
            />
        </div>
    )
}

export default ProductIdPage