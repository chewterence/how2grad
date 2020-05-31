<template>
  <div id="app">
    <div style="width: 500px; float:left; height:100px; margin:10px">
      <Sem1 />
    </div>
    <div style="width: 500px; float:left; height:100px; margin:10px">
      <Sem2 />
    </div>
  </div>
</template>

<script>
import Sem1 from '../components/Y1S1'
import Sem2 from '../components/Y1S2'

export default {
  name: 'Home',
  components: {
    Sem1, Sem2
  },
  data () {
    return {
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
  margin-top: 20px;
}
</style>
