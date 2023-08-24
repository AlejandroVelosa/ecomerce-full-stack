import { useForm } from "react-hook-form"
import './styles/FilterPrice.css'


const FilterPrice = ({ priceMinMax, setPriceMinMax }) => {


    const { register, reset, handleSubmit } = useForm()

    const submit = data => {
        const min = data.from.trim() === "" ? 0 : +data.from
        const max = data.to.trim() === "" ? Infinity : +data.to

        setPriceMinMax({ min, max })
    }

    const handleClearFilter = () => {
        setPriceMinMax({ min: 0, max: Infinity })
        reset({
            from: '',
            to: '',
        })
    }


    return (
        <article className="article-container">
            <h3 className="article-title">Price</h3>
            <form className="article-form" onSubmit={handleSubmit(submit)}>
                <div>
                    <label className="article-label" htmlFor="from">From</label>
                    <input {...register('from')} type="number" id="from" className="article-input" />
                </div>
                <div>
                    <label className="article-label" htmlFor="to">To</label>
                    <input {...register('to')} type="number" id="to" className="article-input" required />
                </div>
                <button className="article-button">Filter Price</button>
            </form>
            {
                priceMinMax.min !== 0 || priceMinMax.max !== Infinity ? (
                    <p className="article-info">
                        <span>From</span> {priceMinMax.min} <span>to </span>{priceMinMax.max}
                        <b onClick={handleClearFilter} className="article-clear">x</b>
                    </p>
                ) : null
            }
        </article>

    )
}

export default FilterPrice