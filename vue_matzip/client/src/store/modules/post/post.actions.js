import API from "@/utils/API";
import * as types from "@/store/modules/post/post.types";

export default {
  async getAllPosts({ commit }) {
    commit(types.GET_ALL_POSTS_PENDING);
    try {
      const {
        data: { pageInfo, postFeed: posts },
      } = await API.get("post");
      commit(types.GET_ALL_POSTS_SUCCESS, {
        pageInfo,
        posts,
      });
    } catch (error) {
      commit(types.GET_ALL_POSTS_FAIL);
    }
  },
};
