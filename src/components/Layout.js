import React from 'react'
import { Link } from 'gatsby'
import './Layout.css'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.0),
            marginTop: 0,
            border: 'none'
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              fontSize: '32px',
              color: '#fff',
              padding: '8px 20px',
              background: 'linear-gradient(90deg,#feb6a3,#f964b0)',
              borderRadius: '5px'
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              fontSize: '32px',
              color: '#fff',
              padding: '8px 20px',
              background: 'linear-gradient(90deg,#feb6a3,#f964b0)',
              borderRadius: '5px'
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer
          style={{
            fontSize: `12px`,
            marginTop: `4%`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
