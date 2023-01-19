import { CREATECO, FETCH_ALL_CO, DELETECO } from "../constants/actionConstants";
import * as api from "../axios/index";

export const getComments = () => async (dispatch) => {
  try {
    const { data } = await api.getComments();

    dispatch({ type: FETCH_ALL_CO, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createComment = (post) => async (dispatch) => {
  try {
    const { data } = await api.createComment(post);

    dispatch({ type: CREATECO, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteComments = (id) => async (dispatch) => {
  try {
    await api.deleteComments(id);

    dispatch({ type: DELETECO, payload: id });
  } catch (error) {
    console.log(error);
  }
};
