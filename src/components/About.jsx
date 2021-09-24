/* eslint-disable import/prefer-default-export */
import React from 'react';
import { FaEnvelope, FaWhatsapp, FaHome, FaUserAlt } from 'react-icons/fa';

export const About = () => {
  return (
    <div className='About-container'>
      <p className='About-item'>
        <i className='About-item__icon'>
          <FaUserAlt />
        </i>
        Frontend Developer Jr
      </p>
      <p className='About-item'>
        <i className='About-item__icon'>
          <FaEnvelope />
        </i>
        sebastian.moreno.contacto@gmail.com
      </p>
      <p className='About-item'>
        <a
          className='About-item-link'
          href='https://acortar.link/k7nrBk'
          target='_blank'
          rel='noreferrer'
        >
          <i className='About-item__icon'>
            <FaHome />
          </i>
          Personal Page
        </a>
      </p>
      <p className='About-item'>
        <a
          className='About-item-link'
          href='https://api.whatsapp.com/send/?phone=573116492445&text&app_absent=0'
          target='_blank'
          rel='noreferrer'
        >
          <i className='About-item__icon'>
            <FaWhatsapp />
          </i>
          +57 3116492445
        </a>
      </p>
    </div>
  );
};
