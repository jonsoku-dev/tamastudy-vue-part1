const state = {
  todos: [],
};

const getters = {
  getTodos: (state) => state.todos,
};

const mutations = {
  ADD_TODO(state, todo) {
    state.todos = [...state.todos, todo];
  },
  DELETE_TODO(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  UPDATE_TODO(state, id) {
    state.todos = state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  },
};

const actions = {
  createTodo({ commit }, content) {
    commit("ADD_TODO", {
      id: `todo-${Date.now()}`,
      content,
      completed: false,
    });
  },
  deleteTodo({ commit }, id) {
    commit("DELETE_TODO", id);
  },
  updateTodo({ commit }, id) {
    commit("UPDATE_TODO", id);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
