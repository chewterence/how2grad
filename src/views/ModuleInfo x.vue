<template>
  <div>
  <v-card>
    <!-- <v-card-title class="headline font-weight-regular blue-grey white--text">Module Searcher</v-card-title> -->
    <v-card-text>
      <v-autocomplete
        v-model="model"
        :hint="'Example: CS2030 or Programming Methodology'"
        :items="modules"
        item-text=moduleCode
        :readonly="!isEditing"
        :label="'Search module by module code or title...'"
        persistent-hint
        prepend-icon="mdi-city"
      >
      </v-autocomplete>
    </v-card-text>
  </v-card>
    <!-- {{concatedModules}} -->
    <!-- {{modules[0].moduleCode + ' ' + modules[0].title}} -->
    {{model}}
  </div>
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
      concatedModules: []
    }
  },
  created () {
    axios.get('https://api.nusmods.com/v2/2018-2019/moduleInfo.json')
      .then(response => (this.modules = response.data))
      .catch(err => console.log(err))
    // fetch('https://api.nusmods.com/v2/2018-2019/moduleInfo.json')
    //   .then(response => response.json())
    //   .then(data => (this.modules = data))
  }
}
</script>

<style scoped>
</style>
