<template>
  <v-container fluid>
    <div id="plan" scrollable>
      <v-row>
        <ul style="list-style: none; display: inline-flex; float: left; margin: 5px 45px;">
          <SelectPlan v-on:slectedPlan="loadPlan" />
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
      <v-row v-for="sem in numSem" :key="sem">
        <v-col v-for="year in numYears" :key="year" justify="center">
          <Semester class="ma-5 teal accent-4" :year='year + 1' :semester='sem + 1' :plannedModules='nestedArrays[year][sem]'  v-on:addModule="changeModuleList" v-on:removeModule="changeModuleList" v-if="renderComponent"/>
        </v-col>
      </v-row>
      <!-- <ul style="list-style: none; display: inline-flex; float: left;">
        <li v-for="sem in numSem" :key="sem">
          <ul style="list-style: none; display: inline-flex;">
            <li v-for="year in numYears" :key="year">
              <Semester class="ma-5 teal accent-4" :year='year + 1' :semester='sem + 1' :plannedModules='nestedArrays[year][sem]'  v-on:addModule="changeModuleList" v-on:removeModule="changeModuleList" v-if="renderComponent"/>
            </li>
          </ul>
        </li>
      </ul> -->
        <!-- <div id="Semester Block" >
          <ul style="list-style: none; display: inline-flex;">
            <div id="y1s1">
              <Semester class="ma-5 teal accent-4" :year='1' :semester='1' :plannedModules='nestedArrays[0][0]'  v-on:addModule="changeModuleList" v-on:removeModule="changeModuleList" v-if="renderComponent"/>
            </div>
            <div id="y2s1">
              <Semester class="ma-5 lime accent-4" :year='2' :semester='1' :plannedModules='nestedArrays[1][0]'  v-on:addModule="changeModuleList" v-on:removeModule="changeModuleList" v-if="renderComponent"/>
            </div>
            <div id="y3s1">
              <Semester class="ma-5 amber accent-4" :year='3' :semester='1' :plannedModules='nestedArrays[2][0]'  v-on:addModule="changeModuleList" v-on:removeModule="changeModuleList" v-if="renderComponent"/>
            </div>
            <div id="y4s1">
              <Semester class="ma-5 orange accent-4" :year='4' :semester='1' :plannedModules='nestedArrays[3][0]'  v-on:addModule="changeModuleList" v-on:removeModule="changeModuleList" v-if="renderComponent"/>
            </div>
          </ul>
          <br>
          <ul style="list-style: none; display: inline-flex;">
            <div id="y1s2">
              <Semester class="ma-5 teal accent-4" :year='1' :semester='2' :plannedModules='nestedArrays[0][1]' v-on:addModule="changeModuleList" v-on:removeModule="changeModuleList" v-if="renderComponent"/>
            </div>
            <div id="y2s2">
              <Semester class="ma-5 lime accent-4" :year='2' :semester='2' :plannedModules='nestedArrays[1][1]' v-on:addModule="changeModuleList" v-on:removeModule="changeModuleList" v-if="renderComponent"/>
            </div>
            <div id="y3s2">
              <Semester class="ma-5 amber accent-4" :year='3' :semester='2' :plannedModules='nestedArrays[2][1]' v-on:addModule="changeModuleList" v-on:removeModule="changeModuleList" v-if="renderComponent"/>
            </div>
            <div id="y4s2">
              <Semester class="ma-5 orange accent-4" :year='4' :semester='2' :plannedModules='nestedArrays[3][1]' v-on:addModule="changeModuleList" v-on:removeModule="changeModuleList" v-if="renderComponent"/>
            </div>
          </ul>
        </div> -->
      <!-- </ul> -->
    </div>
  </v-container>
</template>

<script>
import Semester from '../components/Semester.vue'
import SelectPlan from '../components/SelectPlan.vue'
import UploadPlan from '../components/UploadPlan.vue'

export default {
  name: 'Plan',
  components: {
    Semester,
    SelectPlan,
    UploadPlan
  },
  data () {
    return {
      exportedModules: [],
      renderComponent: true,
      numYears: [0, 1, 2, 3],
      numSem: [0, 1],
      nestedArrays: [[[],[]],[[],[]],[[],[]],[[],[]]],
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
