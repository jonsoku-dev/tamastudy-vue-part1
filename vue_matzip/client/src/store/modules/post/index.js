import getters from "@/store/modules/post/post.getters";
import mutations from "@/store/modules/post/post.mutations";
import actions from "@/store/modules/post/post.actions";

const state = () => {
  return {
    posts: [],
    pageInfo: null,
    post: null,
    getAllPostsLoading: false,
    getPostLoading: false,
    createPostLoading: false,
    updatePostLoading: false,
  };
};

export default {
  state,
  getters,
  mutations,
  actions,
};
