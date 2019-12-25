import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  color: red;
`;

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <Container>
      <p>Welcome to page 2</p>
    </Container>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
