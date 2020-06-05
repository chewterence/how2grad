<template>
  <div id="app">
    <Header />
    <div id="nav" style="text-align: left; font-size:25px; font-family: Avenir;">
      <router-link to="/plan">
        <img alt="Logo" src="./assets/planLogo.png" style="width:40px;height:40px;">
        Plan
      </router-link> |
      <router-link to="/moduleTree">
        <img alt="Logo" src="./assets/treeLogo.png" style="width:40px;height:40px;">
        Module Tree
      </router-link> |
      <router-link to="/moduleinfo">
        <img alt="Logo" src="./assets/moduleinfoLogo.png" style="width:40px;height:40px;">
        Module Information
      </router-link> |
      <router-link to="/calculator">
        <img alt="Logo" src="./assets/capcalculatorLogo.png" style="width:40px;height:40px;">
        CAP Calculator
      </router-link>
    </div> <hr>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    Header
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
