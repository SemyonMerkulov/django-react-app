import {Dispatch} from "redux";
import { http } from "../../http";
import { PostAction, PostActionTypes } from "../../types/post";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({type: PostActionTypes.FETCH_POSTS});

      const response = await http.get('api/posts');
      dispatch({
        type: PostActionTypes.FETCH_POSTS_SUCCESS,
        payload: response.data
      });
    }
    catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Error loading'
      });
    }
  }
}