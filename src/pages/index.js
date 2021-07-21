import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/layouts/PageLayout';
import { HeroWidget, About, Projects, Contact } from '../components/index';
import { graphql } from 'gatsby';

const Index = ({data}) => {
    console.log("Our data is: ", data)
    const hero = data.contentfulWidgetHero
    const about = data.contentfulAbout
    const projects = data.allContentfulProject.nodes
    
    return (
        <PageLayout>
            <Helmet title="Molinge" />
            <div className="container--home">
                <HeroWidget data={hero}/>
                <About  data={about}/>
                <Projects data={projects}/>
                <Contact />
            </div>
            
        </PageLayout>
    )
}


export const query = graphql`
    query MyQuery {
        contentfulWidgetHero(slug: {eq: "molinge-lyonga"}){
            slug
            title
            summary {
                raw
            }
            backgroundImage {
               fluid(maxWidth: 1400, quality: 100) {
                   ...GatsbyContentfulFluid
               }
            }
        }

        contentfulAbout(slug: {eq: "about"}){
            slug
            title
            summary {
                raw
            }
            image {
                fluid(quality: 100){
                    ...GatsbyContentfulFluid
                }
            }
        }

        allContentfulProject{
            nodes {
                slug
                heading
                summary {
                    summary
                }
                items
            }
        }

    }
`

export default Index;