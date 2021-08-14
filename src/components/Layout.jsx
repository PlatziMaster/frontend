import React from "react"
import Header from "./Header"
import ProfileIntro from "./ProfileIntro"

const Layout = (props) => (
    <React.Fragment>
        <Header />
        <ProfileIntro />
        {props.children}
    </React.Fragment>
)

export default Layout