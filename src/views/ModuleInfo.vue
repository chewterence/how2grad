<template>
  <div class="moduleinfo">
    <h1>This page is to search for module information (Under development)</h1>
    <div id="app">
      {{ modules }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      modules: []
    }
  },
  methods: {

  },
  created () {
    axios.get('https://api.nusmods.com/v2/2018-2019/moduleList.json')
      .then(response => (this.modules = response))
      .catch(err => console.log(err))
  }
}
</script>

<style>
</style>
