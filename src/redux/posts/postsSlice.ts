import { createSlice } from "@reduxjs/toolkit";
import { ICardDetails, IComments } from "../../types/card";
import { v4 } from "uuid";
import { posts } from "../../@fake-db/posts/posts";
interface ICommentAction {
  id: string;
  postId: string;
}

interface IPostComment {
  postId: string;
  comment: IComments;
}
const initialState = {
  posts: posts,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = [...action.payload];
    },
    setPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    setSave: (state, action) => {
      const posts = state.posts;
      posts[action.payload].save = !posts[action.payload].save;
      state.posts = [...posts];
    },
    setPostLike: (state, action) => {
      const posts = state.posts;
      const card = posts.filter((item) => item.id === action.payload)[0];

      if (posts[posts.indexOf(card)].like === "like") {
        posts[posts.indexOf(card)].like = "nil";
      } else {
        posts[posts.indexOf(card)].like = "like";
      }
      state.posts = [...posts];
    },
    setPostDislike: (state, action) => {
      const posts = state.posts;
      const card = posts.filter((item) => item.id === action.payload)[0];

      if (posts[posts.indexOf(card)].like === "dislike") {
        posts[posts.indexOf(card)].like = "nil";
      } else {
        posts[posts.indexOf(card)].like = "dislike";
      }
      state.posts = [...posts];
    },
    setComment: (state, action) => {
      const posts = state.posts;
      const payload = action.payload as IPostComment;
      const card = posts.filter((item) => item.id === payload.postId)[0];
      const newArr = posts;
      newArr[posts.indexOf(card)].comments = [
        payload.comment,

        ...newArr[posts.indexOf(card)].comments,
      ];
      state.posts = [...newArr];
    },
    setCommentLike: (state, action) => {
      const payload = action.payload as ICommentAction;

      const posts = state.posts;
      const card = posts.filter((item) => item.id === payload.postId)[0];
      const comments = card.comments;
      const comment = comments.filter(
        (comment) => comment.id === payload.id
      )[0];

      if (comments[comments.indexOf(comment)].like === "like") {
        comments[comments.indexOf(comment)].like = "nil";
      } else {
        comments[comments.indexOf(comment)].like = "like";
      }
      posts[posts.indexOf(card)].comments = [...comments];
      state.posts = [...posts];
    },
    setCommentDislike: (state, action) => {
      const payload = action.payload as ICommentAction;

      const posts = state.posts;
      const card = posts.filter((item) => item.id === payload.postId)[0];
      const comments = card.comments;
      const comment = comments.filter(
        (comment) => comment.id === payload.id
      )[0];

      if (comments[comments.indexOf(comment)].like === "dislike") {
        comments[comments.indexOf(comment)].like = "nil";
      } else {
        comments[comments.indexOf(comment)].like = "dislike";
      }
      posts[posts.indexOf(card)].comments = [...comments];
      state.posts = [...posts];
    },
    setCommentDisplay: (state, action) => {
      const posts = state.posts;
      const card = posts.filter((item) => item.id === action.payload)[0];

      posts[posts.indexOf(card)].open = !posts[posts.indexOf(card)].open;

      state.posts = [...posts];
    },
    setFlagDisplay: (state, action) => {
      const posts = state.posts;
      posts[action.payload].flag = !posts[action.payload].flag;
    },
  },
});

// actions
export const {
  setPost,
  setPosts,

  setPostLike,
  setPostDislike,
  setComment,
  setSave,
  setCommentLike,
  setCommentDislike,
  setCommentDisplay,
  setFlagDisplay,
} = postsSlice.actions;

// reducer
export const postsReducer = postsSlice.reducer;
