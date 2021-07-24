import React, { Component } from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import richtextRenderer from '../utils/richtextRenderer';
import Img from 'gatsby-image';

class About extends Component{
    render(){
        const { title, summary, image } = this.props.data;

        return (
            <section id="about" className="about">   
                <div className="section-heading about__title">
                    {title && title}
                </div>  

                <div className="about__body">
                    <Img fluid={image.fluid} className="about__image"></Img>    
                    <div className="about__summary">
                        {summary && renderRichText(summary, richtextRenderer)}
                    </div>
                </div>                    
            </section>
        )
    }
}

export default About;