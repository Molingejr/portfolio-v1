import React from 'react';
import  {Header, Footer } from '../index';
import '../../assets/styles/app.scss';

export default (props) => {
    const resume = props.data ? props.data.file.url : ""
    return (
        <div className="container">
            <Header activeSection={props.activeSection} resume={resume}/>
            {props.children}
            <Footer />
        </div>
    )
};