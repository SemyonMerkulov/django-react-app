export interface PostState {
  posts: any[],
  loading: boolean,
  error: null | string
}

export interface PostItemProps {
  id: number,
  title: string,
  text: null | string
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
  CREATE_POST = 'CREATE_POST',
  CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS',
  CREATE_POST_ERROR = 'CREATE_POST_ERROR',
  DELETE_POST = 'DELETE_POST',
  DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
  DELETE_POST_ERROR = 'DELETE_POST_ERROR'
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
interface CreatePostAction {
  type: PostActionTypes.CREATE_POST;
}
interface CreatePostSuccessAction {
  type: PostActionTypes.CREATE_POST_SUCCESS;
  payload: PostItemProps;
}
interface CreatePostErrorAction {
  type: PostActionTypes.CREATE_POST_ERROR;
  payload: string;
}
interface DeletePostAction {
  type: PostActionTypes.DELETE_POST;
}
interface DeletePostSuccessAction {
  type: PostActionTypes.DELETE_POST_SUCCESS;
  payload: number;
}
interface DeletePostErrorAction {
  type: PostActionTypes.DELETE_POST_ERROR;
  payload: string;
}

export type PostAction = 
  FetchPostAction
  | FetchPostSuccessAction
  | FetchPostErrorAction
  | CreatePostAction
  | CreatePostSuccessAction
  | CreatePostErrorAction
  | DeletePostAction
  | DeletePostSuccessAction
  | DeletePostErrorAction