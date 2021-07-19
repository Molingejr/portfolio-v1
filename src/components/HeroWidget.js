import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import richtextRenderer from '../utils/richtextRenderer';

class HeroWidget extends Component{
    render(){
        const { title, summary, backgroundImage } = this.props.data;
        console.log(backgroundImage)
        return(
            <div className="hero" style={{ backgroundImage: `url(${backgroundImage.fluid.src})` }}>
                {/* <Img fluid={backgroundImage.fluid} /> */}
                <div className="hero__content">
                    <div className="hero__text">
                        <p>{summary && renderRichText(summary, richtextRenderer)}</p>
                    </div>
                    <Link to="/contact" className="btn"><span>Get in touch</span></Link>
                </div>
            </div>
        )
    }
}

export default HeroWidget;