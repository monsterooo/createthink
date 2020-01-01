import React from "react";
import { Link, graphql } from "gatsby";
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Image from "../components/image"
import SEO from "../components/seo"
import Home from '../components/Home/Home';

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Header />
    <Hero className="hero--mask">
      <div>
        <h1>创造&实现商业计划</h1>
        <p className="text-secondary mt-4">CREATETHINK为您提供定制的设计、开发服务, 同时注重制作移动优先的WEB、H5和小程序。根据您的需要量身定义最合适的系统。</p>
        <div>
          <a href="/contact" className="btn btn-green text-white mt-4">免费咨询</a>
        </div>
      </div>
    </Hero>
    <Home blogs={data.allStrapiArticle.edges.slice(0, 3)} />
    <Footer />
  </>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          created_at(formatString: "YYYY-MM-DD")
          description
          category {
            title
          }
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          author {
            username
          }
        }
      }
    }
  }
`