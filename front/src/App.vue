<template>
  <div>
    <h1>Mes Taches</h1>
    <form @submit.prevent="addTask">
      <input type="text" placeholder="Text" v-model="value" />
      <button type="submit">Ajouter une tache</button>
    </form>
    <Task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        @toggle="toggleCheck(task)"
        @delete="deleteTask(index)"
    />
    <h2>Stats</h2>
    <p>{{ done }}/{{ total }}({{ avg }}%)</p>
  </div>
</template>

<script>
import Task from './components/Task.vue';
export default {
  name: 'App',
  components: {
    Task
  },
  data: () => ({
    value: '',
    tasks: [],
  }),
  computed: {
    total() {
      return this.tasks.length;
    },
    done() {
      return this.tasks.filter(task => task.checked).length
    },
    avg() {
      return (this.total > 0 ? this.done / this.total * 100 : 0).toFixed(2);
    }
  },
  methods: {
    addTask() {
      this.tasks.push({ name: this.value, checked: false });
      this.value = '';
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    toogleCheck(task) {
      task.checked = !task.checked;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 50vw;
  margin: auto;
  margin-top: 60px;
}
.task {
  display: flex;
}
</style>
