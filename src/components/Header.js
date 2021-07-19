import React, { Component } from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/images/logo.svg';


const SideNav = (props) => {
    const displayStyle = props.visible ? 'block' : 'none';
    return (
            <div className="sidebar" style={{ display: displayStyle }}>
                <div className="sidebar__header">My Site</div>

                <nav className="sidebar__menu">
                    <ul>
                        <li className={props.activeSection === "/about" ? 'sidebar__item active': 'sidebar__item'}>
                            <Link to="/about" className="sidebar__link"><i className='fa fa-question-circle'></i>About</Link>
                        </li>
                                        
                        <li className={props.activeSection === "/experience" ? 'sidebar__item active': 'sidebar__item'}>
                            <Link to="/experience" className="sidebar__link"><i className='fa fa-history'></i>Experience</Link>
                        </li>
                                            
                        <li className={props.activeSection === "/work" ? 'sidebar__item active': 'sidebar__item'}>
                            <Link to="/work" className="sidebar__link"><i className='fa fa-tasks'></i>Work</Link>
                        </li>
                                        
                        <li className={props.activeSection === "/contact" ? 'sidebar__item active': 'sidebar__item'}>
                            <Link to="/contact" className="sidebar__link"><i className='fa fa-address-book'></i>Contact</Link>
                                            
                        </li>
                    </ul>
                    
                    <Link to="/resume" className="btn"><span>Resume</span></Link>
                </nav>
            </div>)
    
    };


export default class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            showNav: false
        }
    }

    openNav = () => {
        this.setState({ showNav: !this.state.showNav});
    }

    render(){
        const { activeSection } = this.props; 
        return (
            <header className="header">
                <div className="navbar">

                    <Link to="/"><img className="navbar__logo" src={Logo} alt="MOLINGE LYONGA"/></Link>
                    <span className="navbar__toggle" onClick={this.openNav}>
                        <i className="fa fa-bars"></i>
                    </span>
                    <nav className={this.state.showNav ? "navbar__menu navbar__responsive" : "navbar__menu"}>
                        <ul>
                            <li className={activeSection === "/about" ? 'navbar__item active': 'navbar__item'}>
                                <Link to="/about" className="navbar__link">About</Link>
                            </li>
                            <li className={activeSection === "/experience" ? 'navbar__item active': 'navbar__item'}>
                                <Link to="/experience" className="navbar__link">Experience</Link>
                            </li>
                            <li className={activeSection === "/work" ? 'navbar__item active': 'navbar__item'}>
                                <Link to="/work" className="navbar__link">Work</Link>
                            </li>
                            <li className={activeSection === "/contact" ? 'navbar__item active': 'navbar__item'}>
                                <Link to="/contact" className="navbar__link">Contact</Link>
                            </li>
                        </ul>
                        <Link to="/resume" className="btn"><span>Resume</span></Link>
                    </nav>
                </div> 

                <SideNav activeSection={activeSection} visible={this.state.showNav} />
            </header>
        )
    }
}