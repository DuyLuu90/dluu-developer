import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import TokenService from '../src/services/TokenService'
import {GeneralApiServices} from '../src/services/api-service'
import './app-style.css';
//ROUTES:

//COMPONENTS:
import NotFoundPage from './component/notfoundpage/notfoundpage';
import NavBar from './component/app_nav/navBar';
import Footer from './component/app_footer/footer';

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
            <Route component={NotFoundPage}/>
          </Switch>
        </main>

        <Footer />
        
      </div>
    )
  }

}