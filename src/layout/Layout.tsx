import * as React from 'react'
import {MDXProvider} from '@mdx-js/react'
import { graphql } from 'gatsby'

const Layout = ({children, ...data}) => {
    console.log(data)
    console.log(children)
    return (<MDXProvider><div>Heading</div>{children}
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