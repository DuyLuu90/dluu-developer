import React, {Component} from 'react'
//import {Link} from 'react-router-dom'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import './project.css'

export default class Project extends Component{
    static defaultProps={
        project:{
            name:'',
            overview:'',
            features:[],
            links:[],
            screenshots:[],
        }
    }
    state={
        displaySummary: true
    }
    renderSummary(){
        const {overview,features,links}= this.props.project
        const featureList= features.map((item,i)=><p key={i}><FontAwesomeIcon icon='thumbs-up' className='awesome'/>{item}</p>)
        const linkList= links.map((obj,i)=>(
            <div key={i}>
                <a href={obj.url} target='_blank' rel="noopener noreferrer">{obj.name}</a>
            </div>
        ))
        return (
            <div className='summary'>
                <h3>Overview</h3>
                <div>{overview}</div>
                <h3>App features:</h3>
                <div>
                    {featureList}
                </div>
                <h3>Learn more:</h3>
                <div>
                     {linkList}
                </div> 
            </div>
        )

    }
    renderScreenshots(){
        const {screenshots}= this.props.project
        const imgs= screenshots.map((obj,i)=>(
            <div key={i}>
                <img  alt='screenshot' src={obj.src}/>
                <p>{obj.description}</p>
            </div>  
        ))
        return(
            <div className='screenshots'>
                {imgs}
            </div>
        )
    }
    render(){
        const {displaySummary}= this.state
        const main = (displaySummary)? this.renderSummary(): this.renderScreenshots()
        return (
            <div className='project'>
                <nav className='project_nav'>
                    <span className={displaySummary?'highlighted':''} onClick={()=>this.setState({displaySummary:true})}>Summary</span>
                    <span className={!displaySummary?'highlighted':''} onClick={()=>this.setState({displaySummary:false})}>Screenshots</span>
                </nav>
                <div>
                    {main}
                </div>
            </div>
        )
    }
}