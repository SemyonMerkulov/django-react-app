import {PostAction, PostActionTypes, PostState} from "../../types/post";

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null
}


export const postReducer = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return {...state, loading: true}
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return {...state, loading: false, posts: action.payload}
    case PostActionTypes.FETCH_POSTS_ERROR:
      return {...state, loading: false, error: action.payload}  
    case PostActionTypes.CREATE_POST:
      return {...state, loading: true}
    case PostActionTypes.CREATE_POST_SUCCESS:
      return {...state, loading: false, posts: [...state.posts, action.payload]}
    case PostActionTypes.CREATE_POST_ERROR:
      return {...state, loading: false, error: action.payload}    
    case PostActionTypes.DELETE_POST:
      return {...state, loading: true}
    case PostActionTypes.DELETE_POST_SUCCESS:
      return {...state, loading: false, posts: state.posts.filter(post => post.id !== action.payload)}
    case PostActionTypes.DELETE_POST_ERROR:
      return {...state, loading: false, error: action.payload}      
    default:
      return state
  }
}