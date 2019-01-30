import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1 style={{
          border: `none`
        }}> {post.frontmatter.title} </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(0.5),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            margin: 0,
            marginBottom: `4%`,
          }}
        >
          <li
            style={{
              width: `50%`,
            }}
          >
            {previous && (
              <Link
                to={previous.fields.slug}
                rel="prev"
                style={{
                  boxShadow: `none`,
                }}
              >
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li
            style={{
              width: `50%`,
              textAlign: `right`,
            }}
          >
            {next && (
              <Link
                to={next.fields.slug}
                rel="next"
                style={{
                  boxShadow: `none`,
                }}
              >
                {next.frontmatter.title}
              </Link>
            )}
          </li>
        </ul>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
