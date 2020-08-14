<template>
  <v-row>
    <v-dialog v-model="dialog" rounded scrollable max-width="900px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="black" outlined x-large rounded v-bind="attrs" v-on="on" min-width="400px">
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
                  color="grey lighten"
                  hide-no-data
                  hide-selected
                  item-text="moduleCode"
                  placeholder="Search by module code or module name..."
                  label="Search for a Module"
                  prepend-icon="mdi-book"
                  return-object
                >
              </v-autocomplete>
              </v-card-text>
        </v-card-text>
              <v-expand-transition>
                <v-card v-if="model" rounded class="mx-5 grey lighten-3 text-lg-left">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="overline mb-4">{{model.faculty + ", " + "Department of " + model.department}}</div>
                          <v-list-item-title class="headline mb-4">{{model.moduleCode}}</v-list-item-title>
                          <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Modular Credits: " + model.moduleCredit}}</v-list-item-subtitle>
                          <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Prerequisites: " + model.prerequisite}}</v-list-item-subtitle>
                          <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Preclusions: " + model.preclusion}}</v-list-item-subtitle>
                          <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Workload: " + model.workload}}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                  <v-btn v-if="model" class="mx-2" color="green darken-2" outlined x-large rounded @click="dialog = false; addModule()" min-width="280px">
                    Confirm
                  </v-btn>
                  <v-btn v-if="model" color="red darken-2" outlined x-large rounded @click="model = null;" min-width="280px">
                    Clear
                  </v-btn>
                </v-card >
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
    addModule () {
      this.model.moduleCode = this.model.moduleCode.split(" ")[0]
      this.$emit('addModule', this.model)
    }
  },
  async created () {
    try{
      let response = await axios.get('https://api.nusmods.com/v2/2018-2019/moduleInfo.json')
      this.modules = response.data
    } catch(err){
      console.log(err)
    }
    // Concatenate moduleCode with title
    for(let i=0; i < this.modules.length; i++) {
      this.modules[i].moduleCode = this.modules[i].moduleCode + " " + this.modules[i].title
    }
  }
}
</script>

<style>
</style>
