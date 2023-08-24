import { useState } from 'react'
import { useSelector } from 'react-redux'
import CartProducts from '../componets/home/CartProducts';
import FilterCategory from '../componets/home/FilterCategory';
import FilterPrice from '../componets/home/FilterPrice';

import './Styles/Home.css'


const Home = () => {

    const products = useSelector(states => states.products)


    const [inputValue, setInputValue] = useState("")

    const [priceMinMax, setPriceMinMax] = useState({
        min: 0,
        max: Infinity
    })

    const handleSeaarchName = e => {
        setInputValue(e.target.value.toLowerCase());
    }

    const cbFilter = prod => prod.title.toLowerCase().includes(inputValue)

    const cbFilterPrice = prod => {
        const condMin = priceMinMax.min <= prod.price
        const condMax = prod.price <= priceMinMax.max
        return condMin && condMax
    }

    return (
        <div className='home'>
            <div className='aside_menu'>
                <aside className='aside'>
                    <FilterPrice
                        setPriceMinMax={setPriceMinMax}
                        priceMinMax={priceMinMax}
                    />
                    < FilterCategory />
                </aside>
            </div>
            <div className='menu'>
                <div className='home_input'>
                    <input
                        className='input'
                        value={inputValue}
                        onChange={handleSeaarchName}
                        type="text"
                        placeholder='What are you looking for ? '
                    />
                    <i
                        className='bx bx-search'>
                    </i>
                </div>
                <div className='home_Product-container'>
                    {
                        products?.filter(cbFilter).filter(cbFilterPrice).map((prod) => (
                            <CartProducts
                                key={prod.id}
                                prod={prod}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home