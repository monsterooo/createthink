/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header/Header";
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
import './styles/themify-icons/themify-icons.css';

const Layout = ({ children }) => {
  /*
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  */

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header />
      <Hero />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
