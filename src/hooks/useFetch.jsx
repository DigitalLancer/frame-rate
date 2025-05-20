import { useState, useEffect } from "react"
const useFetch = (url) =>{
    const [data, setData]=useState(null);
    useEffect(()=>{
      fetch(url, {
        headers: {Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`}
        
      })
      .then(resp =>
        resp.json()
      ).then(data=>{
        setData(data);
      })
    }, [url])
    return data;
}
export default useFetch;