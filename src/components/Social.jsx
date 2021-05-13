import React from 'react';
fetch("../../data.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#social__item--name1").innerText = data.social[0].name
        document.querySelector("#social__item--username1").innerText = data.social[0].username

        document.querySelector("#social__item--name2").innerText = data.social[1].name
        document.querySelector("#social__item--username2").innerText = data.social[1].username
        
        document.querySelector("#social__item--name3").innerText = data.social[2].name
        document.querySelector("#social__item--username3").innerText = data.social[2].username
    })

const Social = () => {
    return (
        <section className="social__container">
            <h1 className="social__container--title">Social</h1>
            <div className="social__items__container">
                <div className="social__container--item">
                    <h1 className="social__item--name" id="social__item--name1"></h1>
                    <a href="https://twitter.com/GironLansdorp" className="social__item--username" id="social__item--username1"></a>
                </div>
                <div className="social__container--item">
                    <h1 className="social__item--name" id="social__item--name2"></h1>
                    <a href="https://github.com/alexanderlgrs" h3 className="social__item--username" id="social__item--username2"></a>
                </div>
                <div className="social__container--item">
                    <h1 className="social__item--name" id="social__item--name3"></h1>
                    <a href="https://www.linkedin.com/in/alexanderlgrs" h3 className="social__item--username" id="social__item--username3"></a>
                </div>
            </div>
        </section>
    );
}
export default Social