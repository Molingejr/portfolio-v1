import React, { Component } from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/images/logo.svg';

export default class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { activeSection } = this.props; 
        return (
            <header >
                <div className={'navbar'}>

                    <Link to="/"><img className="nav-logo" src={Logo} alt="MOLINGE LYONGA"/></Link>
                    <nav>
                    <ul className={"nav-menu"}>
                        <li className={activeSection === "/about" ? 'nav-item active': 'nav-item'}>
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className={activeSection === "/experience" ? 'nav-item active': 'nav-item'}>
                            <Link to="/experience" className="nav-link">Experience</Link>
                        </li>
                        <li className={activeSection === "/work" ? 'nav-item active': 'nav-item'}>
                            <Link to="/work" className="nav-link">Work</Link>
                        </li>
                        <li className={activeSection === "/contact" ? 'nav-item active': 'nav-item'}>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                    </nav>
                    <Link to="/resume" className="resume-btn"><span>Resume</span></Link>
                </div>
                
            </header>
        )
    }
}