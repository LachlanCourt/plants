import * as React from 'react'
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby';

interface ImageProps {
    src: string;
    alt?: string
}

interface QueryData {
    parent: {
        relativePath?: string
      }
    gatsbyImageData?: any
  }

export const Image = ({src, alt = ''}: ImageProps)  => {
    const data = useStaticQuery(ImageQuery)
    const node = data.allImageSharp.nodes.find((node: QueryData) => node.parent?.relativePath === src)
    const image = getImage(node.gatsbyImageData);
    if (!image) return null;
    return <GatsbyImage image={image} alt={alt}/>
}

const ImageQuery = graphql
`query {
    allImageSharp {
      nodes {
        parent {
          ... on File {
            relativePath
          }
        }
        gatsbyImageData
      }
    }
  }`


