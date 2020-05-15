import slugify from "slugify";
import db, { firebaseAuth } from "../../firebase/init";
import * as types from "./types";
import router from "../../router";

const initialState = {
  posts: [],
  post: null,
  error: null,
};

const state = initialState;

const getters = {
  posts: (state) => state.posts,
  post: (state) => state.post,
};

const mutations = {
  [types.FIREBASE_GET_POSTS](state, posts) {
    state.posts = posts;
  },
  [types.FIREBASE_GET_POST](state, post) {
    state.post = post;
  },
  [types.FIREBASE_CREATE_POST](state, post) {
    state.posts = [...state.posts, post];
  },
  [types.FIREBASE_DELETE_POST](state, postId) {
    state.posts = state.posts.filter((post) => post.id !== postId);
  },
  [types.FIREBASE_UPDATE_POST](state, updatedPost) {
    state.posts = state.posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
  },
  [types.FIREBASE_POST_ERROR](state, error) {
    state.error = error;
  },
};

const actions = {
  getPosts: async ({ commit }) => {
    try {
      let posts = [];
      const snapshot = await db.collection("posts").get();
      snapshot.forEach((doc) => {
        let post = doc.data();
        post.id = doc.id;
        posts.push(post);
      });
      commit(types.FIREBASE_GET_POSTS, posts);
    } catch (error) {
      commit(types.FIREBASE_POST_ERROR, error.message);
    }
  },
  createPost: async ({ commit }, formData) => {
    try {
      if (!(await firebaseAuth.currentUser)) {
        commit(types.FIREBASE_POST_ERROR, "로그인해주세요. ");
        throw new Error("로그인해주세요. ");
      }
      const slug = slugify(formData.title, {
        replacement: "-",
        remove: /[$*_+~.()'"!\-:@]/g,
        lower: true,
      });
      const userEmail = await firebaseAuth.currentUser.email;
      const post = await db.collection("posts").add({
        title: formData.title,
        desc: formData.desc,
        user: userEmail,
        slug,
      });
      console.log(post.id);
      commit(types.FIREBASE_CREATE_POST, post);
    } catch (error) {
      commit(types.FIREBASE_POST_ERROR, error.message);
    }
  },
  getPost: async ({ commit }, postSlug) => {
    try {
      let post = null;
      // postSlug param을 준다.
      let ref = db.collection("posts").where("slug", "==", postSlug);
      const snapshot = await ref.get();
      snapshot.forEach((doc) => {
        post = doc.data();
        post.id = doc.id;
      });
      commit(types.FIREBASE_GET_POST, post);
    } catch (error) {
      commit(types.FIREBASE_POST_ERROR, error.message);
    }
  },
  deletePost: async ({ commit }, postId) => {
    try {
      await db.collection("posts").doc(postId).delete();
      commit(types.FIREBASE_DELETE_POST, postId);
      router.push({ name: "page-firebase-get-posts" });
    } catch (error) {
      commit(types.FIREBASE_POST_ERROR, error.message);
    }
  },
  updatePost: async ({ commit }, payload) => {
    try {
      const { postId, formData } = payload;
      const slug = slugify(formData.title, {
        replacement: "-",
        remove: /[$*_+~.()'"!\-:@]/g,
        lower: true,
      });
      await db.collection("posts").doc(postId).update({
        title: formData.title,
        desc: formData.desc,
        slug,
      });
      commit(types.FIREBASE_UPDATE_POST, postId);
      router.push({ name: "page-firebase-get-posts" });
    } catch (error) {
      commit(types.FIREBASE_POST_ERROR, error.message);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
