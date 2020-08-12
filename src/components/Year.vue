<template>
  <v-container>
    <v-row v-for="(n, sem) in numSem" :key="sem" justify="center">
      <Semester :year='year + 1' :semester='sem + 1' :semModules='yearModules[sem]'  v-on:addModule="changeModuleList" v-on:removeModule="changeModuleList"  />
    </v-row>
  </v-container>
</template>

<script>
import Semester from '../components/Semester.vue'

export default {
  name: 'Year',
  components: {
    Semester
  },
  data () {
    return {
    }
  },
  methods: {
    changeModuleList(eventData) {
      this.$emit('changeModuleList', eventData)
    }
  },
  props: ['year', 'numSem', 'yearModules'],
  created () {
  },
  computed: {
  },
  mounted: function () {
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
