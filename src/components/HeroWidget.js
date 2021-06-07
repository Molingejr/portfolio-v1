import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import richtextRenderer from '../utils/richtextRenderer';

class HeroWidget extends Component{
    render(){
        const { title, summary, backgroundImage } = this.props.data;
        console.log(summary)

        return(
            <div>
                <h1>{title}</h1>
                <p>{summary && renderRichText(summary, richtextRenderer)}</p>
                <img src={backgroundImage.file.url} />
            </div>
           
        )
    }
}

export default HeroWidget;