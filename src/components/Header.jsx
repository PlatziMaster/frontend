import React from 'react';
fetch("../../data.json")
  .then(response => response.json())
  .then(data => {
    document.querySelector("#profession").innerText = data.data.profession
    document.querySelector("#name").innerText = data.data.name
    document.querySelector("#phone").innerText = data.data.phone
    document.querySelector("#email").innerText = data.data.email
    document.querySelector("#website").innerText = data.data.website
    document.querySelector("#address").innerText = data.data.address
  })

const Header = () => {
  return (
    <header className="header">
      <div className="bar"></div>
      <div className="container">
        <div className="container__image">
          <img className="profile-picture" src="https://pbs.twimg.com/profile_images/1298724749523132422/9Qxh0A8h_400x400.jpg" alt="" />
        </div>
        <div className="container__info">
          <div className="container__info--profession">
            <span className="profession" id="profession"></span>
          </div>
          <div className="container__info--contact">
            <span className="content name" id="name"></span>
            <span className="content phone" id="phone"></span>
            <span className="content email" id="email"></span>
            <span className="content website" id="website"></span>
            <span className="content address" id="address"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header