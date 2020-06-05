<template>
    <div class="tree-structure">
        <SubTree v-bind:modules='modules' :prereqData='prereqData' :requiredModules='requiredModules'/>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import SubTree from './SubTree.vue'

Vue.prototype.$xcoordinates = []
Vue.prototype.$ycoordinates = []
Vue.prototype.$modcoordinates = []

export default {
  name: 'Structure',
  components: {
    SubTree
  },
  data () {
    return {
      prereqData: []
    }
  },
  methods: {
    async loadPrereqData () {
      let i = 0
      for (i = 0; i < this.requiredModules.length; i++) {
        try {
          let data = null
          const res = await fetch('https://api.nusmods.com/v2/2019-2020/modules/' + this.requiredModules[i] + '.json')
          if (!res.ok) {
            throw new Error(res.status)
          }
          data = await res.json()
          this.prereqData.push(data.prereqTree)
          console.log(data)
        } catch (error) {
          console.log(error)
        }
      }
    }
    //   try {
    //     const res = await fetch('https://api.nusmods.com/v2/2019-2020/modules/' + 'CS2103' + '.json')
    //     if (!res.ok) {
    //       throw new Error(res.status)
    //     }
    //     const data = await res.json()
    //     this.prereqData = data.prereqTree
    //     console.log(data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // =================================================================================
    // loadPrereqData () {
    //   let i = 0
    //   for (i = 0; i < this.requiredModules.length; i++) {
    //     axios.get('https://api.nusmods.com/v2/2019-2020/modules/' + this.requiredModules[i] + '.json')
    //       .then(response => (this.prereqData.push(response.data.prereqTree)))
    //       .catch(err => console.log(err))
    //   }
    // }
  },
  props: ['noprereq', 'level1k', 'level2k', 'level3k', 'level4k', 'requiredModules', 'modules'],
  mounted () {
    this.loadPrereqData()
  }
}
</script>

<style scoped>
    .tree-structure {
    }
    #inner-struct ul{
        display: inline-flex;
    }
    #outer-struct ul{
    }
    .leaf-style {
        padding: 5px;
        position: relative;
    }
</style>
