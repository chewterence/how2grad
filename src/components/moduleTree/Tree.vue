<template>
  <div class="img-overlay-wrap">
        <Structure v-if="modulePrereqData.size > 0" v-bind:requiredModules='requiredModules' :modulePrereqData='modulePrereqData' :modulePrereqDataNoModifiers='reqModsNoModfiers' :moduleData='moduleData'/>
    <!-- <v-container
      id="scroll-target"
      style="max-height: 83vh"
      class="overflow-y-auto">
      <v-row justify=center>
        <h1>Bachelor of Computing (Honours) in Computer Science</h1>
      </v-row>
      <v-row>
        <Structure v-scroll:#scroll-target="onScroll" v-if="modulePrereqData.size > 0" v-bind:requiredModules='requiredModules' :modulePrereqData='modulePrereqData' :modulePrereqDataNoModifiers='reqModsNoModfiers' :moduleData='moduleData'/>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import Vue from 'vue'
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
      temp = this.moduleData.get(moduleCode).prerequisite.split(' ').filter(str => str.includes('CS' | 'ES' | 'MA'))
      // FILTER 2: to fIlter out unwanted characters like brackets and stuff
      for (let i = 0; i < temp.length; i++) {
        temp[i] = temp[i].replace(/[{()}]/g, '')
      }
      // FILTER 3: to filter out the modules that is not included in the list of modules taken
      for (let i = 0; i < temp.length; i++) {
        if (this.reqModsNoModfiers.includes(temp[i]) && moduleCode !== temp[i]) {
          if (this.modulePrereqData.get(moduleCode) === undefined) {
            this.modulePrereqData.set(moduleCode, new Set().add(temp[i]))
          } else {
            this.modulePrereqData.get(moduleCode).add(temp[i])
          }
        }
      }
    },

    processPrereqTree (moduleCode, arr) {
      if (typeof arr === 'string') {
        if (this.reqModsNoModfiers.includes(arr) && moduleCode !== arr) {
          if (this.modulePrereqData.get(moduleCode) === undefined) {
            this.modulePrereqData.set(moduleCode, new Set().add(arr))
          } else {
            this.modulePrereqData.get(moduleCode).add(arr)
          }
        }
      } else if (typeof arr === 'object') {
        for (let i = 0; i < Object.entries(arr)[0][1].length; i++) {
          this.processPrereqTree(moduleCode, Object.entries(arr)[0][1][i])
        }
      }
    }
  },
  computed: {
    modPrefixReq: function () {
      const temp = new Set()
      this.requiredModules.forEach(modCode => {
        const index = modCode.match(/\d/).index
        temp.add(modCode.slice(0, index))
      })
      return temp
    },

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
