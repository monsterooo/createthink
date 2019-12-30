import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from '../components/Blog/Blog';

const heroLeft = (
  <div>
    <h1>Blog</h1>
    <p className="text-secondary mt-4">我们撰写并展示专业的技术文章, 欢迎阅读和分享</p>
  </div>
)

const BlogPage = () => (
  <Layout heroLeft={heroLeft}>
    <SEO title="Home" />
    <Blog />
  </Layout>
)

export default BlogPage
