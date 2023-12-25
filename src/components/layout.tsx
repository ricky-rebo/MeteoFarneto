import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDBContainer } from 'mdbreact';
import Navbar from './navbar'
import Footer from './footer'
import "./layout.css"

const Layout = ({ location, children }: { location: any, children: undefined }) => (
     <>
        <StaticQuery
          query={navQuery}
          render={data => (
            <Navbar
              title={data.site.siteMetadata.title}
              links={data.site.siteMetadata.menuLinks}
              socials={data.site.siteMetadata.menuSocials}
              location={location}
            />
          )}
        />
        
        <MDBContainer>
          {children}
        </MDBContainer>
        
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


const navQuery = graphql`
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
`;