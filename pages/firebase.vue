<template>
  <div>
    <h1>Firebase</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
    </ul>
    <div>
      <button @click="$store.commit('ticket/load',5)">
        +
      </button>
      <p>{{ list }}</p>
      <br>
    </div>
  </div>
</template>
<script>
import login from "@/services/Firebase/login";
import { mapMutations , mapGetters } from 'vuex';
export default{
  name:'firebase',
  mounted(){
    this.login();
    console.log(this.$store);
  },
  computed:{
    todos () {
      return this.$store.state.todos.list
    },
    counter(){
      return this.$store.state.counter;
    },
    list(){
      return this.$store.state.products.ticket_id;
    }
  },
  methods: {
    async login() {
      await login.loginFirebase('gonzalo9991r@gmail.com', 'S@naluis2021')
        .then()
    },
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    }),
  }
}
</script>
