import React, { useEffect, useState } from 'react'
import { AcademicCart } from './AcademicCart'
import '../styles/components/certificate.css'
import { getAllData } from '../utils/getData'
import CertificateCart from './CertificateCart'
const Certificates = () => {
     const [certificatesInfo, setCertificatesInfo] = useState()
    const {certificate} = certificatesInfo || []
    useEffect(() => {
        getAllData()
          .then(res=> setCertificatesInfo(res))
    },[])
    return (
        <div className="certificates_container">
        <h2>Certificates Info</h2>
        <div className="certificates_info">
        {certificate?.map(item=>(
            <CertificateCart
                key={item.id}
                Name={item.name}
                Institution={item.institution}
                Date={item.date}
            />
        ))}
      </div>
    </div>
    )
}

export default Certificates
