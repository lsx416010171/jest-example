<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Axios />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyButton class="my-button" style="padding-top: 10px" buttonValue="Me" @add="addCounter"></MyButton>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Axios from './components/axios.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Axios
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    addCounter(value) {
      this.count = value
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
