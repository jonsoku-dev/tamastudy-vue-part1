import * as types from "./types";
import API from "../../services/API";

const initialState = {
  posts: [],
  pageInfo: {
    nextPageCursor: null,
    hasNextPage: false,
  },
  post: null,
  error: null,
};
const state = initialState;
const getters = {
  posts: (state) => state.posts,
  pageInfo: (state) => state.pageInfo,
  post: (state) => state.post,
};
const mutations = {
  [types.POST_GET_POSTS](state, data) {
    state.posts = data.postFeed;
    state.pageInfo = data.pageInfo;
  },
  [types.POST_GET_POST](state, post) {
    state.post = post;
  },
  [types.POST_MORE_POSTS](state, data) {
    const addedPosts = [...state.posts, ...data.postFeed];
    console.log(addedPosts);
    state.posts = addedPosts;
    state.pageInfo = data.pageInfo;
  },
  [types.POST_ERROR](state, error) {
    state.error = error;
  },
};
const actions = {
  async getPosts({ commit }, _query) {
    try {
      let query = { ..._query };
      const res = await API.get(
        `/post?${query.cursor ? `cursor=${query.cursor}` : null}&limit=${
          query.limit ? query.limit : null
        }`
      );
      commit(types.POST_GET_POSTS, res.data);
    } catch (error) {
      commit(types.POST_ERROR, error.response.data.err);
    }
  },
  async getMorePosts({ commit }, _query) {
    try {
      let query = { ..._query };
      console.log(query);
      const res = await API.get(
        `/post?${query.cursor ? `cursor=${query.cursor}` : null}&limit=${
          query.limit ? query.limit : null
        }`
      );
      console.log(res.data);
      commit(types.POST_MORE_POSTS, res.data);
    } catch (error) {
      commit(types.POST_ERROR, error.response.data.err);
    }
  },
  async getPost({ commit }, postId) {
    try {
      const res = await API.get(`/post/${postId}`);
      commit(types.POST_GET_POST, res.data);
      return res.data;
    } catch (error) {
      commit(types.POST_ERROR, error.response.data.err);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
