<template>
    <div class="tree-structure">
            <!-- {{trueNoPrereq}} -->
            <hr>
            <br>
            {{requiredModules}}
            <br><hr>
        <li v-for="entry in setMap" v-bind:key="entry[0]">
            <!-- testPrint{{entry[1].size}}
            <SubTree v-bind:treeRoot='entry[0]' :treeData='entry[1]' :moduleData='moduleData.get(entry[0])' :modlist='requiredModules'/> -->
            <div class="leaf-style">
              <SubTree v-bind:treeRoot='entry[0]' :treeData='entry[1]' :moduleData='moduleData.get(entry[0])' :modlist='requiredModules'/>
            </div>
        </li>
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
      sizeMap: new Map(),
      setMap: new Map()
    }
  },
  methods: {
    initData () {
      const promises = []
      for (let i = 0; i < this.requiredModules.length; i++) {
        promises.push(axios.get('https://api.nusmods.com/v2/2019-2020/modules/' + this.requiredModules[i] + '.json'))
      }
      axios.all(promises).then(promise => promise.forEach(response => this.moduleData.set(response.data.moduleCode, response.data)))
        .then(() => { this.genSubTreeSets() })
    },

    initMap () {
      this.requiredModules.forEach(moduleCode => {
        this.parentMap.set(moduleCode, moduleCode)
        this.sizeMap.set(moduleCode, 1)
        this.setMap.set(moduleCode, new Set().add(moduleCode))
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

    union (moduleCode1, moduleCode2) {
      const p1 = this.findParent(moduleCode1)
      const p2 = this.findParent(moduleCode2)
      if (this.sizeMap.get(p1) <= this.sizeMap.get(p2)) {
        this.parentMap.set(p1, p2)
        this.sizeMap.set(p2, this.sizeMap.get(p2) + this.sizeMap.get(p1))
        this.sizeMap.set(p1, 0)
        const currSet = this.setMap.get(p2)
        this.setMap.get(p1).forEach((value, valueAgain, set) => currSet.add(value))
        this.setMap.set(p2, currSet)
        this.setMap.delete(p1)
      } else {
        this.parentMap.set(p2, p1)
        this.sizeMap.set(p1, this.sizeMap.get(p1) + this.sizeMap.get(p2))
        this.sizeMap.set(p2, 0)
        const currSet = this.setMap.get(p1)
        this.setMap.get(p2).forEach((value, valueAgain, set) => currSet.add(value))
        this.setMap.set(p1, currSet)
        this.setMap.delete(p2)
      }
    },

    genSubTreeSets () {
      // todo make effecient later on
      this.initMap()
      for (let i = 0; i < this.requiredModules.length; i++) {
        const modI = this.requiredModules[i]
        for (let j = 0; j < this.requiredModules.length; j++) {
          const modJ = this.requiredModules[j]
          if (i !== j) {
            if (this.isSameSet(modI, modJ)) {
              continue
            }
            if (this.isPreReq(modI, modJ)) {
              this.union(modI, modJ)
            }
          }
        }
      }
      console.log('subTreeSetsGenerated')
      this.$forceUpdate()
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
