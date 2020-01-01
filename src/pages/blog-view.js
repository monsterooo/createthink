import React from "react"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BlogView from '../components/Blog/BlogView';
import SEO from "../components/seo"

const BlogPage = () => (
  <>
    <SEO title="Blog-view" />
    <Header reversal />
    <BlogView />
    <Footer />
  </>
)

export default BlogPage
