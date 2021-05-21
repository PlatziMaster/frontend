import React from 'react';
import '../styles/components/BasicInfo.styl';

export default function BasicInfo({ phone, profession, address, email }) {
  return (
    <div className="Info">
      <div className="phone">{phone}</div>
      <div className="profession">
        <p className="profession__text">{profession}</p>
      </div>
      <div className="address">{address}</div>
      <div className="email">{email}</div>
    </div>
  );
}
