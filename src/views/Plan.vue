<template>
  <div id="plan">
    <div class="y1s1">
      <Semester />
    </div>
  </div>
</template>

<script>
import Semester from '../components/Semester.vue'

export default {
  name: 'Home',
  components: {
    Semester
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  .y1s1 {
    width: 400px;
    height: 600px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
</style>
