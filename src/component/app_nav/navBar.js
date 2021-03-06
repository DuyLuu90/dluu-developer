import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './navBar-style.css'

export default class NavBar extends Component{
    
    state= {
        displayDropDown: false
    }
    onClickBar= ()=>{
        const boolean= (this.state.displayDropdown)? false: true
        this.setState({displayDropdown: boolean})
    }
    closeDropdown=()=>this.setState({displayDropdown: false})

    renderLinks(){
        return(
            <div onClick={this.closeDropdown}>
                <Link to='/project' aria-label='project-page' > Projects</Link>
                <Link to='/bio' aria-label='bio-page'>Bio </Link>
            </div>
        )
    }
    render() {
        const nav= this.renderLinks()
        return (
            <nav className='app_nav'>
                <h1>
                    <Link to='/'aria-label='home-page'><FontAwesomeIcon className="nav_icon" icon='code'/>
                        {' '}{' '}DUY LUU
                    </Link>
                </h1>
                <div className='menu'>
                    {nav} 
                </div>
                <div className='dropdown'>
                    <FontAwesomeIcon className='icon' icon='bars' onClick={this.onClickBar}/>
                    {this.state.displayDropdown && nav} 
                </div>
                   
            </nav>
        )
       
    }
}
