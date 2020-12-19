import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'
import {paragraphe} from '../components/typography.module.css'
export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <h1>{site.title}</h1>
        
        <h1 className={responsiveTitle1}>Bienvenue sur le Blog du petit Koala</h1>
        <p className={paragraphe}>Bienvenue sur le blog "test" de Koalita.
        Vous trouverez sur se blog une absolu absence de maitrise de REACT et du JS.
        Se blog a été réaliser par la plateform sanity.io et je m'en suis servis pour la réalisation d'un exercice de test pour l'entreprise Koalita.</p>
        <div>
          <img
            src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"/>
        </div>
        <p className={paragraphe}>
        Ce qu'il faut savoir, Je m’appelle Raphaël, il y a encore 2 mois je ne savais même pas ce qu'étaient une variable et une fonction.
        Mercredi j'ai eu le droit à mon premier entretien pour un stage nécessaire à ma formation.
        Mr Jiann a eu le plaisir de m'accueillir au sein de son entreprise et ma demander de réaliser cet exercice afin de voir si j'étais capable de me débrouiller...
        Depuis je n'ai pas arrêté de lire des lignes de code, j'ai dû regarder comment fonctionnait REACT, Node Js, Github, Netlify...
        bref j'ai eu la joie de découvrir la difficulté de trouver des réponses par soi.
        J'avoue avoir eu beaucoup de mal et avoir dû tâtonner le code dans tous les sens pour réussir à afficher quelque chose.
        </p>
        
      </Container>
    </Layout>
  )
}

export default IndexPage
