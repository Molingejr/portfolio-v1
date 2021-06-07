import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/layouts/PageLayout';
import { HeroWidget } from '../components/index';
import { graphql } from 'gatsby';

const Index = ({data}) => {
    console.log("Our data is: ", data)
    const hero = data.contentfulWidgetHero
    return (
        <PageLayout>
            <Helmet title="Molinge" />
            <HeroWidget data={hero}/>
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
                file {
                    url
          }
        }
      }
    }
`

export default Index;