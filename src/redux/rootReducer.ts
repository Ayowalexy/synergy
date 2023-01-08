import { combineReducers } from "@reduxjs/toolkit";
import { navReducer } from "./nav/navSlice";
import { postsReducer } from "./posts/postsSlice";

export const rootReducer = combineReducers({
  posts: postsReducer,
  nav: navReducer,
});
