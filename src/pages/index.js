import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from '../components/Home/Home';

const heroLeft = (
  <div>
    <h1>创造&实现商业计划</h1>
    <p className="text-secondary mt-4">CREATETHINK为您提供定制的设计、开发服务, 同时注重制作移动优先的WEB、H5和小程序。根据您的需要量身定义最合适的系统。</p>
    <div>
      <button className="btn btn-green text-white mt-4">免费咨询</button>
    </div>
  </div>
)

const IndexPage = () => (
  <Layout heroLeft={heroLeft}>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
