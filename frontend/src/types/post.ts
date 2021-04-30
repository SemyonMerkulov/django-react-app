export interface PostState {
  posts: any[],
  loading: boolean,
  error: null | string
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
}

interface FetchPostAction {
  type: PostActionTypes.FETCH_POSTS
}
interface FetchPostSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS;
  payload: any[];
}
interface FetchPostErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

export type PostAction = 
  FetchPostAction
  | FetchPostSuccessAction
  | FetchPostErrorAction