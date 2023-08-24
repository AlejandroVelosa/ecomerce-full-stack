import { useEffect } from "react"
import usePurchases from "../hooks/usePurchases"
import PurchaseCard from "../componets/purchases/PurchaseCard"
import './Styles/Purchases.css'
import { Link } from "react-router-dom"

const PurchasesPages = () => {

    const { purchases, getAllPurchases } = usePurchases()

    useEffect(() => {
        getAllPurchases()
    }, [])
    return (
        <div className="purchases">
            <div className="purchases_title-total">
                <Link to={'/'}>    <i className=" volver bx bx-left-arrow-alt"></i></Link>
                <h2 className="purchases_title"> purshases</h2>
            </div>
            <div className="purchases_container">
                {
                    purchases?.map(prod => (
                        < PurchaseCard
                            key={prod.id}
                            prod={prod}
                        />
                    ))
                }
            </div>
            <Link to={'/'}><button className="purchases_button">
                back to shopping
            </button></Link>
        </div>
    )
}

export default PurchasesPages