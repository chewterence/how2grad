<template>
  <v-row>
    <v-dialog v-model="dialog" scrollable max-width="950px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="black" outlined x-large rounded v-bind="attrs" v-on="on" min-width="380px">
          + Add Module
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select a module</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="text-left">
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
        </v-card-text>
              <v-expand-transition>
                <v-card v-if="model" rounded class="mx-5 grey lighten-3 text-lg-left">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="overline mb-4">{{model.faculty + ", " + "Department of " + model.department}}</div>
                          <v-list-item-title class="headline mb-4">{{model.moduleCode + " " + model.title}}</v-list-item-title>
                          <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Modular Credits: " + model.moduleCredit}}</v-list-item-subtitle>
                          <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Prerequisites: " + model.prerequisite}}</v-list-item-subtitle>
                          <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Preclusions: " + model.preclusion}}</v-list-item-subtitle>
                          <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Workload: " + model.workload}}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                  <v-btn v-if="model" color="black" outlined x-large rounded @click="dialog = false; addModule()" min-width="380px">
                    Confirm
                  </v-btn>
                </v-card >
                  <!-- <v-list>
                      <v-card-text class="text-lg-h6">{{model.moduleCode + " " + model.title}}</v-card-text>
                      <v-card-text class="text--secondary text-lg-h6">{{model.description}}</v-card-text>
                  </v-list> -->
                <!-- <v-list v-if="model" class="mx-5 grey lighten-3 text-lg-left" rounded>
                  <v-list-item-subtitle class="text-lg-h6">{{model.moduleCode}}</v-list-item-subtitle>
                  <v-list-item-subtitle class="text--secondary text-lg-h6">{{model.title}}</v-list-item-subtitle>
                  <v-list-item-title class="text-md-h7">{{"Modular Credits:"}}</v-list-item-title>
                  <v-list-item-subtitle class="text--secondary text-lg-subtitle-1">{{model.moduleCredit}}</v-list-item-subtitle>
                  <v-list-item-title class="text-lg-h6">{{"Workload:"}}</v-list-item-title>
                  <v-list-item-subtitle class="text--secondary text-lg-subtitle-1">{{model.workload}}</v-list-item-subtitle>
                  <v-list-item-title class="text-lg-h6">{{"Prerequisites:"}}</v-list-item-title>
                  <v-list-item-subtitle class="text--secondary text-lg-subtitle-1">{{model.prerequisite}}</v-list-item-subtitle> -->
                <!-- </v-list> -->
              </v-expand-transition>
        <v-card-actions>
          <v-btn color="red darken-1" outlined text @click="dialog = false; model = null">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddModuleButton',
  components: {
  },
  data () {
    return {
      NameSearchString: '',
      modules: [],
      model: null,
      dialog: false,
      module: null
    }
  },
  methods: {
    addModule (event) {
      this.$emit('addModule', this.model)
    }
  },
  created () {
    axios.get('https://api.nusmods.com/v2/2018-2019/moduleInfo.json')
      .then(response => (this.modules = response.data))
      .catch(err => console.log(err))
  }
}
</script>

<style>
</style>
