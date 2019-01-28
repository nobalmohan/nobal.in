import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import './Bio.scss'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            className="description-block"
            style={{
              marginBottom: rhythm(0.5),
            }}
          >
            {/*
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            */}
            <p
              className="note"
            >
              Freelance Web Developer. <br />
              Looking for exciting opportunities to collaborate.
            </p>
            <p
              className="links"
            >
              <a
                href="https://twitter.com/NobalMohan"
              >
                twitter
              </a>
              <a
                href="https://www.linkedin.com/in/nobal-mohan/"
              >
                linkedin
              </a>
              <a
                href="mailto:conatct@nobal.in"
              >
                email
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
