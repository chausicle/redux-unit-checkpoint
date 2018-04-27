import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  CREATE_POSTS_SUCCESS,
  CREATE_POSTS_FAILED,
  UPVOTE_POST_SUCCESS,
  UPVOTE_POST_FAILED,
  DOWNVOTE_POST_SUCCESS,
  DOWNVOTE_POST_FAILED
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
    case UPVOTE_POST_SUCCESS:
      // const post = state.find(post => post.id === payload.id)
      // const index = state.indexOf(post)
      // return [...state.slice(0, index), payload, ...state.slice(index + 1)]
      let filteredUpvoteState = state.filter(post => post.id !== payload.id)
      return [...filteredUpvoteState, payload].sort((a, b) => b.votes - a.votes)
    case UPVOTE_POST_FAILED:
      return payload
    case DOWNVOTE_POST_SUCCESS:
      // const post = state.find(post => post.id === payload.id)
      // const index = state.indexOf(post)
      // return [...state.slice(0, index), payload, ...state.slice(index + 1)]
      let filteredDownvoteState = state.filter(post => post.id !== payload.id)
      return [...filteredDownvoteState, payload].sort((a, b) => b.votes - a.votes)
    case DOWNVOTE_POST_FAILED:
      return payload
    default:
      return state
  }
}
