import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import Footer from './footer'
import "./layout.css"

const Layout = ({ children }) => (
     <>
        <StaticQuery
          query={graphql`
            query SiteQuery {
              site {
                siteMetadata {
                  title
                  menuSocials {
                    icon
                    url
                  }
                  menuLinks {
                    type
                    name
                    url
                    items {
                      type
                      name
                      url
                    }
                  } 
                }
              }
            }          
          `}
          render={data => (
            <Navbar
              title={data.site.siteMetadata.title}
              links={data.site.siteMetadata.menuLinks}
              socials={data.site.siteMetadata.menuSocials}
            />
          )}
        />
        {children}
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
