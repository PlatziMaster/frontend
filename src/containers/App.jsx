import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from "../components/Layout"
import Home from "../pages/Home"
import Education from "../pages/Education"
import Hobbies from "../pages/Hobbies"
import Additional from "../pages/Additional"
import NotFound from "../pages/NotFound"

import '../styles/components/App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      value: {
        profileIntro: {
          links: []
        },
        home: {
          personalProfile: {},
          skills: {
            content: []
          },
          experience: {
            content: [
              {
                projectContent: []
              }
            ]
          }
        }
      }
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch("http://localhost:3000/data")
    const mydata = await response.json()

    this.setState({
      value: mydata,
    })
  }

  render(){
    return (
      <BrowserRouter>
        <Layout profileIntro={this.state.value.profileIntro}>
          <Switch>
            <Route exact path="/" render={(props) => (
              <Home data={this.state.value.home}/>
            )} />
            <Route exact path="/education" component={Education}/>
            <Route exact path="/hobbies" component={Hobbies}/>
            <Route exact path="/additional-info" component={Additional}/>
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;
