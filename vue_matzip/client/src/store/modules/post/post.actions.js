import API from "@/utils/API";
import * as types from "@/store/modules/post/post.types";

export default {
  async getAllPosts({ commit }) {
    commit(types.GET_ALL_POSTS_PENDING);
    try {
      const {
        data: { pageInfo, postFeed: posts },
      } = await API.get("post");
      console.log(posts);
      commit(types.GET_ALL_POSTS_SUCCESS, {
        pageInfo,
        posts,
      });
    } catch (error) {
      console.log(error);
      commit(types.GET_ALL_POSTS_FAIL);
    }
  },

  async getPost({ commit }, { postId }) {
    if (!postId) {
      console.log("postId가 존재하지 않아서, 함수를 종료합니다.");
      return;
    }
    console.log(postId);
    commit(types.GET_POST_PENDING);
    try {
      const response = await API.get(`/post/${postId}`);
      console.log(response);
      commit(types.GET_POST_SUCCESS, {
        post: response.data,
      });
    } catch (error) {
      console.log(error);
      commit(types.GET_POST_FAIL);
    }
  },
};
