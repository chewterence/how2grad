<template>
  <div id="plan">
    <ul style="list-style: none; display: inline-flex;">
      <div id="Semester Block">
        <ul style="list-style: none; display: inline-flex;">
          <div id="y1s1">
            <Semester v-bind:title='"Year 1 Semester 1"' :plannedModules='y1s1'  v-on:addModule="addy1s1" v-on:removeModule="removey1s1"/>
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
      <ul>
        <button id="save-button" v-on:click="saveAll">
          Save
        </button>
        <button id="save-button">
          Load
        </button>
        <button id="save-button" v-on:click="removeAll">
          Clear
        </button>
      </ul>
    </ul>
  </div>
</template>

<script>
import Semester from '../components/Semester.vue'

export default {
  name: 'Home',
  components: {
    Semester
  },
  data () {
    return {
      // Testing preloaded planned data (COMMENT THESE OUT FOR CLEAN SLATE)
      // // Semester 1
      // y1s1: ['CS1231S', 'CS1010', 'ES1103', 'UTC1117', 'MA1521'],
      // y1s2: ['CS2030', 'CS2100', 'CS2040S', 'UTW1001Z', 'UTC2101'],
      // // Semester 2
      // y2s1: ['MA1101R', 'CS2103T', 'CS2106', 'CS2101', 'UTC2105'],
      // y2s2: ['ST2334', 'ES2660', 'CS3230', 'UTW2001Q', 'CS2105'],
      // // Semester 3
      // y3s1: ['CS2104', 'CS2107', 'CS3210', 'CS3220', 'CS3223'],
      // y3s2: ['CS3233', 'CS3234', 'CS3244', 'CS3241', 'CS3236'],
      // // Semester 4
      // y4s1: ['CS4212', 'CS4226', 'CS5224', 'CS5223', 'CS6207'],
      // y4s2: ['CS4225', 'CS4234', 'CS6270', 'CS6285', 'CS6234']
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
        this.y1s1 = JSON.parse(localStorage.getItem('y1s1Storage'))
      } catch (e) {
        localStorage.removeItem('y1s1Storage')
      }
    }
    if (localStorage.getItem('y2s1Storage')) {
      try {
        this.y2s1 = JSON.parse(localStorage.getItem('y2s1Storage'))
      } catch (e) {
        localStorage.removeItem('y2s1Storage')
      }
    }
    if (localStorage.getItem('y3s1Storage')) {
      try {
        this.y3s1 = JSON.parse(localStorage.getItem('y3s1Storage'))
      } catch (e) {
        localStorage.removeItem('y3s1Storage')
      }
    }
    if (localStorage.getItem('y4s1Storage')) {
      try {
        this.y4s1 = JSON.parse(localStorage.getItem('y4s1Storage'))
      } catch (e) {
        localStorage.removeItem('y4s1Storage')
      }
    }
    // SEMESTER 2
    if (localStorage.getItem('y1s2Storage')) {
      try {
        this.y1s2 = JSON.parse(localStorage.getItem('y1s2Storage'))
      } catch (e) {
        localStorage.removeItem('y1s2Storage')
      }
    }
    if (localStorage.getItem('y2s2Storage')) {
      try {
        this.y2s2 = JSON.parse(localStorage.getItem('y2s2Storage'))
      } catch (e) {
        localStorage.removeItem('y2s2Storage')
      }
    }
    if (localStorage.getItem('y3s2Storage')) {
      try {
        this.y3s2 = JSON.parse(localStorage.getItem('y3s2Storage'))
      } catch (e) {
        localStorage.removeItem('y3s2Storage')
      }
    }
    if (localStorage.getItem('y4s2Storage')) {
      try {
        this.y4s2 = JSON.parse(localStorage.getItem('y4s2Storage'))
      } catch (e) {
        localStorage.removeItem('y4s2Storage')
      }
    }
  },
  methods: {
    // =================================================================== General Methods
    saveAll () {
      this.savey1s1()
      this.savey2s1()
      this.savey3s1()
      this.savey4s1()
      this.savey1s2()
      this.savey2s2()
      this.savey3s2()
      this.savey4s2()
    },
    removeAll () {
      this.removey1s1()
      this.removey2s1()
      this.removey3s1()
      this.removey4s1()
      this.removey1s2()
      this.removey2s2()
      this.removey3s2()
      this.removey4s2()
      window.location.reload()
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
    },
    removey1s1 (value) {
      this.y1s1Storage = this.y1s1Storage.filter(mod => mod !== value)
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
    },
    removey2s1 (value) {
      this.y2s1Storage = this.y2s1Storage.filter(mod => mod !== value)
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
    },
    removey3s1 (value) {
      this.y3s1Storage = this.y3s1Storage.filter(mod => mod !== value)
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
    },
    removey4s1 (value) {
      this.y4s1Storage = this.y4s1Storage.filter(mod => mod !== value)
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
    },
    removey1s2 (value) {
      this.y1s2Storage = this.y1s2Storage.filter(mod => mod !== value)
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
    },
    removey2s2 (value) {
      this.y2s2Storage = this.y2s2Storage.filter(mod => mod !== value)
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
    },
    removey3s2 (value) {
      this.y3s2Storage = this.y3s2Storage.filter(mod => mod !== value)
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
    },
    removey4s2 (value) {
      this.y4s2Storage = this.y4s2Storage.filter(mod => mod !== value)
      this.savey4s2()
    }
  }
}
</script>

<style scoped>
  /* Styles */
  #save-button {
    border-radius: 20px;
    font-size:18px;
    font-family: Avenir;
    font-weight: bold;
    color: rgb(0, 0, 0);
    background: #9a9a9a;
    border:1px solid #000;
    width: 88px;
    height: 88px;
    margin: 5px;
  }
  /* Semester Component Style */
  #y1s1 .semester-box {
    background: #2a9d8f;
    margin: 5px 3px;
  }
  #y1s2 .semester-box {
    background: #2a9d8f;
    margin: 5px 3px;
  }
  #y2s1 .semester-box {
    background: #e9c46a;
    margin: 5px 3px;
  }
  #y2s2 .semester-box {
    background: #e9c46a;
    margin: 5px 3px;
  }
  #y3s1 .semester-box {
    background: #f4a261;
    margin: 5px 3px;
  }
  #y3s2 .semester-box {
    background: #f4a261;
    margin: 5px 3px;
  }
  #y4s1 .semester-box {
    background: #e76f51;
    margin: 5px 3px;
  }
  #y4s2 .semester-box {
    background: #e76f51;
    margin: 5px 3px;
  }
</style>
