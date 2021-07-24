import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/layouts/PageLayout';
import { HeroWidget, About, Projects, Contact, Services, Skills } from '../components/index';
import { graphql } from 'gatsby';

const Index = ({data}) => {
    console.log("Our data is: ", data)
    const hero = data.contentfulWidgetHero
    const about = data.contentfulAbout
    const projects = data.allContentfulProject.nodes
    const services = data.allContentfulService.nodes
    const skills = data.allContentfulSkill.nodes
    const resume = data.contentfulAsset
    
    return (
        <PageLayout data={resume}>
            <Helmet title="Molinge" />
            <div className="container--home">
                <HeroWidget data={hero}/>
                <About  data={about}/>
                <Skills data={skills}/>
                <Services data={services} />
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
                url
            }
        }

        allContentfulService{
            nodes {
                slug
                heading
                summary {
                    summary
                }
            }
        }

        allContentfulSkill{
            nodes {
                slug
                name
                category
                percentage
            }
        }

        contentfulAsset (title: {eq:"Resume"}){
            title
            file {
                url
            }
        }

    }
`

export default Index;