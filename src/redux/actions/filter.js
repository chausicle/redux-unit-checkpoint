export const FILTER_POSTS_BY_TITLE = "FILTER_POSTS_BY_TITLE"

export const filterByTitle = (title) => {
  return async dispatch => {
    dispatch({
      type: FILTER_POSTS_BY_TITLE,
      payload: title.toLowerCase()
    })
  }
}
