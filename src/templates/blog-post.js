import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

export default function BlogPost({ data }) {
  const node = data.markdownRemark
  
  return (
    <Layout>
      <Post image={node.frontmatter.image} title={node.frontmatter.title}>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
      </Post>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`