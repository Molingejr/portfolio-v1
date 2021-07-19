import React, { Component } from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import richtextRenderer from '../utils/richtextRenderer';

class About extends Component{
    render(){
    
        return (
            <div className="about">About</div>
        )
    }
}

export default About;