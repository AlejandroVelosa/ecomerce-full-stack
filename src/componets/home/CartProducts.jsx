
import { useNavigate } from 'react-router-dom'
import './styles/CartProducts.css'
import { postCartThunk } from '../../pages/slices/cart.slice'
import { useDispatch } from 'react-redux'

const CartProducts = ({ prod }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()




    const handleDetail = () => {
        navigate(`/product/${prod.id}`)
    }

    const handleAddCart = e => {
        e.stopPropagation()
        dispatch(postCartThunk(prod))


    }

    console.log(prod);

    return (
        <article onClick={handleDetail} className='product'>
            <header className='product_header'>
                <div className='product_img-container'>
                    <img className='product_img' src={prod?.productImgs[1].url} alt="" />
                </div>
                <div className='product_img-container'>
                    <img className='product_img' src={prod?.productImgs[2].url} alt="" />
                </div>
            </header>
            <section className='product_body'>
                <header className='product_titles'>
                    <h3 className='product_brand'>{prod.brand}</h3>
                    <h2 className='product_name'>{prod.title}</h2>
                </header>
                <article className='product_price'>
                    <span className='product_price-label'>Price</span>
                    <h3 className='product_price-value'>{prod.price}</h3>
                </article>
                <button className='product_btn' onClick={handleAddCart}>
                    <i className='bx bx-cart'></i>
                </button>
            </section>
        </article>
    )
}

export default CartProducts