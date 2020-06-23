<template>
    <div class="tree-structure">
            <!-- {{trueNoPrereq}} -->
            <hr>
            <br>
            {{requiredModules}}
            <br><hr>
            {{prereqData}}
        <SubTree v-bind:modules='modules' :requiredModules='requiredModules'/>
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
      prereqData: new Map(),
      parentMap: new Map()
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
          if (data.prereqTree != null) {
            // data.prereqTree = data.prereqTree.f
          }
          this.prereqData.push(data.prereqTree)
          console.log(data)
        } catch (error) {
          console.log(error)
        }
      }
    },

    initMap () {
      this.modules.forEach(element => {
        this.parentMap.set(element, element)
      })
    },

    findParent (module) {
      let p = this.parentMap(module)
      while (p.moduleCode !== module.moduleCode) {
        module = p
        p = this.parentMap(module)
      }
      return p
    },

    isSameSet (module1, module2) {
      return this.findParent(module1).moduleCode === this.findParent(module2).moduleCode
    },

    isPreReqof (module1, module2) {
      if (this.noprereq.includes(module2)) {
        return false
      }
      // if ()
    },

    genSubTreeList () {
      this.initMap()
      for (let i = 0; i < this.modules.length; i++) {
        const modI = this.modules[i]
        for (let j = 0; j < this.modules.length; j++) {
          const modJ = this.modules[j]
          if (this.isSameSet(modI, modJ)) {
            continue
          }
        }
      }
    }
  },
  props: ['noprereq', 'level1k', 'level2k', 'level3k', 'level4k', 'requiredModules', 'modules'],
  mounted () {
    this.loadPrereqData()
    this.processData()
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
