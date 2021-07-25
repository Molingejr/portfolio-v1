import { white } from 'gatsby-cli/node_modules/chalk';
import React, { Component } from 'react';

import  { Card } from './index';

class Services extends Component{
    render(){
        const services  = this.props.data;

        return (
            <section id="services" className="services">
                <div className="section-heading services__heading">
                    What I do
                </div>

                <div className="services__list">
                    {
                        services && services.map(service => (
                            <Card data={service} />
                        ))
                    }
                </div>
                
            </section>
        )
    }
}

export default Services;