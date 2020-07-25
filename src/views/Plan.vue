<template>
    <div id="plan" scrollable>
      <ul style="list-style: none; display: inline-flex; float: left; margin: 3px 45px;">
        <SelectPlan v-on:slectedPlan="loadPlan" />
        <UploadPlan />
        <v-btn class="mx-1" color="grey lighten-1" x-large rounded v-on:click="consolidateExports">
          Update Tree
        </v-btn>
        <v-btn class="mx-1" color="grey lighten-1" x-large rounded v-on:click="saveAll">
          Save
        </v-btn>
        <v-btn class="mx-1" color="grey lighten-1" x-large rounded v-on:click="removeAll">
          Clear All
        </v-btn>
      </ul>
      <ul style="list-style: none; display: inline-flex; float: left;">
        <div id="Semester Block">
          <ul style="list-style: none; display: inline-flex;">
            <div id="y1s1">
              <Semester v-bind:title='"Year 1 Semester 1"' :plannedModules='y1s1'  v-on:addModule="addy1s1;" v-on:removeModule="removey1s1"/>
            </div>
            <div id="y2s1">
              <Semester v-bind:title='"Year 2 Semester 1"' :plannedModules='y2s1'  v-on:addModule="addy2s1" v-on:removeModule="removey2s1"/>
            </div>
            <div id="y3s1">
              <Semester v-bind:title='"Year 3 Semester 1"' :plannedModules='y3s1'  v-on:addModule="addy3s1" v-on:removeModule="removey3s1"/>
            </div>
            <div id="y4s1">
              <Semester v-bind:title='"Year 4 Semester 1"' :plannedModules='y4s1'  v-on:addModule="addy4s1" v-on:removeModule="removey4s1"/>
            </div>
          </ul>
          <br>
          <ul style="list-style: none; display: inline-flex;">
            <div id="y1s2">
              <Semester v-bind:title='"Year 1 Semester 2"' :plannedModules='y1s2' v-on:addModule="addy1s2" v-on:removeModule="removey1s2"/>
            </div>
            <div id="y2s2">
              <Semester v-bind:title='"Year 2 Semester 2"' :plannedModules='y2s2' v-on:addModule="addy2s2" v-on:removeModule="removey2s2"/>
            </div>
            <div id="y3s2">
              <Semester v-bind:title='"Year 3 Semester 2"' :plannedModules='y3s2' v-on:addModule="addy3s2" v-on:removeModule="removey3s2"/>
            </div>
            <div id="y4s2">
              <Semester v-bind:title='"Year 4 Semester 2"' :plannedModules='y4s2' v-on:addModule="addy4s2" v-on:removeModule="removey4s2"/>
            </div>
          </ul>
        </div>
      </ul>
    </div>
</template>

<script>
import Semester from '../components/Semester.vue'
import SelectPlan from '../components/SelectPlan.vue'
import UploadPlan from '../components/UploadPlan.vue'
// import { db } from '../firebase.js'

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
      // =============================================================== Empty semesters (Comment out if needed)
      y1s1: [],
      y1s2: [],
      y2s1: [],
      y2s2: [],
      y3s1: [],
      y3s2: [],
      y4s1: [],
      y4s2: [],
      // =============================================================== Local Storage
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
    // SEMESTER 1
    if (localStorage.getItem('y1s1Storage')) {
      try {
        this.y1s1Storage = JSON.parse(localStorage.getItem('y1s1Storage'))
      } catch (e) {
        localStorage.removeItem('y1s1Storage')
      }
    }
    if (localStorage.getItem('y2s1Storage')) {
      try {
        this.y2s1Storage = JSON.parse(localStorage.getItem('y2s1Storage'))
      } catch (e) {
        localStorage.removeItem('y2s1Storage')
      }
    }
    if (localStorage.getItem('y3s1Storage')) {
      try {
        this.y3s1Storage = JSON.parse(localStorage.getItem('y3s1Storage'))
      } catch (e) {
        localStorage.removeItem('y3s1Storage')
      }
    }
    if (localStorage.getItem('y4s1Storage')) {
      try {
        this.y4s1Storage = JSON.parse(localStorage.getItem('y4s1Storage'))
      } catch (e) {
        localStorage.removeItem('y4s1Storage')
      }
    }
    // SEMESTER 2
    if (localStorage.getItem('y1s2Storage')) {
      try {
        this.y1s2Storage = JSON.parse(localStorage.getItem('y1s2Storage'))
      } catch (e) {
        localStorage.removeItem('y1s2Storage')
      }
    }
    if (localStorage.getItem('y2s2Storage')) {
      try {
        this.y2s2Storage = JSON.parse(localStorage.getItem('y2s2Storage'))
      } catch (e) {
        localStorage.removeItem('y2s2Storage')
      }
    }
    if (localStorage.getItem('y3s2Storage')) {
      try {
        this.y3s2Storage = JSON.parse(localStorage.getItem('y3s2Storage'))
      } catch (e) {
        localStorage.removeItem('y3s2Storage')
      }
    }
    if (localStorage.getItem('y4s2Storage')) {
      try {
        this.y4s2Storage = JSON.parse(localStorage.getItem('y4s2Storage'))
      } catch (e) {
        localStorage.removeItem('y4s2Storage')
      }
    }
    this.y1s1 = this.y1s1Storage
    this.y2s1 = this.y2s1Storage
    this.y3s1 = this.y3s1Storage
    this.y4s1 = this.y4s1Storage
    this.y1s2 = this.y1s2Storage
    this.y2s2 = this.y2s2Storage
    this.y3s2 = this.y3s2Storage
    this.y4s2 = this.y4s2Storage
  },
  methods: {
    // =================================================================== General Methods
    consolidateExports () {
      this.exportedModules.push(this.y1s1Storage)
      this.exportedModules.push(this.y2s1Storage)
      this.exportedModules.push(this.y3s1Storage)
      this.exportedModules.push(this.y4s1Storage)
      this.exportedModules.push(this.y1s2Storage)
      this.exportedModules.push(this.y2s2Storage)
      this.exportedModules.push(this.y3s2Storage)
      this.exportedModules.push(this.y4s2Storage)
      this.exportedModules = this.exportedModules.flat()
      this.saveExports()
      window.location.reload()
    },
    loadPlan (value1, value2, value3, value4, value5, value6, value7, value8) {
      // Semester 1
      this.y1s1Storage = value1
      this.y1s2Storage = value2
      // Semester 2
      this.y2s1Storage = value3
      this.y2s2Storage = value4
      // Semester 3
      this.y3s1Storage = value5
      this.y3s2Storage = value6
      // Semester 4
      this.y4s1Storage = value7
      this.y4s2Storage = value8
      this.saveAll()
      this.consolidateExports()
    },
    saveAll () {
      this.savey1s1()
      this.savey2s1()
      this.savey3s1()
      this.savey4s1()
      this.savey1s2()
      this.savey2s2()
      this.savey3s2()
      this.savey4s2()
      window.location.reload()
    },
    removeAll () {
      this.y1s1Storage = []
      this.y1s2Storage = []
      this.y2s1Storage = []
      this.y2s2Storage = []
      this.y3s1Storage = []
      this.y3s2Storage = []
      this.y4s1Storage = []
      this.y4s2Storage = []
      this.y1s1 = []
      this.y1s2 = []
      this.y2s1 = []
      this.y2s2 = []
      this.y3s1 = []
      this.y3s2 = []
      this.y4s1 = []
      this.y4s2 = []
      this.saveAll()
      window.location.reload()
    },
    // Exported Modules
    saveExports () {
      const parsed = JSON.stringify(this.exportedModules)
      localStorage.setItem('exportedModules', parsed)
    },
    addExports (value) {
      this.exportedModules.push(value.moduleCode)
      this.saveExports()
    },
    removeExports (value) {
      this.exportedModules = this.exportedModules.filter(mod => mod !== value.moduleCode)
      this.saveExports()
    },
    // ############################################################################### SEMESTER 1
    // =================================================================== Y1S1
    savey1s1 () {
      const parsed = JSON.stringify(this.y1s1Storage)
      localStorage.setItem('y1s1Storage', parsed)
    },
    addy1s1 (value) {
      this.y1s1Storage.push(value.moduleCode)
      this.savey1s1()
      window.location.reload()
    },
    removey1s1 (value) {
      this.y1s1Storage = this.y1s1Storage.filter(mod => mod !== value.moduleCode)
      this.savey1s1()
    },
    // =================================================================== Y2S1
    savey2s1 () {
      const parsed = JSON.stringify(this.y2s1Storage)
      localStorage.setItem('y2s1Storage', parsed)
    },
    addy2s1 (value) {
      this.y2s1Storage.push(value.moduleCode)
      this.savey2s1()
      window.location.reload()
    },
    removey2s1 (value) {
      this.y2s1Storage = this.y2s1Storage.filter(mod => mod !== value.moduleCode)
      this.savey2s1()
    },
    // =================================================================== Y3S1
    savey3s1 () {
      const parsed = JSON.stringify(this.y3s1Storage)
      localStorage.setItem('y3s1Storage', parsed)
    },
    addy3s1 (value) {
      this.y3s1Storage.push(value.moduleCode)
      this.savey3s1()
      window.location.reload()
    },
    removey3s1 (value) {
      this.y3s1Storage = this.y3s1Storage.filter(mod => mod !== value.moduleCode)
      this.savey3s1()
    },
    // =================================================================== Y4S1
    savey4s1 () {
      const parsed = JSON.stringify(this.y4s1Storage)
      localStorage.setItem('y4s1Storage', parsed)
    },
    addy4s1 (value) {
      this.y4s1Storage.push(value.moduleCode)
      this.savey4s1()
      window.location.reload()
    },
    removey4s1 (value) {
      this.y4s1Storage = this.y4s1Storage.filter(mod => mod !== value.moduleCode)
      this.savey4s1()
    },
    // ############################################################################### SEMESTER 2
    // =================================================================== Y1S2
    savey1s2 () {
      const parsed = JSON.stringify(this.y1s2Storage)
      localStorage.setItem('y1s2Storage', parsed)
    },
    addy1s2 (value) {
      this.y1s2Storage.push(value.moduleCode)
      this.savey1s2()
      window.location.reload()
    },
    removey1s2 (value) {
      this.y1s2Storage = this.y1s2Storage.filter(mod => mod !== value.moduleCode)
      this.savey1s2()
    },
    // =================================================================== Y2S2
    savey2s2 () {
      const parsed = JSON.stringify(this.y2s2Storage)
      localStorage.setItem('y2s2Storage', parsed)
    },
    addy2s2 (value) {
      this.y2s2Storage.push(value.moduleCode)
      this.savey2s2()
      window.location.reload()
    },
    removey2s2 (value) {
      this.y2s2Storage = this.y2s2Storage.filter(mod => mod !== value.moduleCode)
      this.savey2s2()
    },
    // =================================================================== Y3S2
    savey3s2 () {
      const parsed = JSON.stringify(this.y3s2Storage)
      localStorage.setItem('y3s2Storage', parsed)
    },
    addy3s2 (value) {
      this.y3s2Storage.push(value.moduleCode)
      this.savey3s2()
      window.location.reload()
    },
    removey3s2 (value) {
      this.y3s2Storage = this.y3s2Storage.filter(mod => mod !== value.moduleCode)
      this.savey3s2()
    },
    // =================================================================== Y4S2
    savey4s2 () {
      const parsed = JSON.stringify(this.y4s2Storage)
      localStorage.setItem('y4s2Storage', parsed)
    },
    addy4s2 (value) {
      this.y4s2Storage.push(value.moduleCode)
      this.savey4s2()
      window.location.reload()
    },
    removey4s2 (value) {
      this.y4s2Storage = this.y4s2Storage.filter(mod => mod !== value.moduleCode)
      this.savey4s2()
    }
  },
  computed: {
    numYears: function () {
      if (this.inputNumYears < 1) {
        return this.defaultNumYears
      } else {
        return this.inputNumYears
      }
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
