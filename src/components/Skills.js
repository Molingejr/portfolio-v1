import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";

const progressKeyframe = (percentage) => keyframes`
    0% {
      width: 0;
    }

    100% {
      width: ${percentage}%;
    }
  }
`
const SkillProgress = styled.span`
  animation: ${props => progressKeyframe(props.percentage)} 4s infinite cubic-bezier(1, 0, 0, 1)

`

const Skill = (props) => {
    const skill = props.data
    return (
        <div className="skills__skill">
            <h4>{skill.name}</h4>
            <div className="skills__skill--progress">
                <SkillProgress percentage={skill.percentage}/>
            </div>
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