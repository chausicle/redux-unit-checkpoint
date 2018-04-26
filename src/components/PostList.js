import React from 'react'
import { connect } from "react-redux"
import Post from "./Post"

const PostList = ({ posts }) => {
  console.log(posts);
  let listOfPosts = posts.map(post => <Post key={post.id} post={post} />)
  return <div>{listOfPosts}</div>
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps, null)(PostList)
