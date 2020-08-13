<template>
  <div class="tree-title">
    <Tree v-bind:requiredModules='requiredModules'/>
  </div>
</template>

<script>
import Tree from '../components/moduleTree/Tree.vue'

export default {
  name: 'moduleTree',
  components: {
    Tree
  },
  data () {
    return {
      requiredModules: []
    }
  },
  methods: {
  },
  created () {
    if (localStorage.getItem('plannedModules')) {
      console.log('EXISTS')
      console.log(localStorage.getItem('plannedModules'))
      try {
        this.requiredModules = JSON.parse(localStorage.getItem('plannedModules')).flat(2)
        console.log(this.plannedModules)
      } catch (e) {
        localStorage.removeItem('plannedModules')
      }
    }
    // Process local storage for the module tree
    for(let i=0; i < this.requiredModules.length; i++) {
      this.requiredModules[i] = this.requiredModules[i].moduleCode
    }
  }
}
</script>

<style scoped>

</style>
