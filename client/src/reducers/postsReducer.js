import {
  CREATE,
  FETCH_ALL,
  UPDATE,
  DELETE,
} from "../constants/actionConstants";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    default:
      return posts;
  }
};
