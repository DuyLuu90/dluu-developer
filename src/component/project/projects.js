import React, {Component} from 'react'
//import {Link} from 'react-router-dom'
//import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import Project from './project'
import {projects} from '../../assets-helper'
import './project.css'

export default class AllProjects extends Component{
    state={
        tabId:1
    }
    /*
    activeTab= (e)=>{
        let activeTabs= document.getElementsByClassName('active')
        if (activeTabs.length > 0) {
            activeTabs[0].className = activeTabs[0].className.replace("active","");
            }
        e.target.className += " active";            
    }
    */
    displayProject1=()=>this.setState({tabId:1})
    displayProject2=()=>this.setState({tabId:2})
    displayProject3=()=>this.setState({tabId:3})
    render(){
        const {tabId}= this.state
        const project1= <Project project={projects[0]}/>
        const project2= <Project project={projects[1]}/>
        const project3= <Project project={projects[2]}/>
        const project= (tabId===1)? project1: (tabId===2)?project2: project3
        return (
            <div className='projects'>
                <h2>MY PROJECTS</h2>
                <div>
                    <nav className='projects_nav'>
                        <span  className={tabId===1?'active':''} onClick={this.displayProject1} >travelPocket</span>
                        <span  className={tabId===2?'active':''} onClick={this.displayProject2} >dramaPEDIA</span>
                        <span  className={tabId===3?'active':''} onClick={this.displayProject3} >myCalories</span>
                    </nav>
                    {project}

                </div>
            </div>
        )
    }
}