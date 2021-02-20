import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"
import DoYouWant from "../components/doyouwant"
import ReactPlayer from 'react-player/file'

export default function Home({ data }) {
  return (
    <Layout>
      <div id="topHeadersVideo" css={css`text-align: center;`}>
        <h1 css={css`color: rgb(126, 72, 28);`}>如何在六個星期學會一個電商營銷賺取六至八位數字的收入</h1>
        <h2>[就算沒有相關經驗也可以做到]</h2>
        <ReactPlayer playing width="400px" height="400px" css={css`margin: auto;`}
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          poster="https://video.fujisuzuki.com/funnel/new1/0711-1.jpg"
          url={[
            {src: 'https://video.fujisuzuki.com/funnel/new1/0711-1.mp4', type: 'video/mp4'},
            {src: 'https://video.fujisuzuki.com/funnel/new1/0711-1.webm', type: 'video/webm'}
          ]}
        />
      </div>
      <DoYouWant />
      <div id="listTeamMembers">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <Post image={node.frontmatter.image} title={node.frontmatter.title}>
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