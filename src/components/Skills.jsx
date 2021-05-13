import React from 'react';
fetch("../../data.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#skills__item--name1").innerText = data.skills[0].name
        document.querySelector("#skills__item--percentage1").innerText = data.skills[0].percentage

        document.querySelector("#skills__item--name2").innerText = data.skills[1].name
        document.querySelector("#skills__item--percentage2").innerText = data.skills[1].percentage

        document.querySelector("#skills__item--name3").innerText = data.skills[2].name
        document.querySelector("#skills__item--percentage3").innerText = data.skills[2].percentage

        document.querySelector("#skills__item--name4").innerText = data.skills[3].name
        document.querySelector("#skills__item--percentage4").innerText = data.skills[3].percentage

        document.querySelector("#skills__item--name5").innerText = data.skills[4].name
        document.querySelector("#skills__item--percentage5").innerText = data.skills[4].percentage

        document.querySelector("#skills__item--name6").innerText = data.skills[5].name
        document.querySelector("#skills__item--percentage6").innerText = data.skills[5].percentage

        document.querySelector("#skills__item--name7").innerText = data.skills[6].name
        document.querySelector("#skills__item--percentage7").innerText = data.skills[6].percentage

        document.querySelector("#skills__item--name8").innerText = data.skills[7].name
        document.querySelector("#skills__item--percentage8").innerText = data.skills[7].percentage

        document.querySelector("#skills__item--name9").innerText = data.skills[8].name
        document.querySelector("#skills__item--percentage9").innerText = data.skills[8].percentage

        document.querySelector("#skills__item--name10").innerText = data.skills[9].name
        document.querySelector("#skills__item--percentage10").innerText = data.skills[9].percentage

        document.querySelector("#skills__item--name10").innerText = data.skills[10].name
        document.querySelector("#skills__item--percentage10").innerText = data.skills[10].percentage

    })

const Skills = () => {
    return (
        <section className="skills__container">
            <h1 className="skills__container--title">Skills</h1>
            <div className="skills__items__container">
                <div className="skills__container--item">
                    <h1 className="skills__item--name" id="skills__item--name1"></h1>
                    <h3 className="skills__item--percentage" id="skills__item--percentage1"></h3>
                </div>
                <div className="skills__container--item">
                    <h1 className="skills__item--name" id="skills__item--name2"></h1>
                    <h3 className="skills__item--percentage" id="skills__item--percentage2"></h3>
                </div>
                <div className="skills__container--item">
                    <h1 className="skills__item--name" id="skills__item--name3"></h1>
                    <h3 className="skills__item--percentage" id="skills__item--percentage3"></h3>
                </div>
                <div className="skills__container--item">
                    <h1 className="skills__item--name" id="skills__item--name4"></h1>
                    <h3 className="skills__item--percentage" id="skills__item--percentage4"></h3>
                </div>
                <div className="skills__container--item">
                    <h1 className="skills__item--name" id="skills__item--name5"></h1>
                    <h3 className="skills__item--percentage" id="skills__item--percentage5"></h3>
                </div>
                <div className="skills__container--item">
                    <h1 className="skills__item--name" id="skills__item--name6"></h1>
                    <h3 className="skills__item--percentage" id="skills__item--percentage6"></h3>
                </div>
                <div className="skills__container--item">
                    <h1 className="skills__item--name" id="skills__item--name7"></h1>
                    <h3 className="skills__item--percentage" id="skills__item--percentage7"></h3>
                </div>
                <div className="skills__container--item">
                    <h1 className="skills__item--name" id="skills__item--name8"></h1>
                    <h3 className="skills__item--percentage" id="skills__item--percentage8"></h3>
                </div>
                <div className="skills__container--item">
                    <h1 className="skills__item--name" id="skills__item--name9"></h1>
                    <h3 className="skills__item--percentage" id="skills__item--percentage9"></h3>
                </div>
                <div className="skills__container--item">
                    <h1 className="skills__item--name" id="skills__item--name10"></h1>
                    <h3 className="skills__item--percentage" id="skills__item--percentage10"></h3>
                </div>
                <div className="skills__container--item">
                    <h1 className="skills__item--name" id="skills__item--name11"></h1>
                    <h3 className="skills__item--percentage" id="skills__item--percentage11"></h3>
                </div>
            </div>
        </section>
    );
}
export default Skills