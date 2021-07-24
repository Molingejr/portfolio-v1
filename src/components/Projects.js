import React, { Component } from 'react';

import  { Card } from './index';

class Projects extends Component{
    render(){
        const projects  = this.props.data;

        return (
            <section id="projects" className="projects">
                <div className="section-heading projects__heading">
                    Some of my personal projects
                </div>

                <div className="projects__list">
                    {
                        projects && projects.map(project => (
                            <Card data={project} />
                        ))
                    }
                </div>
                
            </section>
        )
    }
}

export default Projects;