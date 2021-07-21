import React, { Component } from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import richtextRenderer from '../utils/richtextRenderer';


const Project = (props) => {
    const project = props.project;

    return (
        <div className="card">
            <div className="card__head">
                <div className="card__heading">{project.heading}</div>
                <div className="card__summary">{project.summary.summary}</div>
            </div>
            
            <div className="card__foot">
                <ul className="card__items">
                    {project.items.map(item => (
                        <li className="card__items--item">{item}</li>
                    ))}
                </ul>
                <a href={project.link} className="btn-red card__btn">See more</a>
            </div>
            
        </div>
    )
}


class Projects extends Component{
    render(){
        const projects  = this.props.data;

        return (
            <div className="projects">
                <div className="projects__heading">
                    Some of my personal projects
                </div>

                <div className="projects__list">
                    {
                        projects && projects.map(project => (
                            <Project project={project} />
                        ))
                    }
                </div>
                
            </div>
        )
    }
}

export default Projects;