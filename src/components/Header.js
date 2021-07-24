import React, { Component } from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/images/logo.svg';


const SideNav = (props) => 
            <div className="sidebar" style={{ display:  props.showNav ? 'block' : 'none'}}>
                <span className="navbar__toggle" onClick={props.toggleNav}>
                    <i className="fa fa-times"></i>
                </span>
                
                <div className="sidebar__header">My Site</div>

                <nav className="sidebar__menu">
                    <ul>
                        <li className={props.activeSection === "#about" ? 'sidebar__item active': 'sidebar__item'}>
                            <Link to="#about" className="sidebar__link"><i className='fa fa-question-circle'></i>About</Link>
                        </li>
                                        
                        <li className={props.activeSection === "#services" ? 'sidebar__item active': 'sidebar__item'}>
                            <Link to="#services" className="sidebar__link"><i className='fa fa-history'></i>Services</Link>
                        </li>
                                            
                        <li className={props.activeSection === "#projects" ? 'sidebar__item active': 'sidebar__item'}>
                            <Link to="#projects" className="sidebar__link"><i className='fa fa-tasks'></i>Projects</Link>
                        </li>
                                        
                        <li className={props.activeSection === "#contact" ? 'sidebar__item active': 'sidebar__item'}>
                            <Link to="#contact" className="sidebar__link"><i className='fa fa-address-book'></i>Contact</Link>
                                            
                        </li>
                    </ul>
                    
                    <Link to="/resume" className="btn"><span>Resume</span></Link>
                </nav>
            </div>



export default class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            showNav: false
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    
    handleScroll = () => {
        if (window.scrollY > 15) {
          document.querySelector(".navbar").className = "navbar navbar__scroll";
        } else {
          document.querySelector(".navbar").className = "navbar";
        }
    };

    toggleNav = () => {
        this.setState({ showNav: !this.state.showNav});
    }
    
    downloadPDF = (url) => {
        fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/pdf',
            },
        })
        .then((response) => response.blob())
        .then((blob) => {
            // Create blob link to download
            const fileUrl = window.URL.createObjectURL(
                new Blob([blob], {type: 'application/pdf'}),
            );
            const tab = window.open(fileUrl, "_blank")
        });
    }
    render(){
        const { activeSection, resume } = this.props; 
        return (
            <section>
                <header className="header">
                    <div className="navbar">
                        <Link to="/"><img className="navbar__logo" src={Logo} alt="MOLINGE LYONGA"/></Link>
                        <span className="navbar__toggle" onClick={this.toggleNav}>
                            <i className="fa fa-bars"></i>
                        </span>
                        <nav className="navbar__menu">
                            <ul>
                                <li className={activeSection === "#about" ? 'navbar__item active': 'navbar__item'}>
                                    <Link to="#about" className="navbar__link">About</Link>
                                </li>
                                <li className={activeSection === "#services" ? 'navbar__item active': 'navbar__item'}>
                                    <Link to="#services" className="navbar__link">Services</Link>
                                </li>
                                <li className={activeSection === "#work" ? 'navbar__item active': 'navbar__item'}>
                                    <Link to="#projects" className="navbar__link">Projects</Link>
                                </li>
                                <li className={activeSection === "#contact" ? 'navbar__item active': 'navbar__item'}>
                                    <Link to="#contact" className="navbar__link">Contact</Link>
                                </li>
                            </ul>
                            <a onClick={() => this.downloadPDF(resume)} className="btn" target="_blank"><span>Resume</span></a>
                        </nav>
                    </div> 
            </header>
            { this.state.showNav && <SideNav activeSection={activeSection} showNav={this.state.showNav} toggleNav={this.toggleNav}/>}
            
            </section>
        )
    }
}