const initialState = {
  posts: [],
  loading: false,
  error: null
}


export const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {loading: true, error: null, posts: []}
    default:
      return state
  }
}