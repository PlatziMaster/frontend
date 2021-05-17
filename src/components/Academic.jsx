import React, { useEffect, useState } from 'react';
import { getAllData } from '../utils/getData';
import { AcademicCart } from './AcademicCart';
import { makeKey } from '../utils/makeKey';

import '../styles/components/academic.css'
export const Academic = () => {
    const [academicInfo, setAcademicInfo] = useState()
    const {Academic} = academicInfo || []
    useEffect(() => {
        getAllData()
          .then(res=> setAcademicInfo(res))
    },[])
  return (
      
    <div className="academic_container">
        <h2>Academic Info</h2>
      <div className="academic_info">
        {Academic?.map(item=>(
            <AcademicCart
                key={item.id}
                Degree={item.degree}
                Institution={item.institution}
                StartDate={item.startDate}
                EndDate={item.endDate}
            />
        ))}
      </div>
    </div>
  );
};
