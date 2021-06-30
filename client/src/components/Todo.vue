<template>
  <div>
    <h1 :style="{ color: data.isFinish ? 'green' : 'red' }">
      {{ data.text }} <button @click="deleteTodo(data._id)">delete</button><button @click="checkTodo(data._id)">check/uncheck</button>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    data: Object,
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo",id);
    },
    checkTodo(id){
      this.$store.dispatch("checkTodo",id);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
