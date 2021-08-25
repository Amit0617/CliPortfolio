import * as React from 'react'  //importing react
import Layout from '../components/layout'
import {Link} from 'gatsby'

//Defining component
const IndexPage = () => {
  return (
    
      <Layout pageTitle="CLI Portfolio">
      <h2>Welcome to a random Bash User Portfolio</h2>
      <Link to="/firstpage">Want to see how my first gatsby page looked like</Link>
      </Layout>
      )
      }  

//exporting component so that it can be used by other parts of my website
export default IndexPage
