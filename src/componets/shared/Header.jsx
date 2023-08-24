import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css/Header.css'


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };



    return (
        <header className='navbar'>
            <div className='navbar_total'>
                <div className='navbar_ecome'>
                    <h1 className='navbar_title'>
                        <Link className="navbar_link" onClick={handleLinkClick} to={'/'}>E-commerce</Link>
                    </h1>
                </div>
                <Link to={'/cart'}><i className=' cartmenu bx bx-cart'></i></Link>
                <i className={`navbar_btn bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} onClick={handleMenuClick}></i>
                <div className={`navbar_nav ${isMenuOpen ? 'open' : ''}`}>
                    <button className='navbar_button-' onClick={handleLinkClick} >
                        <Link className="navbar_link" to={'/'}>Home <span> <i className='bx bx-home  '></i></span> </Link>
                    </button >
                    {/* <button className='navbar_button-' onClick={handleLinkClick}>
                        <Link
                            className="navbar_link" to={'/register'}>
                            Register
                            <span>
                                <i className='bx bx-edit-alt'></i>
                            </span>
                        </Link>
                    </button> */}
                    <button className='navbar_button-' onClick={handleLinkClick}>
                        <Link className="navbar_link" to={'/login'}>Login <span><i className='bx bxs-user'></i></span></Link>
                    </button>
                    <button className='navbar_button-' onClick={handleLinkClick}>
                        <Link className="navbar_link" to={'/cart'} > cart   <span><i className='bx bx-cart'></i> </span> </Link>
                    </button>
                    <button className='navbar_button-' onClick={handleLinkClick}>
                        <Link className="navbar_link" to={'/purchases'}> purchases <span><i className='bx bx-cart-download'></i> </span> </Link>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header