import { useState } from 'react'
import { postCartThunk } from '../../pages/slices/cart.slice'
import { useDispatch } from 'react-redux'
import './styles/ProductInfo.css'

const ProductInfo = ({ product }) => {


    const [quantity, setQuantity] = useState(1)

    const hanleAdd = () => setQuantity((state) => state + 1)


    const handleMenus = () => {
        if (quantity - 1 >= 1) {
            setQuantity((state) => state - 1)
        }
    }


    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(postCartThunk(product, quantity))
    }


    return (
        <article className='article_resumen'>
            <h3 className='article_resumen-brand'>{product?.brand}</h3>
            <h2 className='article_resumen-title'>{product?.title}</h2>
            <p className='article_resumen-description'>{product?.description}</p>
            <footer className='article_resumen-footer'>
                <ul className='article_resumen-ul'>
                    <li className='article_resumen-li-price'>
                        <span >Price</span>
                        <span>$ {product?.price}</span>
                    </li>
                    <li className='article_resumen-li-quantity'>
                        <span>Quantity</span>
                        <div className='article_resumen-count'>
                            <button onClick={handleMenus}>-</button>
                            <button>{quantity}</button>
                            <button onClick={hanleAdd}>+</button>
                        </div>
                    </li>
                </ul>
                <button className='article_resumen-button' onClick={handleAddToCart}>
                    Add to cart <i className='bx bx-cart'></i>
                </button>
            </footer>
        </article>
    )
}

export default ProductInfo