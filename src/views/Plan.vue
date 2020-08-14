<template>
  <v-container fluid>
      <v-row>
        <ul style="list-style: none; display: inline-flex; float: left; margin: 5px 45px;">
          <SelectPlan v-on:selectedPlan="loadPlan" />
          <UploadPlan v-bind:plannedModules="plannedModules"/>
          <v-btn class="mx-1" color="grey lighten-1" x-large rounded v-on:click="removeAll">
            <v-icon large class="mr-2">mdi-delete-sweep</v-icon>
            Clear All
          </v-btn>
        </ul>
      </v-row>
      <v-row>
        <v-col v-for="year in numYears" :key="year" justify="center" class="px-0 mx-0">
          <Year :year="year" :numSem="numSem[year]" :yearModules="plannedModules[year]" v-on:changeModuleList="changeModuleList" :moduleData="moduleData" :key="componentKey"/>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import Year from '../components/Year.vue'
import SelectPlan from '../components/SelectPlan.vue'
import UploadPlan from '../components/UploadPlan.vue'

export default {
  name: 'Plan',
  components: {
    Year,
    SelectPlan,
    UploadPlan
  },
  data () {
    return {
      exportedModules: [],
      numYears: [0, 1, 2, 3],
      numSem: [2, 2, 2, 2],
      plannedModules: [[[],[]],[[],[]],[[],[]],[[],[]]],
      moduleData: new Map(),
      componentKey: 0
    }
  },
  mounted () {
    if (localStorage.getItem('plannedModules')) {
      console.log('EXISTS')
      // console.log(localStorage.getItem('plannedModules'))
      try {
        this.plannedModules = JSON.parse(localStorage.getItem('plannedModules'))
        // console.log(this.plannedModules)
      } catch (e) {
        localStorage.removeItem('plannedModules')
      }
      this.initData()
    }
  },
  methods: {

    loadPlan (plannedModules) {
      this.plannedModules = plannedModules
    },

    removeAll () {
      console.log('removeAll placeholder')
    },

    changeModuleList (eventData) {
      console.log('MODULELISTCHANGED')
      const yEdited = eventData[0][0] - 1
      const sEdited = eventData[0][1] - 1
      const newModuleCodesList = eventData[1]
      // console.log(newModuleCodesList)
      this.plannedModules[yEdited][sEdited] = newModuleCodesList
      this.saveModuleList()
    },

    saveModuleList () {
      console.log('SAVED')
      const parsed = JSON.stringify(this.plannedModules);
      localStorage.setItem('plannedModules', parsed);
      console.log(localStorage.getItem('plannedModules'))
    },
    
    initData () {
    const promises = []
    let flattenedArr = this.plannedModules.flat().flat()
    console.log(flattenedArr)
    for (let i = 0; i < flattenedArr.length; i++) {
      promises.push(axios.get('https://api.nusmods.com/v2/2019-2020/modules/' + flattenedArr[i] + '.json'))
    }
    
    axios.all(promises).then(promise => promise.forEach(response => this.moduleData.set(response.data.moduleCode, response.data))).then(() => { this.componentKey++ })
    
    }
  }
}
</script>
<style scoped>
</style>
