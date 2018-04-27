import {
  FILTER_POSTS_BY_TITLE
} from '../actions/filter'

const initialState = []

export default (state = initialState, { type, payload }) => {
  console.log(payload);
  switch(type) {
    case FILTER_POSTS_BY_TITLE:
      return payload
    default:
      return state
  }
}
