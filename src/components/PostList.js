import React from 'react'
import { connect } from "react-redux"
import Post from "./Post"

const PostList = ({ posts }) => {
  // console.log(posts);
  console.log('1 PostList Component');
  let listOfPosts = posts.map(post => <Post key={post.id} post={post} />)
  return <div>{listOfPosts}</div>
}

const mapStateToProps = ({ posts, filter }) => ({
  posts: posts.filter(post => post.title.toLowerCase().includes(filter)) 
})

export default connect(mapStateToProps, null)(PostList)
