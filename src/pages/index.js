import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Learn to <br />design and code React apps</h1>
    <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. I am happy with this.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
