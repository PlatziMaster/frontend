import React, {Component} from "react";

class Languages extends Component {
    render() {
        return (
            <div class="col s12">
                <div className="card z-depth-2">
                    <div className="card-content general-cards">
                    <h5><strong>Languages</strong></h5>
                        <div class="row">
                            <ul>
                                <li>
                                    <section>
                                        <div className="col s6">
                                            <h6><strong>Spanish</strong></h6>
                                            <p>Native</p>
                                        </div>
                                    </section>
                                </li>
                                <li>
                                    <section>
                                        <div className="col s6">
                                            <h6><strong>English</strong></h6>
                                            <p>Elementary proficiency</p>
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

export default Languages;