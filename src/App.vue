<template>
  <div id="app">
    <TopPage />
    <font-awesome-icon icon="birthday-cake" class="icon"/>
    <font-awesome-icon icon="birthday-cake" class="icon"/>
    <font-awesome-icon icon="birthday-cake" class="icon"/>
    <font-awesome-icon icon="birthday-cake" class="icon"/>
    <font-awesome-icon icon="birthday-cake" class="icon"/>
    
    <font-awesome-icon :icon="['fab','github']" class="icon"/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import 'normalize.css'
import HelloWorld from './components/HelloWorld.vue'
import TopPage from './components/TopPage'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TopPage,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500&display=swap');

html, body, #app {
  height: 100%;
}

#app {
  position: relative;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'M PLUS 1p', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0092ca;
  margin-top: 60px;

  background-color: gray;
}

#main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.icon {
  margin-right: 10px;
  font-size: 1.5em;
}
.vue-typer .custom.char {
  color: #0092ca;
}
</style>
