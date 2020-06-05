<template>
  <div id="plan">
    <ul style="list-style: none; display: inline-flex;">
      <div id="y1s1">
        <Semester v-bind:title='"Year 1 Semester 1"' :plannedModules='y1s1'/>
      </div>
      <div id="y2s1">
        <Semester v-bind:title='"Year 2 Semester 1"' :plannedModules='y2s1'/>
      </div>
      <div id="y3s1">
        <Semester v-bind:title='"Year 3 Semester 1"' :plannedModules='y3s1'/>
      </div>
      <div id="y4s1">
        <Semester v-bind:title='"Year 4 Semester 1"' :plannedModules='y4s1'/>
      </div>
    </ul>
    <br>
    <ul style="list-style: none; display: inline-flex;">
      <div id="y1s2">
        <Semester v-bind:title='"Year 1 Semester 2"' :plannedModules='y1s2'/>
      </div>
      <div id="y2s2">
        <Semester v-bind:title='"Year 2 Semester 2"' :plannedModules='y2s2'/>
      </div>
      <div id="y3s2">
        <Semester v-bind:title='"Year 3 Semester 2"' :plannedModules='y3s2'/>
      </div>
      <div id="y4s2">
        <Semester v-bind:title='"Year 4 Semester 2"' :plannedModules='y4s2'/>
      </div>
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
      // Semester 1
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
    }
  }
}
</script>

<style scoped>
  #y1s1 .semester-box {
    background: #38d1bf;
    margin: 5px 5px;
  }
  #y1s2 .semester-box {
    background: #38d1bf;
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
