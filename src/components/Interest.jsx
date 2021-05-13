import React from 'react';
fetch("../../data.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#interest__container--item1").innerText = data.interest[0]
        document.querySelector("#interest__container--item2").innerText = data.interest[1]
        document.querySelector("#interest__container--item3").innerText = data.interest[2]
        document.querySelector("#interest__container--item4").innerText = data.interest[3]
        document.querySelector("#interest__container--item5").innerText = data.interest[4]
    })

const Interest = () => {
    return (
        <section className="interest__container">
            <h1 className="interest__container--title">Interest</h1>
            <div className="interest__items--container">
                <h1 className="interest__container--item" id="interest__container--item1"></h1>
                <h1 className="interest__container--item" id="interest__container--item2"></h1>
                <h1 className="interest__container--item" id="interest__container--item3"></h1>
                <h1 className="interest__container--item" id="interest__container--item4"></h1>
                <h1 className="interest__container--item" id="interest__container--item5"></h1>
            </div>
        </section>
    );
}
export default Interest