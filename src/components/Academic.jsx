import React, {Component} from "react";

class Academic extends Component {
    render() {
        return (
            <div class="col s12">
                <div className="card z-depth-2">
                    <div className="card-content general-cards">
                    <h5><strong>Academic</strong></h5>
                        <div class="row">
                            
                            <ul>
                                <li>
                                    <section>
                                        <div className="col s6">
                                            <h6><strong>Economia</strong></h6>
                                            <p>Universidad Nacional abierta y a distancia UNAD</p>
                                            <p className="grey-text">Jun 2020 - Present</p>
                                        </div>
                                    </section>
                                </li>
                                <li>
                                    <section>
                                        <div className="col s6">
                                            <h6><strong>Tecnologo en Negocios Internacionales</strong></h6>
                                            <p>SENA</p>
                                            <p className="grey-text">Oct 2018 - Abr 2020</p>
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

export default Academic;