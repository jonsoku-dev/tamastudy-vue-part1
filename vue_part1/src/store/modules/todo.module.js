import { firestoreAction } from 'vuexfire';
import { dbTodoRef } from '../../firebase';

const state = {
  todos: [],
};

const getters = {
  getTodos: state => state.todos,
};

const mutations = {};

const actions = {
  bindTodosRef: firestoreAction(async context => {
    try {
      return await context.bindFirestoreRef('todos', dbTodoRef);
    } catch (error) {
      alert(error);
    }
  }),
  createTodo: async ({ commit }, content) => {
    try {
      const newTodo = {
        content,
        completed: false,
      };
      await dbTodoRef.doc(`todo`).set(newTodo);
    } catch (error) {
      alert(error);
    }
  },
  deleteTodo: ({ commit }, id) => {
    commit('DELETE_TODO', id);
  },
  updateTodo: async ({ commit }, todo) => {
    try {
      await dbTodoRef.doc(todo.id).update({
        completed: !todo.completed,
      });
    } catch (error) {
      alert(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
