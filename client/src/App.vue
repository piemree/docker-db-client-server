<template>
  <div id="app">
    <form @submit.prevent="addTodo">
      <input type="text" v-model="todo.text" />
      <button type="submit">add</button>
    </form>
    <Todo v-for="todo in todos" :key="todo._id" :data="todo" />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
//import { io } from "socket.io-client";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Todo,
  },
  data() {
    return {
      todo: {
        text: "",
        isFinish: false,
      },
    };
  },
  mounted() {
    this.$store.dispatch("getTodos");
    this.$store.dispatch("initializeSocket")
  },
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    addTodo() {
      
      this.$store.dispatch("addTodo", this.todo);
      this.todo.text=""
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
