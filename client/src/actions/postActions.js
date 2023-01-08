import {
  CREATE,
  FETCH_ALL,
  UPDATE,
  DELETE,
} from "../constants/actionConstants";
import * as api from "../axios/index";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
