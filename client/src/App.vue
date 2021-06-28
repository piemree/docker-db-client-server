<template>
  <div id="app">
    <div>
      <input type="text" v-model="todo.text" />
      <button @click="addTodo">add</button>
    </div>
    <Todo v-for="todo in todos" :key="todo.id" :data="todo" />
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
    /*  const socket = io("http://localhost:3000");

    let vm=this;

    socket.on("add", function(data) {
      vm.todos.push(data)
    
    });

    socket.on("delete", function(data) {
      console.log(data);
    });

    socket.on("update", function(data) {
      console.log(data);
    });  */
  },
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.todo);
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
