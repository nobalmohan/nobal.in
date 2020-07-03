import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import './bio_component.scss'

import { rhythm } from '../../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
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
            <h1 className="title">Hi, I am Nobal</h1>
            <p className="note">
              I am a Freelance Frontend Consultant based out of Bangalore, India. I have over 9+ years of experience in diverse web technologies. This is my blog about tech, travel and my learnings along the way. Drop a mail if you want to hire me! 
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
