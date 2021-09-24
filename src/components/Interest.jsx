import React, {Component} from "react";

class Interest extends Component {
    render() {
        return (
            <div class="col s12">
                <div className="card z-depth-2">
                    <div className="card-content general-cards">
                    <h5><strong>Interest</strong></h5>
                        <div class="row">
                            <ul>
                                <div className="col 6">
                                <li>
                                    <div className="chip">
                                        <section>
                                            <p>Full stack developer</p>
                                        </section>
                                    </div>
                                </li>
                                <li>
                                    <div className="chip">
                                        <section>
                                            <p>Languages</p>
                                        </section>
                                    </div>
                                </li>
        
                                </div>
                                <div className="col 6">
                                <li>
                                    <div className="chip">
                                        <section>
                                            <p>Startups</p>
                                        </section>
                                    </div>
                                </li>
                                <li>
                                    
                                    <div className="chip">
                                        <section>
                                            <p>Financial</p>
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

export default Interest;