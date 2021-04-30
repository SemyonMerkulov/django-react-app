import {Dispatch} from "redux";
import { PostAction, PostActionTypes } from "../../types/post";

const postsMock = [
  {
    id: 1,
    title: "lorem mothefucking ipsum",
    text: "stupid shitty text"
  },
  {
    id: 2,
    title: "lorem mothefucking ipsum",
    text: "stupid shitty text"
  },
  {
    id: 3,
    title: "lorem mothefucking ipsum",
    text: "stupid shitty text"
  }
];

export const fetchPosts = () => {
  return (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({type: PostActionTypes.FETCH_POSTS});
      setTimeout(() => {
        dispatch({
          type: PostActionTypes.FETCH_POSTS_SUCCESS,
          payload: postsMock
        });
      }, 1000);
    }
    catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Error loading'
      });
    }
  }
}