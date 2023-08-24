import { useState } from 'react'
import { deleteCartThunk } from '../../pages/slices/cart.slice';
import { useDispatch } from 'react-redux';
import './styles/CartElement.css'

const CartElement = ({ prod }) => {
    const dispatch = useDispatch();
    const [quantity] = useState(prod.quantity);
    console.log(prod);
    const handleDelete = () => {
        dispatch(deleteCartThunk(prod.id));
    };

    return (
        <article className="cart">
            <header className="cart__img">
                <img src={prod.product?.productImgs[0].url} alt="" />
            </header>
            <section className="cart__section">
                <div>
                    <h3>{prod.product.title}</h3>
                </div>
                <p className="price">
                    <span>
                        <span className="unit">Unit</span> :{quantity}
                    </span>
                    <span>
                        <span className="usd"> $</span> {prod.product.price}
                    </span>
                </p>
            </section>
            <div className="subtotal">
                <div>
                    <span className="subtotal-title">subtotal :</span>
                    <span>
                        <span className="usd"> $</span>
                        {quantity * prod.product.price}
                    </span>
                </div>
                <div>
                    <button className="cart_button-delete" onClick={handleDelete}>
                        <i className="bx bx-trash"></i>
                    </button>
                </div>
            </div>
        </article>
    );
};

export default CartElement;
