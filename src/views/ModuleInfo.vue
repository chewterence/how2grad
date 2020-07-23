<template>
  <v-card
    color="grey lighten-2"
  >
    <v-card-text>
      <v-autocomplete
        v-model="model"
        :items="modules"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        hide-no-data
        hide-selected
        item-text="moduleCode"
        item-value="moduleCode"
        placeholder="Start typing to Search"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-expand-transition>
      <v-list v-if="model" class="grey lighten-2">
        <v-list-item
          v-for="(field, i) in fields"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="field.value"></v-list-item-title>
            <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
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
      concatedModules: [],
      descriptionLimit: 600,
      entries: [],
      isLoading: false,
      search: null
    }
  },
  computed: {
    fields () {
      if (!this.model) return []

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || 'n/a'
        }
      })
    },
    items () {
      return this.entries.map(entry => {
        const Description = entry.Description.length > this.descriptionLimit
          ? entry.Description.slice(0, this.descriptionLimit) + '...'
          : entry.Description
        return Object.assign({}, entry, { Description })
      })
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
