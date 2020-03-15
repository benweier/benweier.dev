import React from 'react'
import Layout from '../components/Layout'
import Links from '../components/Links'
import Identity from '../components/Identity'
import Footer from '../components/PageFooter'
import { Section } from '../components/styled'

const Home = () => (
  <Layout>
    <Section>
      <Identity />
      <Links />
    </Section>
    <Footer />
  </Layout>
)

export default Home
