import React from 'react'
import { Link } from 'gatsby'
import './Layout.scss'

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
            className="logo"
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
            marginTop: `${rhythm(0.5)}`,
          }}
        >
          <Link
            className="logo"
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
          <a href="https://www.gatsbyjs.org?rel=nobal.in">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
