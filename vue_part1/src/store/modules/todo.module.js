import { firestoreAction } from 'vuexfire';
import { dbTodoRef } from '../../firebase';
import crs from 'crypto-random-string';

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
      return await context.bindFirestoreRef('todos', dbTodoRef.orderBy('createdAt'));
    } catch (error) {
      alert(error);
    }
  }),
  createTodo: async (context, content) => {
    try {
      const newTodo = {
        content,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await dbTodoRef.doc(crs({ length: 8 })).set(newTodo);
    } catch (error) {
      alert(error);
    }
  },
  deleteTodo: async (context, todo) => {
    try {
      await dbTodoRef.doc(todo.id).delete();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  },
  deleteCompletedTodo: async (context, todo) => {
    try {
      console.log(todo);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  },
  updateContent: async (context, todo) => {
    try {
      await dbTodoRef.doc(todo.id).update({
        content: todo.content,
        updatedAt: new Date(),
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  },
  updateComplete: async (context, todo) => {
    try {
      await dbTodoRef.doc(todo.id).update({
        completed: !todo.completed,
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  },
  updateAllComplete: async context => {
    try {
      await dbTodoRef.onSnapshot(docSnapshot => {
        docSnapshot.forEach(child => {
          child.ref.update({
            completed: true,
          });
        });
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  },
  deleteAllCompleted: async context => {
    try {
      const todos = await dbTodoRef.get();
      todos.forEach(todo => {
        if (todo.data().completed) {
          todo.ref.delete();
        }
      });
    } catch (error) {
      console.log(error);
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
