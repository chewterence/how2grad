<template>
  <div>
    <h1>Bachelor of Computing (Honours) in Computer Science</h1>
        <Structure v-bind:noprereq='noprereq' :level1k='level1k' :level2k='level2k' :level3k='level3k' :level4k='level4k'/>
  </div>
</template>

<script>
import Structure from './Structure.vue'
import axios from 'axios'

export default {
  name: 'Tree',
  components: {
    Structure
  },
  data () {
    return {
      requiredModules: [
        'CS1010', 'CS1231', 'MA1521', 'MA1101R', 'ES1103', 'IS1103',
        'CS2100', 'CS2030', 'CS2040', 'ES2660', 'MA1301', 'ST2334',
        'CS2106', 'CS3230', 'CS2103', 'CS2101'
      ],
      modules: []
    }
  },
  computed: {
    noprereq: function () {
      const mod = this.modules.filter(m => m.prerequisite == null)
      return mod
    },
    level1k: function () {
      const mod = this.modules.filter(m => (m.moduleCode.match(/[0-9]/g)[0] === '1'))
      return mod
    },
    level2k: function () {
      const mod = this.modules.filter(m => m.moduleCode.match(/[0-9]/g)[0] === '2')
      return mod
    },
    level3k: function () {
      const mod = this.modules.filter(m => m.moduleCode.match(/[0-9]/g)[0] === '3')
      return mod
    },
    level4k: function () {
      const mod = this.modules.filter(m => m.moduleCode.match(/[0-9]/g)[0] === '3')
      return mod
    }
  },
  created (modules) {
    axios.get('https://api.nusmods.com/v2/2018-2019/moduleInfo.json')
      .then(response => (
        this.modules = response.data.filter(mod => this.requiredModules.includes(mod.moduleCode)))
      )
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>

    .leaf-style {
        padding: 15px;
    }
</style>
