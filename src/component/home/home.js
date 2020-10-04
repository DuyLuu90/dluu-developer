import React, {Component} from 'react'
//import {Link} from 'react-router-dom'
//import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import './home.css'

export default class Footer extends Component{
    render(){
        return (
            <div id='homme'>
                <h1>Welcome</h1>
                <img src='/assets/pictures/tower.png' alt='PHX Tower'/>
                <div>
                    Hi my name is Duy!
                    "Duy", in my home language, means <span>"unique"</span> or <span>"only one"</span>
                </div>

            </div>
        )
    }
}