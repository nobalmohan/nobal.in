import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              alignItems: `flex-end`,
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
              style={{
                width: `60%`,
              }}
            >
              Freelance Web Developer. <br />
              Looking for exciting opportunities to collaborate.
            </p>
            <p
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                width: `40%`,
                textAlign: `right`,
              }}
            >
              <a
                href="https://twitter.com/NobalMohan"
                style={{
                  width: `30%`,
                  textAlign: `right`,
                }}
              >
                twitter
              </a>
              <a
                href="https://www.linkedin.com/in/nobal-mohan/"
                style={{
                  width: `40%`,
                  textAlign: `center`,
                }}
              >
                linkedin
              </a>
              <a
                href="mailto:conatct@nobal.in"
                style={{
                  width: `20%`,
                  textAlign: `center`,
                }}
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
