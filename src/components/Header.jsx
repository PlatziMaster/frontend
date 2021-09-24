import React, {Component} from "react";
import imgMe from '../img/me.png';

class Header extends Component {
    render() {
        return (
        <div class="col s12">
            <div className="card z-depth-2">
                <div className="card-content header-color">
                    <div class="row">
                        <div class="col s3">
                            <img class="materialboxed responsive-img" width="200" src={imgMe} alt={imgMe} />
                        </div>
                        <div class="col s9">
                            <h4><strong>Valentina Ruiz Martinez</strong></h4>
                            <div>
                                <p className="black-text" style={{marginBottom: '10px'}}>Frontend Developer con conocimientos en UI/UX</p>
                            </div>
                            <div className="divider" style={{marginBottom: '10px'}}></div>
                            <div class="row">
                                <div class="col s9 m6 l6">
                                    <p><strong>Phone:</strong> 318 5442889</p>
                                </div>
                            <div className="row">
                                <div class="col s9 m6 l6">
                                    <p><strong>Email:</strong> vale12806@hotmail.com</p>
                                </div>
                            </div>
                                <div class="col s6">
                                    <p><strong>Linkedin:</strong> https://www.linkedin.com/in/valentina-ruiz-martinez-a95226212/ </p>
                                </div>
                                <div class="col s6">
                                    <p><strong>Address:</strong> Carrera 7 # 31 - 91, Palmira, Colombia </p>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Header;
