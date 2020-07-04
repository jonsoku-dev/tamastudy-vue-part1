import * as types from "@/store/modules/post/post.types";

export default {
  // Get All Posts
  [types.GET_ALL_POSTS_PENDING]: (state) => {
    state.getAllPostsLoading = true;
    state.posts = [];
  },
  [types.GET_ALL_POSTS_SUCCESS]: (state, { posts, pageInfo }) => {
    state.getAllPostsLoading = false;
    state.posts = posts;
    state.pageInfo = pageInfo;
  },
  [types.GET_ALL_POSTS_FAIL]: (state) => {
    state.getAllPostsLoading = false;
    state.posts = [];
  },

  // Get Post
  [types.GET_POST_PENDING]: (state) => {
    state.getPostLoading = true;
    state.post = null;
  },
  [types.GET_POST_SUCCESS]: (state, { post }) => {
    state.getPostLoading = false;
    state.post = post;
  },
  [types.GET_POST_FAIL]: (state) => {
    state.getPostLoading = false;
    state.post = null;
  },
};
