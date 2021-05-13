import React from 'react';
fetch("../../data.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#languages__item--name1").innerText = data.languages[0].name
        document.querySelector("#languages__item--percentage1").innerText = data.languages[0].percentage

        document.querySelector("#languages__item--name2").innerText = data.languages[1].name
        document.querySelector("#languages__item--percentage2").innerText = data.languages[1].percentage
    })

const Languages = () => {
    return (
        <section className="languages__container">
            <h1 className="languages__container--title">languages</h1>
            <div className="languages__items__container">
                <div className="languages__container--item">
                    <h1 className="languages__item--name" id="languages__item--name1"></h1>
                    <h3 className="languages__item--percentage" id="languages__item--percentage1"></h3>
                </div>
                <div className="languages__container--item">
                    <h1 className="languages__item--name" id="languages__item--name2"></h1>
                    <h3 className="languages__item--percentage" id="languages__item--percentage2"></h3>
                </div>
            </div>
        </section>
    );
}
export default Languages