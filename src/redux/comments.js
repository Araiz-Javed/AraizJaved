import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./actionsTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      comment.date=new Date().toISOString();
      console.log("comments...............................:",comment);
      return state.concat(comment);
    default:
      return state;
  }
};