import React, { useEffect, useState } from 'react'
import { getAllData } from '../utils/getData'
import '../styles/components/interest.css'
const Interest = () => {
    const [interestInfo, setInterestInfo] = useState()
    const {interest} = interestInfo || []
    useEffect(() => {
        getAllData()
          .then(res=> setInterestInfo(res))
    },[])
    return (
        <div className="medium_container" >
            <h2>My interests</h2>
            <div className="interest_info">
                {
                    interest?.map(item=>(
                        <h4 id={item.interest} key={item.id}>
                            {item.interest}
                        </h4>
                    ))
                }
            </div>
        </div>
    )
}

export default Interest
