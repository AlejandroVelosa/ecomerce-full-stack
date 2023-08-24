import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState()
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // Get
    const getApi = (path) => {
        const url = `${baseUrl}${path}`
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                setInfoApi(res.data)
                setHasError(false)
        })
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
            .finally(() => {
            setIsLoading(false)
        })
    }


    return[infoApi , getApi , hasError , isLoading ]

}

export default useFetch