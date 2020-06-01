<template>
  <div class="moduleinfo">
    <h1>This page is to search for module information (Search bar goes here)</h1>
    <div>
      <Modules v-bind:modules="modules"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Modules from '../components/Modules.vue'

export default {
  name: 'app',
  components: {
    Modules
  },
  data () {
    return {
      modules: []
    }
  },
  methods: {
  },
  created () {
    axios.get('https://api.nusmods.com/v2/2018-2019/moduleInfo.json?_limit=5')
      .then(response => (this.modules = response.data))
      .catch(err => console.log(err))
  }
}
</script>

<style>
</style>
