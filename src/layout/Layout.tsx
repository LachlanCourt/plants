import * as React from 'react'
import {MDXProvider} from '@mdx-js/react'
import { graphql } from 'gatsby'
import '../../src/assets/globals.css'
import { HeadingProvider } from '../components/mdx/Heading'

const components = {
   h1: HeadingProvider(1),
   h2: HeadingProvider(2),
   h3: HeadingProvider(3),
   h4: HeadingProvider(4),
   h5: HeadingProvider(5)
}

const Layout = ({children, ...data}) => {
    
    return (<MDXProvider components={components}>
      
        <div style={{margin: '0.3rem', paddingTop: '0.6rem'}}>
        <a href={'/'}
           style={{
            fontSize: '1.6rem', 
            textDecoration: 'none', 
            color: '#DDDDDD', 
            background: 'linear-gradient(45deg, #07590F, #297B2F)', 
            padding: '0.3rem',  
            borderRadius: '0.6rem',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
           }}
        >
           Back
        </a></div>
           <div style={{marginTop: '0.6rem'}}></div>
           {children}
    </MDXProvider>)
}

// export const pageQuery = graphql`
//   query ($id: String!) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//       }
//     }
//   }
// `

export default Layout