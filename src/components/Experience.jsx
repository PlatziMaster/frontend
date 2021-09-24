import React, {Component} from "react";

class Experience extends Component {
    render() {
        return (
            <div class="col s12">
                <div className="card z-depth-2">
                    <div className="card-content general-cards">
                    <h5><strong>Experience</strong></h5>
                        <div class="row">
                            <ul>
                                <li>
                                    <section>
                                        <div className="col s6">
                                            <h6><strong>Asistente de Centro de lenguas</strong></h6>
                                            <p>Universidad Pontificia Boliviariana</p>
                                            <p className="grey-text">Aug 2018 - Sep 2021</p>
                                        </div>
                                    </section>
                                </li>
                                <li>
                                    <section>
                                        <div className="col s6">
                                            <h6><strong>Asesora / Cajera</strong></h6>
                                            <p>Banco WWB</p>
                                            <p className="grey-text">May 2016 - Jul 2017</p>
                                        </div>
                                    </section>
                                </li>
                            </ul>    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;