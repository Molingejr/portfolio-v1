import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import richtextRenderer from '../utils/richtextRenderer';

class HeroWidget extends Component{
    render(){
        const { title, summary, backgroundImage } = this.props.data;
        
        return(
            <section className="hero" style={{ backgroundImage: `url(${backgroundImage.fluid.src})` }}>
                <div className="hero__content">
                    <div className="hero__text">
                        <p>{summary && renderRichText(summary, richtextRenderer)}</p>
                    </div>
                    <a href="mailto:molingejr@gmail.com" target="_blank" className="btn"><span>Get in touch</span></a>
                </div>
            </section>
        )
    }
}

export default HeroWidget;