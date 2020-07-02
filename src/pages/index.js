import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo/seo'
import { rhythm } from '../utils/typography'

function BlogIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Frontend Architect"
        keywords={[`javascript`, `react`, `vue`, `angular`]}
      />
      <Bio />

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div
            key={node.fields.slug}
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          >
            <p
              style={{
                marginBottom: rhythm(0.3),
              }}
            >
            {node.frontmatter.categories.map((category) =>  <span style={{ color: "#6a737d", marginRight: 10, textTransform: "capitalize"}}>{category}</span>)}
            </p>
            <h3
              style={{
                margin: 0,
              }}
            >
              <Link
                style={{
                  color: '#24292e',
                }}
                to={node.fields.slug}
              >
                {title}
              </Link>
            </h3>
            <small> {node.frontmatter.date} </small>
            <p
              style={{
                marginTop: rhythm(0.5),
              }}
              dangerouslySetInnerHTML={{
                __html: node.excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            categories
          }
        }
      }
    }
  }
`
