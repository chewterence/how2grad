<template>
  <v-card
    class="mx-auto"
    max-width="420"
    height="600px"
    rounded
    color="transparent"
  >
    <v-list color="transparent" rounded>
      <v-list-item-title class="headline mb-3">{{title}}</v-list-item-title>
      <AddModuleButton class="mx-1 mb-3" v-on:addModule="addModule"/>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          class="grey lighten-3"
          v-for="(module, i) in modules"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="module.moduleCode"></v-list-item-title>
            <v-list-item-title v-text="module.title"></v-list-item-title>
          </v-list-item-content>
          <v-btn rounded class="red lighten-3" @click="removeModule(module)">x</v-btn>
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
    }
  },
  methods: {
    minimizeSearch (value) {
      this.isHidden = value
    },
    addModule (value) {
      this.isHidden = false
      this.modules.push(value)
      this.$emit('addModule', value)
    },
    removeModule (value) {
      this.modules = this.modules.filter(mod => mod !== value)
      this.$emit('removeModule', value)
    }
  },
  props: ['title', 'modules', 'plannedModules'],
  created () {
    axios.get('https://api.nusmods.com/v2/2019-2020/moduleInfo.json')
      .then(response => (
        this.modules = response.data.filter(mod => this.plannedModules.includes(mod.moduleCode)))
      )
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>
</style>
