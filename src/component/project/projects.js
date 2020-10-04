import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import Project from './project'
import './project.css'

export default class AllProjects extends Component{
    activeTab= (e)=>{
        let activeTabs= document.getElementsByClassName('active')
        if (activeTabs.length > 0) {
            activeTabs[0].className = activeTabs[0].className.replace("active","");
            }
        e.target.className += " active";            
    }
    render(){
        const project1= <Project/>
        return (
            <div className='projects'>
                <h2>MY PROJECTS</h2>
                <div>
                    <nav className='projects_nav'>
                        <Link to='/project/1' className='tab' onClick={this.activeTab} aria-label='projects-nav'>travelBucket</Link>
                        <Link to='/project/2' className='tab' onClick={this.activeTab} aria-label='projects-nav'>dramaPEDIA</Link>
                        <Link to='/project/3' className='tab' onClick={this.activeTab} aria-label='projects-nav'>myCalories</Link>

                    </nav>
                    {project1}

                </div>
            </div>
        )
    }
}