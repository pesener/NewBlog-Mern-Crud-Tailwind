import {
  FETCH_ALL_CO,
  CREATECO,
  DELETECO,
  UPDATECO,
} from "../constants/actionConstants";

export default (comments = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CO:
      return action.payload;

    case CREATECO:
      return [...comments, action.payload];
    case DELETECO:
      return comments.filter((comment) => comment._id !== action.payload);

    case UPDATECO:
      return comments.map((com) =>
        com._id === action.payload._id ? action.payload : com
      );

    default:
      return comments;
  }
};
