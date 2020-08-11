<template>
  <v-app>
    <div id="app">
      <Header />
      <div id="nav">
        <ul id="nav-list">
        <router-link to="/plan" id="nav-element">
            <img alt="Logo" src="./assets/planLogo.png" style="width:40px;height:40px;">
            Plan
        </router-link>
        <router-link to="/moduleTree" id="nav-element">
            <img alt="Logo" src="./assets/treeLogo.png" style="width:40px;height:40px;">
            Module Tree
        </router-link>
        <router-link to="/moduleinfo" id="nav-element">
            <img alt="Logo" src="./assets/moduleinfoLogo.png" style="width:40px;height:40px;">
            Module Information
        </router-link>
        </ul>
      </div>
        <hr>
      <router-view/>
      </div>
  </v-app>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      isHidden: false
    }
  }
}
</script>>

<style>
#app {
  font-family: Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
  position: relative;
}

#nav-list {
  list-style: none;
  /* display: inline-flex; */
}

#nav {
  padding: 10px;
  text-decoration: none;
  text-align: left;
  font-size:25px;
  font-family: Avenir;
  /* margin-left: 1px; */
}

#nav-element:hover {
  color: #FF6F02;
  font-size:28px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-left: 6px;
}

#nav a.router-link-exact-active {
  color: #FF6F02;
  text-decoration: none;
}
</style>
