import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div style={{background: "#EEEEEE", width: "100%", height: "100vh", display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
      <div style={{background: '#555555', color: '#EEEEEE', padding: '0.6rem', marginTop: '0.6rem', borderRadius: '0.6rem', boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}>
        PLANTS!
      </div>
      <a href={'/test/testing'} style={{textDecoration: 'none', color: '#DDDDDD', background: '#BB11BB', padding: '0.3rem', borderRadius: '0.6rem',boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}>Test link</a>
      <a href={'/test/other'} style={{textDecoration: 'none', color: '#AA6666', background: '#FF8888', padding: '0.3rem', borderRadius: '0.6rem',boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)', ":hover": {background: '#EE7777'}}}>Another link</a>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
