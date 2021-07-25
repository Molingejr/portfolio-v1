import React, { Component } from 'react';
import { Link } from 'gatsby';

export default class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <footer className="footer">
                <div className="footer__content">
                    &copy; Copyright 2021

                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/molinge-jr/" target="_blank"><i className='fab fa-linkedin'></i></a>
                        <a href="https://github.com/Molingejr" target="_blank"><i className='fab fa-github'></i></a>
                    </div>
                </div>
                
            </footer>
        )
    }
}