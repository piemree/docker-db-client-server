import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    setAllTodos(state, todos) {
      state.todos = [...todos];
    },
    setNewTodo(state, todo) {
      state.todos = [...state.todos, todo];
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex((item) => item.id == id);
      state.todos.splice(index, 1);
    },
    replaceTodo(state, todo) {
      const index = state.todos.findIndex((item) => item.id == todo.id);
      state.todos.splice(index, 1, todo);
      //state.todos[index] = {...todo};
    },
  },
  actions: {
    getTodos({ commit }) {
      Vue.axios.get("/").then((result) => {
        console.log(result);
        commit("setAllTodos", result.data);
      });
    },
    addTodo({ commit }, todo) {
      Vue.axios.post("/add-todo", todo).then((result) => {
        console.log(result);
        commit("setNewTodo", result.data);
      });
    },
    deleteTodo({ commit }, id) {
      Vue.axios.delete(`/del-todo/${id}`).then((result) => {
        console.log(result);
        commit("deleteTodo", result.data.id);
      });
    },
    checkTodo({ commit, state }, id) {
      const willChangeItem = state.todos.find((item) => item.id == id);
      const modifiedItem = {
        ...willChangeItem,
        isFinish: !willChangeItem.isFinish,
      };
      Vue.axios.put("/modify-todo", modifiedItem).then((result) => {
        commit("replaceTodo", result.data);
      });
    },
  },
});
