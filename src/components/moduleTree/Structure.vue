<template>
    <div class="tree-structure">
            <!-- {{trueNoPrereq}} -->
            <hr>
            <br>
            {{requiredModules}}
            <br><hr>
            <!-- {{this.moduleData.get('CS3230').prerequisite}} -->
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
      moduleData: new Map(),
      parentMap: new Map(),
      sizeMap: new Map()
    }
  },
  methods: {
    initData () {
      // for (let i = 0; i < this.requiredModules.length; i++) {
      //   axios.get('https://api.nusmods.com/v2/2019-2020/modules/' + this.requiredModules[i] + '.json')
      //     .then(response => this.moduleData.set(response.data.moduleCode, response.data))
      //     .catch(err => console.log(err))
      // }

      const promises = []
      for (let i = 0; i < this.requiredModules.length; i++) {
        promises.push(axios.get('https://api.nusmods.com/v2/2019-2020/modules/' + this.requiredModules[i] + '.json'))
      }
      axios.all(promises).then(promise => promise.forEach(response => this.moduleData.set(response.data.moduleCode, response.data)))
        .then(() => { this.genSubTreeList() })
    },

    initMap () {
      console.log(this.moduleData.size)
      this.modules.forEach(element => {
        this.parentMap.set(element.moduleCode, element.moduleCode)
        this.sizeMap.set(element.moduleCode, 1)
      })
    },

    findParent (moduleCode) {
      let pCode = this.parentMap.get(moduleCode)
      while (pCode !== moduleCode) {
        moduleCode = pCode
        pCode = this.parentMap.get(moduleCode)
      }
      return pCode
    },

    isSameSet (moduleCode1, moduleCode2) {
      return this.findParent(moduleCode1) === this.findParent(moduleCode2)
    },

    isPreReq (moduleCode1, moduleCode2) {
      if (this.moduleData.get(moduleCode1).prerequisite === undefined || this.moduleData.get(moduleCode2).prerequisite === undefined) {
        return false
      }
      const module1PrereqTree = this.moduleData.get(moduleCode1).prerequisite
      const module2PrereqTree = this.moduleData.get(moduleCode1).prerequisite
      return module1PrereqTree.includes(moduleCode2) || module2PrereqTree.includes(moduleCode2)
    },

    union (module1, module2) {
      const p1 = this.findParent(module1)
      const p2 = this.findParent(module2)
      if (this.sizeMap.get(p1) <= this.sizeMap.get(p2)) {
        this.parentMap.set(p1, p2)
        this.sizeMap.set(p2, this.sizeMap.get(p2) + this.sizeMap.get(p1))
        this.sizeMap.set(p1, 0)
      } else {
        this.parentMap.set(p2, p1)
        this.sizeMap.set(p1, this.sizeMap.get(p1) + this.sizeMap.get(p2))
        this.sizeMap.set(p2, 0)
      }
    },

    genSubTreeList () {
      this.initMap()
      for (let i = 0; i < this.requiredModules.length; i++) {
        const modI = this.requiredModules[i]
        for (let j = 0; j < this.requiredModules.length; j++) {
          const modJ = this.requiredModules[j]
          if (i !== j) {
            console.log(modI + ' ' + modJ)
            if (this.isSameSet(modI, modJ)) {
              console.log('same set Found')
              console.log(i + ' ' + j)
              continue
            }
            console.log('not same set')
            if (this.isPreReq(modI, modJ)) {
              this.union(modI, modJ)
              console.log('unioned')
            }
          }
        }
      }
      console.log('subTreeListGenerated')
    }
  },
  props: ['noprereq', 'level1k', 'level2k', 'level3k', 'level4k', 'requiredModules', 'modules'],
  mounted () {
    this.initData()
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
