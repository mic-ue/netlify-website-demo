<template>
  <div id="app">
    <span class="circle" style="background-color:#222831">#222831</span>
    <span class="circle" style="background-color:#393e46">#393e46</span>
    <span class="circle" style="background-color:#0092ca">#0092ca</span>
    <span class="circle" style="background-color:#eeeeee">#eeeeee</span>
    
    <TopPage class="page top" />
    <Content class="page content" />

    <font-awesome-icon :icon="['fab','github']" class="icon"/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import 'normalize.css'
import HelloWorld from './components/HelloWorld.vue'
import TopPage from './components/TopPage'
import Content from './components/Content'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TopPage,
    Content,
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

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'M PLUS 1p', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #0092ca; */
  /* margin-top: 60px; */

  background-color: #eeeeee;
}
.row {
  padding: 1em;
}

.page {
  margin: 1rem;
}

.icon {
  margin-right: 10px;
  font-size: 1.5em;
  color: #eee;
}

.circle {
  padding:15px;
  border-radius: 50%;
  font-size: 0.5rem;
  color: black;
}

</style>
