import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILED
} from '../actions/comments'

const initialState = []

export default (state = initialState, { type, payload }) => {
  console.log("payload", payload);
  switch(type) {
    case FETCH_COMMENTS_SUCCESS:
      return [...payload]
    case FETCH_COMMENTS_FAILED:
      return payload
    default:
      return state
  }
}
