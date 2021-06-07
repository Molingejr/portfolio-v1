import React from 'react';
import  {Header, Footer } from '../index';
import '../../assets/styles/app.scss';

export default (props) => {
    return (
        <div className>
            <Header activeSection={props.activeSection}/>
            {props.children}
            <Footer />
        </div>
    )
};