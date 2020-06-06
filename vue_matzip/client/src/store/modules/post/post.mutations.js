import * as types from "@/store/modules/post/post.types";

export default {
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
  },
};
