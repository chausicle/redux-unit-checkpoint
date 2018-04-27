export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED"

export const CREATE_POSTS_SUCCESS = "CREATE_POSTS_SUCCESS"
export const CREATE_POSTS_FAILED = "CREATE_POSTS_FAILED"

export const UPVOTE_POST_SUCCESS = "UPVOTE_POST_SUCCESS"
export const UPVOTE_POST_FAILED = "UPVOTE_POST_FAILED"

export const DOWNVOTE_POST_SUCCESS = "DOWNVOTE_POST_SUCCESS"
export const DOWNVOTE_POST_FAILED = "DOWNVOTE_POST_FAILED"

const BASE_URL = "http://localhost:8082/api"

export const fetchPosts = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts`)
      let posts = await response.json()
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts
      })
    } catch(err) {
      dispatch({
        type: FETCH_POSTS_FAILED,
        payload: err
      })
    }
  }
}

export const createPost = newPost => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      let post = await response.json()
      dispatch({
        type: CREATE_POSTS_SUCCESS,
        payload: post
      })
    } catch (err) {
      dispatch({
        type: CREATE_POSTS_FAILED,
        payload: err
      })
    }
  }
}

export const upvotePost = post_id => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts/votes/increase/${post_id}`)
      let post = await response.json()
      dispatch({
        type: UPVOTE_POST_SUCCESS,
        payload: post
      })
    } catch (err) {
      dispatch({
        type: UPVOTE_POST_FAILED,
        payload: err
      })
    }
  }
}

export const downvotePost = post_id => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts/votes/decrease/${post_id}`)
      let post = await response.json()
      dispatch({
        type: DOWNVOTE_POST_SUCCESS,
        payload: post
      })
    } catch(err) {
      dispatch({
        type: DOWNVOTE_POST_FAILED,
        payload: err
      })
    }
  }
}
