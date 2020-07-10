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
  // props: ['requiredModules'],
  methods: {
    saveMods () {
      const parsed = JSON.stringify(this.exportedModules)
      localStorage.setItem('exportedModules', parsed)
    },
    addMods (value) {
      this.exportedModules.push(value.moduleCode)
      this.saveMods()
    },
    removeMods (value) {
      this.exportedModules = this.exportedModules.filter(mod => mod !== value.moduleCode)
      this.saveMods()
    }
  },
  created () {
    if (localStorage.getItem('exportedModules')) {
      try {
        this.requiredModules = JSON.parse(localStorage.getItem('exportedModules'))
      } catch (e) {
        localStorage.removeItem('exportedModules')
      }
    }
  }
}
</script>

<style scoped>

</style>
