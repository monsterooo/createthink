import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BlogView from '../components/Blog/BlogView';
import SEO from "../components/seo";

const BlogTemplate = ({ data }) => {
  const { strapiArticle: blog } = data;
  return (
    <>
      <SEO title="Blog-view" />
      <Header reversal />
      <BlogView blog={blog} />
      <Footer />
    </>
  )
}

export default BlogTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
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
`