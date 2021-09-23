import { useState, useEffect } from "react";


export const getData = (url) => {
    const [state, setState] = useState ({loading: true, data: [], error: false});
    useEffect(()=>{
        fetch(url)
            .then(resp => resp.json())
            .then(data =>{
                setState({
                    loading: false,
                    error: false,
                    data
                })
            })
    },[])
    return state;
}

export default getData;
