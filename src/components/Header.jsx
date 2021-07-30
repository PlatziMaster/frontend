import React from 'react';
import '../styles/components/Header.styl';
import Gravatar from './Gravatar';
import Title from './Title';
import Subtitle from './Subtitle';

//Icons
import Phone from '../assets/icons/phone.svg';
import Email from '../assets/icons/mail.svg';
import Website from '../assets/icons/software-engineer.svg';
import Facebook from '../assets/icons/facebook-round.svg';
import Twitter from '../assets/icons/twitter-round.svg';
import Github from '../assets/icons/github.svg';
import LinkedIn from '../assets/icons/linkedin-round.svg';

const Header = (props) => {
  const { data } = props;
  console.log(data.social);
  return (
    <div className="Header">
      <div className="Header__title-avatar">
        <div className="Header__avatar-container">
          <Gravatar className="Header__avatar-img" email="jetradl@gmail.com" alt="Avatar" />  
        </div>
        <div className="Header-title">
          <Title title="Header" />
        </div>
      </div>
      <div className="Header__info">
        <div className="Header__info-profile">
          <h2>{data.name}</h2>
          <h3>{data.profession}</h3>
          <p>{data.address}</p>
        </div>
        <div className="Header__infoContainer">
          <div className="Header__info-contact">
            <Subtitle title="Contact" />
            <div className="Header__info-contactElements">
              <div>
                <img src={Phone} alt="Phone icon" />
                <p>{data.phone}</p>
              </div>
              <div>
                <img src={Email} alt="Email icon" />
                <p>{data.email}</p>
              </div>
              <div>
                <img src={Website} alt="Website icon" />
                <a href={data.web}>Website</a>
              </div>
            </div>
          </div>
          <div className="Header__info-social">
            <Subtitle title="Social" />
            <div className="Header__info-socialLinks">
              {/* {
                data.social.map(item => (
                  <div key={item.id}>
                    <img src={Facebook} alt={item.name} />
                    <a href={item.url}>{item.name}</a>
                  </div>
                )
                
                )
              } */}
              <div>
                <img src={Facebook} alt="" />
                <a href="https://www.facebook.com/jorgeelias.tradlopez">Jorge Trad</a>
              </div>
              <div>
                <img src={Twitter} alt="" />
                <a href="https://twitter.-roundjorge_trad">jorge_trad</a>
              </div>
              <div>
                <img src={Github} alt="" />
                <a href="https://github.com/jorgetrad99">jorgetrad99</a>
              </div>
              <div>
                <img src={LinkedIn} alt="" />
                <a href="https://www.linkedin.com/in/jorgetrad/">jorgetrad</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
