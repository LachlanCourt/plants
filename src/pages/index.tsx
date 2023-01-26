import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Card } from "../components/Card"
import {Image } from '../components/Image'
import '../assets/fonts/luminari/stylesheet.css'

//F7A3AE
const IndexPage: React.FC<PageProps> = () => {
  return (
    <div style={{background: "linear-gradient(#81C26E 25%, #EEEEEE)", width: "100%", height: "100vh", borderRadius: '0.6rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
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
      <a href={'/test/testing'} style={{textDecoration: 'none', color: '#DDDDDD', background: '#BB11BB', padding: '0.3rem', borderRadius: '0.6rem',boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}>Test link</a>
      <a href={'/test/other'} style={{textDecoration: 'none', color: '#AA6666', background: '#FF8888', padding: '0.3rem', borderRadius: '0.6rem',boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)', ":hover": {background: '#EE7777'}}}>Another link</a>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
