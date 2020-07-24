<template>
  <v-card
    color="grey lighten-2"
  >
    <v-card-text >
      <v-autocomplete
        v-model="model"
        :items="modules"
        :search-input.sync="search"
        class="text-lg-h6 font-weight-regular"
        flat
        color="grey lighten-3"
        hide-no-data
        hide-selected
        item-text="moduleCode"
        item-value="moduleCode"
        placeholder="Search by module code (CS2030 or MA1521)..."
        label="Search for a Module"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-expand-transition>
      <v-list v-if="model" class="mx-5 grey lighten-2 text-lg-left">
        <v-list-item-title class="text-lg-h6">{{"Module Code:"}}</v-list-item-title>
        <v-list-item-subtitle class="text--secondary text-lg-subtitle-1">{{model.moduleCode}}</v-list-item-subtitle>
        <v-list-item-title class="text-lg-h6">{{"Module Title:"}}</v-list-item-title>
        <v-list-item-subtitle class="text--secondary text-lg-subtitle-1">{{model.title}}</v-list-item-subtitle>
        <v-list-item-title class="text-lg-h6">{{"Description:"}}</v-list-item-title>
        <p class="text--secondary text-lg-subtitle-1">{{model.description}}</p>
        <v-list-item-title class="text-lg-h6">{{"Modular Credits:"}}</v-list-item-title>
        <v-list-item-subtitle class="text--secondary text-lg-subtitle-1">{{model.moduleCredit}}</v-list-item-subtitle>
        <v-list-item-title class="text-lg-h6">{{"Department:"}}</v-list-item-title>
        <v-list-item-subtitle class="text--secondary text-lg-subtitle-1">{{model.department}}</v-list-item-subtitle>
        <v-list-item-title class="text-lg-h6">{{"Faculty:"}}</v-list-item-title>
        <v-list-item-subtitle class="text--secondary text-lg-subtitle-1">{{model.faculty}}</v-list-item-subtitle>
        <v-list-item-title class="text-lg-h6">{{"Workload:"}}</v-list-item-title>
        <v-list-item-subtitle class="text--secondary text-lg-subtitle-1">{{model.workload}}</v-list-item-subtitle>
        <v-list-item-title class="text-lg-h6">{{"Prerequisites:"}}</v-list-item-title>
        <v-list-item-subtitle class="text--secondary text-lg-subtitle-1">{{model.prerequisite}}</v-list-item-subtitle>
        <v-list-item-title class="text-lg-h6">{{"Preclusions:"}}</v-list-item-title>
        <v-list-item-subtitle class="text--secondary text-lg-subtitle-1">{{model.preclusion}}</v-list-item-subtitle>
      </v-list>
    </v-expand-transition>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!model"
        color="red lighten-3"
        @click="model = null"
      >
        Close
        <v-icon right>mdi-close-circle</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      isEditing: true,
      model: null,
      NameSearchString: '',
      modules: [],
      entries: [],
      search: null
    }
  },
  created () {
    axios.get('https://api.nusmods.com/v2/2018-2019/moduleInfo.json')
      .then(response => (this.modules = response.data))
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>
</style>
