import React, {Component} from 'react'
//import {Link} from 'react-router-dom'
//import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import './home.css'

export default class Home extends Component{
    render(){
        return (
            <div className='home'>
                <h1>Welcome</h1>
                <img className='homeImg'src='/assets/pictures/flights.jpg' alt='flights'/>
                <h2>Connect</h2>
                <div>
                    <a href='https://github.com/DuyLuu90' target='_blank' rel="noopener noreferrer">
                        <img src={'/assets/logos/gitHub.png'} alt='github' className='logo'/>
                    </a>
                    <a href='https://linkedin.com/in/duy-luu-82234232' target='_blank' rel="noopener noreferrer">
                        <img src={'/assets/logos/LinkedIn.png'} alt='github' className='logo'/>
                    </a>
                </div>
                <div>
                    <p className='quote'>"A goal is a dream with a deadline"</p>
                    <p>- Napoleon Hill</p>
                </div>


            </div>
        )
    }
}