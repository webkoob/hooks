import axios from "axios"
import { useEffect, useState } from "react"

const instance = axios.create({
    baseURL: 'Your Link Api' // https:webkoob.ir/api/
})

const useAxios = (axiosPrompts,body) => {
    const [response,setResponse] = useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)

    const promptsWithbody = {
        ...axiosPrompts,
        ...(body &&
            {
                data: {
                    Authorization : `Bearer ${cookies.get('token')}` // set body ( Sending token in body automatically, when we make a request to the server )
                }
            }
        ) 
    }

    const fetchData = async() => {
        try {
            const result = await instance.request(promptsWithbody)
            setResponse(result)
        } catch(error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData() // The function is called when the url is reset
    },[axiosPrompts.url])

    return [response,error,loading] // or {response,error,loading}
}


export default useAxios // programming Amir Hossein Ranjbar 