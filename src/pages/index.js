import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../components/styles/home.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="section">
      <div className="service">
        <span class="badge badge-green text-white">服务</span>
        <h4>Learn design with our new course.</h4>
        <p>Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col">
              <i class="ti-comments-smiley"></i>
              <h4>
                Service A
              </h4>
              <p>Service C description</p>
            </div>
            <div className="col">
              <i class="ti-ruler-pencil"></i>
              <h4>
                Service A
              </h4>
              <p>Service C description</p>
            </div>
            <div className="col">
              <i class="ti-hummer"></i>
              <h4>
                Service B
              </h4>
              <p>Service C description</p>
            </div>
            <div className="col">
              <i class="ti-link"></i>
              <h4>
                Service C
              </h4>
              <p>Service C description</p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col">a</div>
            <div className="col">b</div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      tools
    </section>

    <h1>Hi people</h1>
    <button type="button" className="btn btn-primary">Primary</button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
