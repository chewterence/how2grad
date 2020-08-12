<template>
  <v-container fluid>
      <v-row>
        <ul style="list-style: none; display: inline-flex; float: left; margin: 5px 45px;">
          <SelectPlan v-on:selectedPlan="loadPlan" />
          <UploadPlan 
            v-bind:y1s1Plan='y1s1Storage'
            v-bind:y1s2Plan='y1s2Storage'
            v-bind:y2s1Plan='y2s1Storage'
            v-bind:y2s2Plan='y2s2Storage'
            v-bind:y3s1Plan='y3s1Storage'
            v-bind:y3s2Plan='y3s2Storage'
            v-bind:y4s1Plan='y4s1Storage'
            v-bind:y4s2Plan='y4s2Storage'
          />
          <v-btn class="mx-1" color="grey lighten-1" x-large rounded v-on:click="removeAll">
            <v-icon large class="mr-2">mdi-delete-sweep</v-icon>
            Clear All
          </v-btn>
        </ul>
      </v-row>
      <v-row>
        <v-col v-for="year in numYears" :key="year" justify="center" class="px-0 mx-0">
          <Year :year="year" :numSem="numSem[year]" :yearModules="nestedArrays[year]" v-on:changeModuleList="changeModuleList"/>
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
      exportedModules: [],
      // renderComponent: true,
      numYears: [0, 1, 2, 3],
      numSem: [2, 2, 2, 2],
      nestedArrays: [[[],[]],[[],[]],[[],[]],[[],[]]],

      //placeholder to remove errors
      y1s1Storage: [],
      y1s2Storage: [],
      y2s1Storage: [],
      y2s2Storage: [],
      y3s1Storage: [],
      y3s2Storage: [],
      y4s1Storage: [],
      y4s2Storage: []
    }
  },
  mounted () {
    
    if (localStorage.getItem('nestedArrays')) {
      console.log('EXISTS')
      console.log(localStorage.getItem('nestedArrays'))
      try {
        this.nestedArrays = JSON.parse(localStorage.getItem('nestedArrays'))
        console.log(this.nestedArrays)
      } catch (e) {
        localStorage.removeItem('nestedArrays')
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

      this.nestedArrays[yEdited][sEdited] = newModuleList
      this.saveModuleList()
    },

    saveModuleList () {
      console.log('SAVED')
      const parsed = JSON.stringify(this.nestedArrays);
      localStorage.setItem('nestedArrays', parsed);
      console.log(localStorage.getItem('nestedArrays'))
    }
  }
}
</script>

<style scoped>
  /* Semester Component Style */
  #y1s1 .semester-box {
    background: #2a9d8f;
    margin: 5px 5px;
  }
  #y1s2 .semester-box {
    background: #2a9d8f;
    margin: 5px 5px;
  }
  #y2s1 .semester-box {
    background: #e9c46a;
    margin: 5px 5px;
  }
  #y2s2 .semester-box {
    background: #e9c46a;
    margin: 5px 5px;
  }
  #y3s1 .semester-box {
    background: #f4a261;
    margin: 5px 5px;
  }
  #y3s2 .semester-box {
    background: #f4a261;
    margin: 5px 5px;
  }
  #y4s1 .semester-box {
    background: #e76f51;
    margin: 5px 5px;
  }
  #y4s2 .semester-box {
    background: #e76f51;
    margin: 5px 5px;
  }
</style>
