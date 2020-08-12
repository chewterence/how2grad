<template>
  <v-card
    class="mx-1 my-1"
    width="420"
    min-height="580px"
    color="transparent"
    rounded
  >
    <v-list color="transparent" rounded>
      <v-list-item-title class="text-lg-h5 font-weight-bold mb-3">{{titleMsg}}</v-list-item-title>
      <AddModuleButton class="mx-1 mb-3" v-on:addModule="addModule"/>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          class="grey lighten-3"
          v-for="(module, i) in plannedModules"
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
import axios from 'axios'

export default {
  name: 'Semester',
  components: {
    AddModuleButton
  },
  data () {
    return {
      eventData: []
    }
  },
  methods: {
    minimizeSearch (value) {
      this.isHidden = value
    },
    addModule (value) {
      this.isHidden = false
      this.plannedModules.push(value)
      this.eventData[1] = this.plannedModules
      console.log('added')
      this.$emit('addModule', this.eventData)
    },
    removeModule (value) {
      this.plannedModules = this.plannedModules.filter(mod => mod !== value)
      this.eventData[1] = this.plannedModules
      console.log('removed')
      this.$emit('removeModule', this.eventData)
    }
  },
  props: ['year', 'semester', 'plannedModules'],
  created () {
    axios.get('https://api.nusmods.com/v2/2019-2020/moduleInfo.json')
      .then(response => (
        this.modules = response.data.filter(mod => this.plannedModules.includes(mod.moduleCode)))
      )
      .catch(err => console.log(err))
  },
  computed: {
    titleMsg: function () {
      return 'Year ' + this.year + ' Semester ' + this.semester
    }
  },
  mounted: function () {
    this.eventData.push([this.year, this.semester])
    this.eventData.push([])
  }
}
</script>

<style scoped>
</style>
