import { useState, useEffect } from 'react';
import getData from '../utils/getData'

const useInitialState = (API) => {
    const [ApiData, setData] = useState([])

    useEffect(() => {
      getData(API, setData)
    }, [])
    return ApiData;
}
export default useInitialState