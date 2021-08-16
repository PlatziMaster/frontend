import React from "react"
import Header from "./Header"
import ProfileIntro from "./ProfileIntro"

const Layout = (props) => {
    return(
        <React.Fragment>
            <Header />
            <ProfileIntro info={props.profileIntro}/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout