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
    deleteTodo(state, _id) {
      const index = state.todos.findIndex((item) => item._id == _id);
      state.todos.splice(index, 1);
    },
    replaceTodo(state, todo) {
      const index = state.todos.findIndex((item) => item._id == todo._id);
      state.todos.splice(index, 1, {
        ...state.todos[index],
        isFinish: todo.isFinish,
      });
      //state.todos[index] = {...todo};
    },
  },
  actions: {
    initializeSocket({ commit }) {
      this._vm.$io.on("add", (document) => {
        console.log(document);
        commit("setNewTodo", document);
      });
      this._vm.$io.on("delete", (document) => {
        console.log(document);
        commit("deleteTodo", document._id);
      });
      this._vm.$io.on("update", (document) => {
        console.log(document);
        commit("replaceTodo", document);
      });
    },
    getTodos({ commit }) {
      Vue.axios.get("/").then((result) => {
        commit("setAllTodos", result.data);
      });
    },
    addTodo(ctx, todo) {
      Vue.axios.post("/add-todo", todo).then(() => {
        // commit("setNewTodo", result.data);
      });
    },
    deleteTodo(ctx, id) {
      Vue.axios.delete(`/del-todo/${id}`).then(() => {
        //commit("deleteTodo", result.data._id);
      });
    },
    async checkTodo({ state }, _id) {
      const willChangeItem = state.todos.find((item) => item._id == _id);
      const modifiedItem = {
        ...willChangeItem,
        isFinish: !willChangeItem.isFinish,
      };
      await Vue.axios.put("/modify-todo", modifiedItem);
    },
  },
});
