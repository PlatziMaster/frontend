import React from 'react';
fetch("../../data.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#academic__item--title1").innerText = data.academic[0].name
        document.querySelector("#academic__item--institution1").innerText = data.academic[0].institution
        document.querySelector("#academic__item--date1").innerText = data.academic[0].startDate + " - " + data.academic[0].endDate

        document.querySelector("#academic__item--title2").innerText = data.academic[1].name
        document.querySelector("#academic__item--institution2").innerText = data.academic[1].institution
        document.querySelector("#academic__item--date2").innerText = data.academic[1].startDate + " - " + data.academic[1].endDate

        document.querySelector("#academic__item--title3").innerText = data.academic[2].name
        document.querySelector("#academic__item--institution3").innerText = data.academic[2].institution
        document.querySelector("#academic__item--date3").innerText = data.academic[2].startDate + " - " + data.academic[2].endDate
        
        document.querySelector("#academic__item--title4").innerText = data.academic[3].name
        document.querySelector("#academic__item--institution4").innerText = data.academic[3].institution
        document.querySelector("#academic__item--date4").innerText = data.academic[3].startDate + " - " + data.academic[3].endDate

    })

const Academic = () => {
    return (
        <section className="academic__container">
        <h1 className="academic__container--title">Academic</h1>
        <div className="academic__items__container">
            <div className="academic__container--item">
                <h1 className="academic__item--title" id="academic__item--title1"></h1>
                <h3 className="academic__item--institution" id="academic__item--institution1"></h3>
                <h3 className="academic__item--date" id="academic__item--date1"></h3>
            </div>
            <div className="academic__container--item">
                <h1 className="academic__item--title" id="academic__item--title2"></h1>
                <h3 className="academic__item--institution" id="academic__item--institution2"></h3>
                <h3 className="academic__item--date" id="academic__item--date2"></h3>
            </div>
            <div className="academic__container--item">
                <h1 className="academic__item--title" id="academic__item--title3"></h1>
                <h3 className="academic__item--institution" id="academic__item--institution3"></h3>
                <h3 className="academic__item--date" id="academic__item--date3"></h3>
            </div>
            <div className="academic__container--item">
                <h1 className="academic__item--title" id="academic__item--title4"></h1>
                <h3 className="academic__item--institution" id="academic__item--institution4"></h3>
                <h3 className="academic__item--date" id="academic__item--date4"></h3>
            </div>
        </div>
    </section>
    );
}
export default Academic