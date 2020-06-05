<template>
  <div id="app">
    <Header />
    <div id="nav">
      <ul style="list-style: none; display: inline-flex;">
      <router-link to="/plan">
        <div id="nav-element">
          <img alt="Logo" src="./assets/planLogo.png" style="width:40px;height:40px;">
          Plan
        </div>
      </router-link>
      <router-link to="/moduleTree">
        <div id="nav-element">
          <img alt="Logo" src="./assets/treeLogo.png" style="width:40px;height:40px;">
          Module Tree
        </div>
      </router-link>
      <router-link to="/moduleinfo">
        <div id="nav-element">
          <img alt="Logo" src="./assets/moduleinfoLogo.png" style="width:40px;height:40px;">
          Module Information
        </div>
      </router-link>
      <router-link to="/calculator">
        <div id="nav-element">
          <img alt="Logo" src="./assets/capcalculatorLogo.png" style="width:40px;height:40px;">
          CAP Calculator
        </div>
      </router-link>
      </ul>
    </div>
      <hr>
    <router-view/>
    <!-- <img alt="Logo" src="./assets/mainpage.png" style="width:100%; height:100%;" v-if="!isHidden"> -->
  </div>
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

#nav {
  padding: 10px;
  text-decoration: none;
  text-align: left;
  font-size:25px;
  font-family: Avenir;
}

#nav-element:hover {
  color: #FF6F02;
  font-size:28px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #FF6F02;
  text-decoration: none;
}
</style>
