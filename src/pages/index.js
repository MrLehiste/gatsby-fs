import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <Post>
                <img src={node.frontmatter.image} alt={node.frontmatter.title} />
                <p>{node.excerpt}</p>
              </Post>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`