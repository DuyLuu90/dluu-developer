import React, {Component} from 'react'
//import {Link} from 'react-router-dom'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import './bio.css'

export default class Bio extends Component{
    state= {
        displayImage: false
    }
    renderGallery=()=>{
        return(
            <div className='profile'>
                <div>
                    <img className='avatar' alt='avatar' src='/assets/pictures/profile.png'/>
                    <p>Nha Trang, Vietnam</p>
                </div>
                <div>
                    <img className='avatar' alt='avatar' src='/assets/pictures/profile3.png'/>
                    <p>Osaka, Japan</p>
                </div>
            </div>
           
        )
    }
    renderAboutMe=()=>{
        return(
            <div className='aboutMe'> 
                <section>
                    <h2>Introduction:</h2>
                    <div className='text'>
                        <p>
                            <FontAwesomeIcon icon='user-ninja' className='awesome'/>
                            Hi, my name is Duy. "Duy", in Vietnamese, means "unique"/"only one".I am a software engineer with strong aviation and management background. I love how coding lets me see my untapped potential, uncovers my creativity, and keeps me awake at night. 
                        </p>
                        <p>
                            <FontAwesomeIcon icon='plane' className='awesome'/>I also love airplanes, and when we are "taking off together"
                        </p>
                         
                    </div>
                </section>
                <section>
                    <h2>Education</h2>
                    <div className='text'>
                        <p><FontAwesomeIcon icon='school' className='awesome'/>Bachelor's degree in Air Traffic Management from Arizona State University</p>
                        <p><FontAwesomeIcon icon='school'className='awesome'/>Certified Full stack Developer from Thinkful</p>
                    </div>
                </section>
                <section>
                    <h2>Technical skills</h2>
                    <div className='skills'>
                        <div className='skill'>
                            <h3>Front-End:</h3>
                            <div className='techLogos'>
                                <img src={'/assets/logos/HTML5.png'} alt='html5' />
                                <img src={'/assets/logos/react192.png'} alt='react' />
                                <img src={'/assets/logos/jQuery.png'} alt='jQuery' />
                                <img src={'/assets/logos/css3.png'} alt='css' />
                            </div>
                        </div>

                        <div className='skill'>
                            <h3>Back-End:</h3>
                            <div className='techLogos'>
                                <img src={'/assets/logos/node.png'} alt='node' />
                                <img src={'/assets/logos/mocha.png'} alt='mocha' />
                                <img src={'/assets/logos/postgreSQL.png'} alt='postgreSQL' />
                            </div>
                            
                        </div>

                        <div className='skill'>
                            <h3>Dev Tools:</h3>
                            <div className='techLogos'>
                                <img src={'/assets/logos/chromeTools.png'} alt='devTools' />
                            </div> 
                        </div>
                    </div>
                    
                    
                   
        
                    
                    
                </section>

            </div>
        )
    }
    displayImage=()=>this.setState({displayImage:true})
    hideImage=()=>this.setState({displayImage:false})
    render(){
        const {displayImage}= this.state
        const bio=(!displayImage)? this.renderAboutMe(): this.renderGallery()
        return (
            <div className='bio'>
                <nav>
                    <span className={!displayImage?'active':''} onClick={this.hideImage}>About me</span>
                    <span className={displayImage?'active':''} onClick={this.displayImage}>Gallery</span>
                </nav>
                {bio}
            </div>
        )
    }
}