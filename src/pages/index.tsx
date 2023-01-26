import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { Card } from "../components/Card"
import {Image } from '../components/Image'
import '../assets/fonts/luminari/stylesheet.css'

interface QueryData {
  frontmatter: {
    title_image_name: string;
    slug: string;
    title: string;
  }
}

interface IndexProps {
  data: {
    allMdx?: {
      nodes: Array<QueryData>
    }
  }
}

const IndexPage: React.FC<PageProps> = ({data}: IndexProps) => {
  const files:Array<QueryData> = data?.allMdx?.nodes?.filter((node) => {
    return node.frontmatter.title_image_name !== null;
  }) || []

  console.log(files)
  
  return (
    <div style={{
      //background: "linear-gradient(#81C26E 25%, #EEEEEE)", 
      width: "100%", 
      height: "100vh", 
      borderRadius: '0.6rem', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem', 
      alignItems: 'center'
      }}
    >
      <>
      <div 
        style={{
          background: '#555555', 
          color: '#EEEEEE', 
          padding: '0.6rem', 
          marginTop: '0.6rem', 
          borderRadius: '0.6rem', 
          boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
          fontFamily: 'luminariregular',
          fontSize: '1.8rem'
        }}
      >
        PLANTS!
      </div>

      <Card><Image src={'front-page.jpeg'}/></Card>

      <Card style={{textAlign: 'center'}}>Select an image below to navigate to the page for that plant</Card>
      
      {files.map(({frontmatter}, index) => {
        return (
          <a href={frontmatter.slug} key={index} style={{textDecoration: 'none', color: 'black'}}>
            <Card>
              {frontmatter.title}
              <Image src={frontmatter.title_image_name}/>
            </Card>
          </a>
        )        
      })}
      </>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`query {
  allMdx {
    nodes {
      frontmatter {
        title_image_name
        slug
        title
      }
    }
  }
}`

export const Head: HeadFC = () => <title>Home Page</title>
