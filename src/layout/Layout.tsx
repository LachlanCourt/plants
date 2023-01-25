import * as React from 'react'
import {MDXProvider} from '@mdx-js/react'
import { graphql } from 'gatsby'

const Layout = ({children, ...data}) => {
    console.log(data)
    console.log(children)
    return (<MDXProvider>
        <div>
        <a href={'/'}
           style={{textDecoration: 'none', color: '#DDDDDD', background: '#BB11BB', padding: '0.3rem',  borderRadius: '0.6rem',boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}
        >
           Back
        </a></div>
           <div style={{marginTop: '0.6rem'}}>Heading</div>
           {children}
    </MDXProvider>)
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`

export default Layout