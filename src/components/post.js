import React from "react"
import postStyles from "./post.module.css"

export default function Post({ children }) {
  return <div className={postStyles.card}>{children}</div>
}