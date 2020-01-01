import React from "react"
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import SEO from "../components/seo"
import Blog from '../components/Blog/Blog';

const BlogPage = ({ data }) => (
  <>
    {console.log('blogs > ', data)}
    <SEO title="Blog" />
    <Header reversal />
    <Hero className="hero__bg2">
      <div>
        <h1>Blog</h1>
        <p className="text-secondary mt-4">我们撰写并展示专业的技术文章, 欢迎阅读和分享</p>
      </div>
    </Hero>
    <Blog blogs={data.allStrapiArticle.edges} />
    <Footer />
  </>
)

export default BlogPage


export const pageQuery = graphql`  
  query BlogQuery {
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