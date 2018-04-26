export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED"

export const CREATE_POSTS_SUCCESS = "CREATE_POSTS_SUCCESS"
export const CREATE_POSTS_FAILED = "CREATE_POSTS_FAILED"

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
