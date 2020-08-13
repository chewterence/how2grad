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
          <Year :year="year" :numSem="numSem[year]" :yearModules="plannedModules[year]" v-on:changeModuleList="changeModuleList"/>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
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
      numYears: [0, 1, 2, 3],
      numSem: [2, 2, 2, 2],
      plannedModules: [[[],[]],[[],[]],[[],[]],[[],[]]],
    }
  },
  mounted () {
    if (localStorage.getItem('plannedModules')) {
      console.log('EXISTS')
      console.log(localStorage.getItem('plannedModules'))
      try {
        this.plannedModules = JSON.parse(localStorage.getItem('plannedModules'))
        console.log(this.plannedModules)
      } catch (e) {
        localStorage.removeItem('plannedModules')
      }
    } 
  },
  methods: {

    loadPlan () {
      console.log('loadplan placeholder')
    },

    removeAll () {
      console.log('removeAll placeholder')
    },

    changeModuleList (eventData) {
      console.log('MODULELISTCHANGED')
      const yEdited = eventData[0][0] - 1
      const sEdited = eventData[0][1] - 1
      const newModuleList = eventData[1]

      this.plannedModules[yEdited][sEdited] = newModuleList
      this.saveModuleList()
    },

    saveModuleList () {
      console.log('SAVED')
      const parsed = JSON.stringify(this.plannedModules);
      localStorage.setItem('plannedModules', parsed);
      console.log(localStorage.getItem('plannedModules'))
    }
  }
}
</script>

<style scoped>
</style>
