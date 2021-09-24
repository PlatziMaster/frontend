import React, {Component} from "react";

class Skills extends Component {
    render() {
        return (
            <div class="col s12">
                <div className="card z-depth-2">
                    <div className="card-content general-cards">
                    <h5><strong>Skills</strong></h5>
                        <div class="row">
                            <ul>
                                <div className="col 6">
                                <li>
                                    <div className="chip">
                                        <section>
                                            <p>UX/UI</p>
                                        </section>
                                    </div>
                                </li>
                                <li>
                                    <div className="chip">
                                        <section>
                                            <p>Figma</p>
                                        </section>
                                    </div>
                                </li>
                                <li>
                                    <div className="chip">
                                        <section>
                                            <p>Customer Success</p>
                                        </section>
                                    </div>
                                </li>
                                </div>
                                <div className="col 6">
                                <li>
                                    <div className="chip">
                                        <section>
                                            <p>Frontend</p>
                                        </section>
                                    </div>
                                </li>
                                <li>
                                    <div className="chip">
                                        <section>
                                            <p>React JS</p>
                                        </section>
                                    </div>
                                </li>
                                </div>
                            </ul>
                            </div> 
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Skills;