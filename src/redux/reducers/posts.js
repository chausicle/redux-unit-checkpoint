import {
  FETCH_POSTS_FAILED,
  FETCH_POSTS_SUCCESS,
  CREATE_POSTS_FAILED,
  CREATE_POSTS_SUCCESS,
} from "../actions/posts"

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_POSTS_SUCCESS:
      return [...payload]
    case FETCH_POSTS_FAILED:
      return payload
    case CREATE_POSTS_SUCCESS:
      return [...state, payload]
    case CREATE_POSTS_FAILED:
      return payload
    default:
      return state
  }
}
