export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS"
export const FETCH_COMMENTS_FAILED = "FETCH_COMMENTS_FAILED"

export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS"
export const CREATE_COMMENT_FAILED = "CREATE_COMMENT_FAILED"

const BASE_URL = 'http://localhost:8082/api'

export const fetchComments = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/comments`)
      let comments = await response.json()
      dispatch({
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
      })
    } catch(err) {
      dispatch({
        type: FETCH_COMMENTS_FAILED,
        payload: err
      })
    }
  }
}

export const createComment = newComment => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newComment)
      })
      let newPost = await response.json()
      dispatch({
        type: CREATE_COMMENT_SUCCESS,
        payload: newPost
      })
    } catch(err) {
      dispatch({
        type: CREATE_COMMENT_FAILED,
        payload: err
      })
    }
  }
}
