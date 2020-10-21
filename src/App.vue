<template>
  <div id="app">
    <vue-typer :text="['welcome this web site\nthis is my schedule calender\n探し物は見つかりそうですか？\n\n\n']"
    class="top-text" :repeat="0" :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000"></vue-typer><br>

    <font-awesome-icon icon="birthday-cake" class="icon"/>
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

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300&display=swap');

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'M PLUS 1p', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.icon {
  margin-right: 10px;
  font-size: 2em;
}

</style>
