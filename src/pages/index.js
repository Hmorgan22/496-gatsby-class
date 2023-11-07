
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Img from 'gatsby-image'
import Seo from '../components/seo'
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Testing 1 2 3.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />


export default IndexPage