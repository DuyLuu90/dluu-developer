import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import './bio.css'

export default class Bio extends Component{
    state= {
        displayImage: false
    }
    renderGallery=()=>{
        return(
            <div className='gallery'>
                <section>
                    <h2>Here's a litle bit about ME</h2>
                    <div className='text'>
                        <p>
                            <FontAwesomeIcon icon='user-ninja' className='awesome'/>
                            My name, in Vietnamese, means "UNIQUE" or "ONLY ONE". I have been coding for about a year, and I love how it lets me see my untapped potential, uncovers my creativity, and keeps me awake at night. 
                        </p>
                        <p>
                            <FontAwesomeIcon icon='users-cog' className='awesome'/>
                            I take pride in my work and would love to be part of a team where everyone understands their responsibilities and contributes in their own way. I always welcome new ideas and honest feedback, as I believe this is how we can learn from and improve each other.
                        </p>
                        <p>
                            <FontAwesomeIcon icon='plane' className='awesome'/>I also love airplanes, and when we are "taking off together". 2020 has not always been pleasant, but we will get through it together. 
                        </p>
                         
                    </div>
                </section>
                <section className='profile'>
                    <div>
                        <img className='avatar' alt='avatar' src='/assets/pictures/profile.png'/>
                        <p>Nha Trang, Vietnam</p>
                    </div>
                    <div>
                        <img className='avatar' alt='avatar' src='/assets/pictures/profile3.png'/>
                        <p>Osaka, Japan</p>
                    </div>
                </section>
                
            </div>
           
        )
    }
    renderAboutMe=()=>{
        /*
        <img src={'/assets/logos/node.png'} alt='node' />
        <img src={'/assets/logos/mocha.png'} alt='mocha' />
        <img src={'/assets/logos/postgreSQL.png'} alt='postgreSQL' />

        <img src={'/assets/logos/HTML5.png'} alt='html5' />
        <img src={'/assets/logos/react192.png'} alt='react' />
        <img src={'/assets/logos/jQuery.png'} alt='jQuery' />
        <img src={'/assets/logos/css3.png'} alt='css' />
        
        */ 
        return(
            <div className='aboutMe'> 
                <section>
                    <h2>Summary:</h2>
                    <div className='text'>  
                        <p>
                            <FontAwesomeIcon icon='bug' className='awesome'/>
                            <span>
                                I am a <strong>Full-stack Developer</strong> with solid aviation and management background. My interests include technology, history, airplanes, and travel. I am currently looking for work. Feel free to contact me or browse some of my projects using the link <strong><Link to={'/project'}>HERE</Link></strong>.
                            </span>
                        </p>
                    </div>
                </section>
                <section>
                    <h2>Education</h2>
                    <div className='text'>
                        <p>
                            <FontAwesomeIcon icon='school' className='awesome'/>
                            <span>
                                Bachelor's degree in Air Traffic Management from <strong>Arizona State University</strong>
                            </span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon='school'className='awesome'/>
                            <span>Certified Full-stack Developer from <strong>Thinkful</strong></span>
                        </p>
                    </div>
                </section>
                <section>
                    <h2>Technical skills</h2>
                    <div className='skills'>
                        <div className='skill'>
                            <h3>Front-End:</h3>
                            <div className='techs'>
                                <img src={'/assets/logos/frontend.png'} alt='frontend' />
                            </div>
                        </div>

                        <div className='skill'>
                            <h3>Back-End:</h3>
                            <div className='techs'>
                                <img src={'/assets/logos/backend.png'} alt='backend' />
                            </div>
                        </div>

                        <div className='skill'>
                            <h3>Dev Tools:</h3>
                            <div className='techs'>
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
                    <span className={!displayImage?'active':''} onClick={this.hideImage}>Portfolio</span>
                    <span className={displayImage?'active':''} onClick={this.displayImage}>About me</span>
                </nav>
                {bio}
            </div>
        )
    }
}