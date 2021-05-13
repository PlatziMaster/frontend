import React from 'react';
fetch("../../data.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#experience__item--position1").innerText = data.experience[0].jobTitle
        document.querySelector("#experience__item--company1").innerText = data.experience[0].company
        document.querySelector("#experience__item--date1").innerText = data.experience[0].startDate + " - " + data.experience[0].endDate

        document.querySelector("#experience__item--position2").innerText = data.experience[1].jobTitle
        document.querySelector("#experience__item--company2").innerText = data.experience[1].company
        document.querySelector("#experience__item--date2").innerText = data.experience[1].startDate + " - " + data.experience[1].endDate

        document.querySelector("#experience__item--position3").innerText = data.experience[2].jobTitle
        document.querySelector("#experience__item--company3").innerText = data.experience[2].company
        document.querySelector("#experience__item--date3").innerText = data.experience[2].startDate + " - " + data.experience[2].endDate


    })

const Experience = () => {
    return (
        <section className="experience__container">
            <h1 className="experience__container--title">Experience</h1>
            <div className="experience__items__container">
                <div className="experience__container--item">
                    <h1 className="experience__item--position" id="experience__item--position1"></h1>
                    <h3 className="experience__item--company" id="experience__item--company1"></h3>
                    <h3 className="experience__item--date" id="experience__item--date1"></h3>
                </div>
                <div className="experience__container--item">
                    <h1 className="experience__item--position" id="experience__item--position2"></h1>
                    <h3 className="experience__item--company" id="experience__item--company2"></h3>
                    <h3 className="experience__item--date" id="experience__item--date2"></h3>
                </div>
                <div className="experience__container--item">
                    <h1 className="experience__item--position" id="experience__item--position3"></h1>
                    <h3 className="experience__item--company" id="experience__item--company3"></h3>
                    <h3 className="experience__item--date" id="experience__item--date3"></h3>
                </div>
            </div>
        </section>
    );
}
export default Experience