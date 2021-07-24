import React, { Component } from 'react';

const Skill = (props) => {
    const skill = props.data
    return (
        <div className="skills__skill">
            {skill.name}
        </div>
    )
}


class Skills extends Component{
    render(){
        const skills  = this.props.data;

        return (
            <section className="skills">
                <div className="section-heading skills__heading">
                    My Skills
                </div>

                <div className="skills__list">
                    {
                        skills && skills.map(skill => (
                            <Skill data={skill}/>
                        ))
                    }
                </div>
                
            </section>
        )
    }
}

export default Skills;