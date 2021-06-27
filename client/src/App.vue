<template>
  <div id="app">
    <h1>test pusher</h1>
    <Todo v-for="todo in todos" :key="todo.id" :data="todo" />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import { io } from "socket.io-client";
//import axios from "axios";

export default {
  name: "App",
  components: {
    Todo,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    const socket = io("http://localhost:3000");

    let vm=this;

    socket.on("add", function(data) {
      vm.todos.push(data)
    
    });

    socket.on("delete", function(data) {
      console.log(data);
    });

    socket.on("update", function(data) {
      console.log(data);
    }); 
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
