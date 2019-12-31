import React from "react"
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import SEO from "../components/seo"
import Contact from '../components/Contact/Contact';

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <Header reversal />
    <Hero className="hero__bg2">
      <div>
        <h1>Contact</h1>
        <p className="text-secondary mt-4">contact</p>
      </div>
    </Hero>
    <Contact />
    <Footer />
  </>
)

export default ContactPage;
