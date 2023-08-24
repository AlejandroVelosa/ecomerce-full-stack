
import { useSelector } from 'react-redux'
import CartElement from '../componets/cart/CartElement';
import usePurchases from '../hooks/usePurchases';
import './Styles/CartPage.css'
import { Link } from 'react-router-dom';



const CartPage = () => {
    const cart = useSelector(states => states.cart)

    const totalPrice = cart?.reduce((acc, cv) => {
        const subtotal = cv.quantity * cv.product.price
        return acc + subtotal
    }, 0)


    const { makeAPuschases } = usePurchases(
    )

    const handlePurchases = () => {
        makeAPuschases()

    }

    return (
        <section className='cart_section'>
            <h2 className='cart_section-title'>cart</h2>
            <div className='cart_element'>
                {
                    cart?.map(prod => (
                        < CartElement
                            key={prod.id}
                            prod={prod}
                        />
                    ))
                }
            </div>
            <footer className='cart_footer'>
                <div className='total'>
                    <span className='cart_fotter-total'>total: </span>
                    <span className='cart_footer-price'>$ {totalPrice} USD</span>
                </div>
                <Link className='cart_footer-button' to={'/purchases'}><button className='cart_footer-button' onClick={handlePurchases}>Buy</button></Link>
            </footer>
        </section>
    )
}

export default CartPage