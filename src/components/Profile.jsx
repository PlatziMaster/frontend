import React from 'react';
fetch("../../data.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#profile").innerText = data.data.profile
    })

const Profile = () => {
    return (
        <section className="profile__container">
            <h1 className="profile__container--title">Profile</h1>
            <h3 className="profile__container--desc" id="profile"></h3>
        </section>
    );
}
export default Profile