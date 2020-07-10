<template>
  <div class="tree-title">
    {{requiredModules}}
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
      // requiredModules: [
      //   'CS1010', 'CS1231', 'MA1521', 'MA1101R', 'ES1103', 'IS1103',
      //   'CS2100', 'CS2030', 'CS2040S', 'ES2660', 'MA1301', 'ST2334',
      //   'CS2106', 'CS3230', 'CS2103', 'CS2101', 'CS2105',
      //   'CS6207', 'CS4248', 'CS3243'
      // ]
      requiredModules: ['empty']
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
  mounted () {
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
