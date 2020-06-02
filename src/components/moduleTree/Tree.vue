<template>
  <div>
    <h1>- Tree init -</h1>
    <!-- <requirement-filter v-bind:requiredModules='requiredModules'/> -->
    <ul style="list-style: none;">
        <li v-for="mod in modules" v-bind:key="mod.moduleCode">
            <div class="leaf-style">
                <TreeModule v-bind:module='mod'/>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import TreeModule from './TreeModule.vue'
import axios from 'axios'

export default {
  name: 'Tree',
  components: {
    TreeModule
  },
  data () {
    return {
      requiredModules: ['CS2040', 'ES2660', 'CS2030', 'CS2100', 'MA1521'],
      modules: []
    }
  },
  created () {
    axios.get('https://api.nusmods.com/v2/2018-2019/moduleInfo.json')
      .then(response => (this.modules = response.data.filter(mod => this.requiredModules.includes(mod.moduleCode))))
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>
    .leaf-style {
        padding: 5px;
    }
</style>
