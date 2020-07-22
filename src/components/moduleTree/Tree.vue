<template>
  <div class="img-overlay-wrap">
        <Structure v-if="modulePrereqData.size > 0"
          v-bind:requiredModules='requiredModules'
          :modulePrereqData='modulePrereqData'
          :modulePrereqDataNoModifiers='reqModsNoModfiers'
          :moduleData='moduleData'
          :missingMap='missingMap'/>
  </div>
</template>

<script>
// import Vue from 'vue'
import Structure from './Structure.vue'
import axios from 'axios'

export default {
  name: 'Tree',
  components: {
    Structure
  },
  data () {
    return {
      moduleData: new Map(),
      modulePrereqData: new Map(),
      missingMap: new Map(),
      test: 1
    }
  },
  props: ['requiredModules'],
  methods: {
    initData () {
      const promises = []
      for (let i = 0; i < this.requiredModules.length; i++) {
        promises.push(axios.get('https://api.nusmods.com/v2/2019-2020/modules/' + this.requiredModules[i] + '.json'))
      }
      axios.all(promises).then(promise => promise.forEach(response => this.moduleData.set(response.data.moduleCode, response.data)))
        .then(() => { this.genPrereqData() })
    },

    genPrereqData () {
      this.moduleData.forEach((modData, modCode) => {
        if (modData.prereqTree === undefined) {
          if (modData.prerequisite !== undefined) {
            this.processPrereqPara(modCode)
          }
        } else {
          const prereqTreeArr = this.moduleData.get(modCode).prereqTree
          this.processPrereqTree(modCode, prereqTreeArr)
        }
      })
      this.$forceUpdate()
    },

    processPrereqPara (moduleCode) {
      let temp = []
      // FILTER 1: to filter out the other words leaving only the module
      // temp = this.moduleData.get(moduleCode).prerequisite.split(' ').filter(str => this.modPrefixReq.test(str))
      temp = this.moduleData.get(moduleCode).prerequisite.split(' ').filter(str => str.match(/.?\w+\d\d\d\d\w*.?/) !== null)
      if (moduleCode === 'CS3233') {
        console.log(temp)
      }
      // FILTER 2: to fIlter out unwanted characters like brackets and stuff
      const newList = []
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].match(/\w+\d\d\d\d\w*/) !== null) {
          newList.push(temp[i].match(/\w+\d\d\d\d\w*/)[0])
        }
      }
      if (moduleCode === 'CS3233') {
        console.log(newList)
      }
      // FILTER 3: to filter out the modules that is not included in the list of modules taken
      for (let i = 0; i < newList.length; i++) {
        if (moduleCode !== newList[i]) {
          if (this.reqModsNoModfiers.includes(newList[i])) {
            if (this.modulePrereqData.get(moduleCode) === undefined) {
              this.modulePrereqData.set(moduleCode, new Set().add(newList[i]))
            } else {
              this.modulePrereqData.get(moduleCode).add(newList[i])
            }
          } else {
            if (this.missingMap.get(moduleCode) === undefined) {
              this.missingMap.set(moduleCode, new Set().add(newList[i]))
            } else {
              this.missingMap.get(moduleCode).add(newList[i])
            }
          }
        }
      }
    },

    processPrereqTree (moduleCode, arr) {
      if (typeof arr === 'string') {
        if (moduleCode !== arr) {
          if (this.reqModsNoModfiers.includes(arr)) {
            if (this.modulePrereqData.get(moduleCode) === undefined) {
              this.modulePrereqData.set(moduleCode, new Set().add(arr))
            } else {
              this.modulePrereqData.get(moduleCode).add(arr)
            }
          } else {
            if (this.missingMap.get(moduleCode) === undefined) {
              this.missingMap.set(moduleCode, new Set().add(arr))
            } else {
              this.missingMap.get(moduleCode).add(arr)
            }
          }
        }
        // if (this.reqModsNoModfiers.includes(arr) && moduleCode !== arr) {
        //   if (this.modulePrereqData.get(moduleCode) === undefined) {
        //     this.modulePrereqData.set(moduleCode, new Set().add(arr))
        //   } else {
        //     this.modulePrereqData.get(moduleCode).add(arr)
        //   }
        // }
      } else if (typeof arr === 'object') {
        for (let i = 0; i < Object.entries(arr)[0][1].length; i++) {
          this.processPrereqTree(moduleCode, Object.entries(arr)[0][1][i])
        }
      }
    }
  },
  computed: {
    // modPrefixReq: function () {
    //   const temp = new Set()
    //   this.requiredModules.forEach(modCode => {
    //     const index = modCode.match(/\d/).index
    //     temp.add(modCode.slice(0, index))
    //   })
    //   return new RegExp(Array.from(temp).join('|'))
    // },
    reqModsNoModfiers: function () {
      const temp = []
      this.requiredModules.forEach(modCode => temp.push(modCode.match(/\w+\d\d\d\d/)[0]))
      return temp
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<style scoped>

</style>
