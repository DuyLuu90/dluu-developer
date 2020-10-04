import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './app-style.css';
//ROUTES:

//COMPONENTS:
import Home from './component/home/home'
import NavBar from './component/app_nav/navBar';
import Footer from './component/app_footer/footer';
import Bio from './component/bio/bio'
import AllProjects from './component/project/projects'
import NotFoundPage from './component/notfoundpage/notfoundpage';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false,
    }
  }
  componentDidMount(){
    
  }

  render() {
    const {hasError} = this.state
    return (
      <div className="App">
        <NavBar/>

        <main className="App_main">
          {hasError &&<div className='red'>An unknown error has occurred.</div>}
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/bio'} component={Bio}/>
            <Route path={'/project'} component={AllProjects}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </main>

        <Footer />
        
      </div>
    )
  }

}