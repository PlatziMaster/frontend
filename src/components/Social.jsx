import React, { useEffect, useState } from 'react'
import { getAllData } from '../utils/getData'
import '../styles/components/social.css'
export const Social = () => {
    const [socialInfo, setSocialInfo] = useState()
    const {social} = socialInfo || []
    useEffect(() => {
        getAllData()
          .then(res=> setSocialInfo(res))
    },[])
  return (
      
    <div className="social_container">
        <h2>social Info</h2>
      <div className="social_info">
        {social?.map(item=>(
          <a href={item.url} id={item.name} key={item.id}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
