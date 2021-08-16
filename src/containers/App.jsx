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
        },
        education: {
          content: []
        },
        hobbies: {
          content: []
        },
        additionalInfo: {
          content: []
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
            <Route exact path="/education" render={(props) => (
              <Education data={this.state.value.education}/>
            )}/>
            <Route exact path="/hobbies" render={(props) => (
              <Hobbies data={this.state.value.hobbies}/>
            )}/>
            <Route exact path="/additional-info" render={(props) => (
              <Additional data={this.state.value.additionalInfo}/>
            )}/>
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;
