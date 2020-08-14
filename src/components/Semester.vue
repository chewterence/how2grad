<template>
  <v-card
    class="mx-0 my-1"
    width="420"
    min-height="580px"
    :color="semColour"
    rounded
  >
    <v-list :color="semColour" rounded>
      <v-list-item-title class="text-lg-h5 font-weight-bold mb-3">{{titleMsg}}</v-list-item-title>
      <AddModuleButton class="mx-1 mb-3" v-on:addModule="addModule"/>
      <v-list-item-group color="primary">
        <v-list-item
          class="grey lighten-3"
          v-for="(module, i) in semModuleData"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="module.moduleCode" class="text-lg-h6" ></v-list-item-title>
            <v-list-item-title v-text="module.title" class="text-lg-subtitle-1"></v-list-item-title>
          </v-list-item-content>
            <v-icon @click="removeModule(module)" color="red lighten-1">mdi-close</v-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import AddModuleButton from '../components/AddModuleButton.vue'
// import axios from 'axios'

export default {
  name: 'Semester',
  components: {
    AddModuleButton
  },
  data () {
    return {
      eventData: [],
      semModuleData: [],
      semColourArr: ['teal accent-4', 'lime accent-4', 
      'amber accent-4', 'orange accent-4',
      'teal accent-4', 'lime accent-4',
      'amber accent-4', 'orange accent-4']
    }
  },
  methods: {
    minimizeSearch (value) {
      this.isHidden = value
    },
    addModule (value) {
      this.isHidden = false
      this.semModuleData.push(value)
      this.semModuleCodes.push(value.moduleCode)
      this.eventData[1] = this.semModuleCodes
      console.log('added')
      this.$emit('addModule', this.eventData)
    },
    removeModule (value) {
      this.semModuleData = this.semModuleData.filter(mod => mod !== value)
      this.semModuleCodes = this.semModuleCodes.filter(mod => mod !== value.moduleCode)
      this.eventData[1] = this.semModuleCodes
      console.log('removed')
      this.$emit('removeModule', this.eventData)
    }
  },
  props: ['year', 'semester', 'semModuleCodes', 'moduleData'],
  created () {
  },
  computed: {
    titleMsg: function () {
      return 'Year ' + this.year + ' Semester ' + this.semester
    },
    semColour: function () {
      return this.semColourArr[this.year - 1]
    }
  },
  mounted: function () {
    this.eventData.push([this.year, this.semester])
    this.eventData.push([])

    console.log('mounted')
    console.log(this.moduleData)
    console.log(this.semModuleCodes[0])
    console.log(this.year + ' ' + this.semester + ' ' + this.moduleData.get(this.semModuleCodes[0]))
    for (let i = 0; i < this.semModuleCodes.length; i++) {
      this.semModuleData.push(this.moduleData.get(this.semModuleCodes[i]))
    }
  }
  // ,
  // watch: {
  //   semModuleCodes: function () {
  //     console.log('watch')
  //     console.log(this.moduleData)
  //     console.log(this.year + ' ' + this.semester + ' ' + this.moduleData.get(this.semModuleCodes[0]))
  //     for (let i = 0; i < this.semModuleCodes.length; i++) {
  //       this.semModuleData.push(this.moduleData.get(this.semModuleCodes[i]))
  //     }
  //   }
  // }
}
</script>

<style scoped>
</style>
