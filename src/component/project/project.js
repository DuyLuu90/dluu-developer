import React, {Component} from 'react'
//import {Link} from 'react-router-dom'
//import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import './project.css'

export default class Project extends Component{
    state={
        displayOverview: true
    }
    render(){
        const {displayOverview}= this.state
        return (
            <div>
                <nav className='project_nav'>
                    <span className={displayOverview?'highlighted':''} onClick={()=>this.setState({displayOverview:true})}>Overview</span>
                    <span className={!displayOverview?'highlighted':''} onClick={()=>this.setState({displayOverview:false})}>Screenshots</span>
                </nav>
                <div>
                    
                </div>
            </div>
        )
    }
}