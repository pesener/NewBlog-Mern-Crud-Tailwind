import { FETCH_ALL_CO, CREATECO, DELETECO } from "../constants/actionConstants";

export default (comments = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CO:
      return action.payload;

    case CREATECO:
      return [...comments, action.payload];
    case DELETECO:
      return comments.filter((comment) => comment._id !== action.payload);

    default:
      return comments;
  }
};
