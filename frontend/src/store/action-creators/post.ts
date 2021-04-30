import {Dispatch} from "redux";
import { http } from "../../http";
import { PostAction, PostActionTypes } from "../../types/post";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({type: PostActionTypes.FETCH_POSTS});

      const response = await http.get('api/posts/');
      dispatch({
        type: PostActionTypes.FETCH_POSTS_SUCCESS,
        payload: response.data
      });
    }
    catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Error while loading posts list'
      });
    }
  }
}

export const createPost = (title: string, text: string) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({type: PostActionTypes.CREATE_POST});
      const response = await http.post('api/posts/', {title, text});
      dispatch({
        type: PostActionTypes.CREATE_POST_SUCCESS,
        payload: response.data
      });
    }
    catch (e) {
      dispatch({
        type: PostActionTypes.CREATE_POST_ERROR,
        payload: 'Error while create a new post'
      });
    }
  }
}

export const deletePost = (id: number) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({type: PostActionTypes.DELETE_POST});
      await http.delete(`api/posts/${id}`);
      dispatch({
        type: PostActionTypes.DELETE_POST_SUCCESS,
        payload: id
      });
    }
    catch (e) {
      dispatch({
        type: PostActionTypes.DELETE_POST_ERROR,
        payload: 'Error while delete some post'
      });
    }
  }
}