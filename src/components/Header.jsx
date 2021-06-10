import React from 'react';

const Header = ({ name, profession, address, email, website, phone, avatar, social = [] }) => {

  return (
    <div className='header__container'>
      <figure className='header__pic'>
        <img src={avatar} alt="Mariana's avatar" />
      </figure>
      <div className='header__info'>
        <h1>{name}</h1>
        <h2 className='info__profession'>{profession}</h2>
        <div className='info__contact'>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
        <div className='info__social'>
          <a href={address}>Address</a>
          <a href={website}>Github</a>

          {
            social.map((s) => {
              return (
                <div key={s.id} className='header__social'>
                  <a href={s.url}>{s.name}</a>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Header;

