import React, { Component } from 'react'

import Contact from './Contact'
import TechAndTools from './techAndTools'
import Objectives from './Objectives'
import Interests from './Interests'
import './styles/About.styl'

class About extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="about__container">
                    <div className="photo__container">
                        <img className="photo" src="https://i.imgur.com/Kgm9urk.jpg" alt="Photo" />
                    </div>
                    <Contact data={this.props.data} />
                    <TechAndTools data={this.props.data} />
                    <Objectives data={this.props.data} />
                    <Interests data={this.props.data} />
                    
                </div>
            </React.Fragment>
        )
    }
}

export default About