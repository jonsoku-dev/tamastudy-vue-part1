import { firestoreAction } from 'vuexfire';
import { dbTodoRef } from '../../firebase';

const state = {
  todos: [],
};

const getters = {
  getTodos: state => state.todos,
};

const mutations = {
  ADD_TODO(state, todo) {
    state.todos = [...state.todos, todo];
  },
  DELETE_TODO(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  UPDATE_TODO(state, updatedTodo, id) {
    state.todos = state.todos.map(todo => (todo.id === id ? updatedTodo : todo));
  },
};

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
        id: `todo-${Date.now()}`,
        content,
        completed: false,
      };
      commit('ADD_TODO', newTodo);
      await dbTodoRef.add(newTodo);
    } catch (error) {
      alert(error);
    }
  },
  deleteTodo: ({ commit }, id) => {
    commit('DELETE_TODO', id);
  },
  updateTodo: async ({ commit }, id) => {
    try {
      const todo = await dbTodoRef;
      console.log(todo);
      commit('UPDATE_TODO', todo, id);
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
