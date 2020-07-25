<template>
  <v-row>
    <v-dialog v-model="dialog" scrollable max-width="950px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mr-8" color="grey lighten-1" x-large rounded v-bind="attrs" v-on="on">
          Select Plan
        </v-btn>
      </template>
        <v-card
    color="grey lighten-2"
  >
    <v-card-text >
      <v-card-title>Select a Study Plan</v-card-title>
      <v-divider></v-divider>
      <v-autocomplete
        v-model="model"
        :items="plans"
        :search-input.sync="search"
        class="text-lg-h6 font-weight-regular"
        flat
        color="grey lighten-1"
        hide-no-data
        hide-selected
        item-text="name"
        item-value="name"
        placeholder="Search for degree keywords ('Computer Science' or 'UTCP')"
        label="Search for an existing plan"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-expand-transition>
      <v-list v-if="model" class="mx-5 grey lighten-2 text-lg-left">
        <v-list-item-content>
          <v-list-item-title class="headline mb-2">{{model.name}}</v-list-item-title>
          <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Total Modular Credits: (could be calculated in future plans) "}}</v-list-item-subtitle>
          <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Number of Years to Complete: (could be calculated in future plans) "}}</v-list-item-subtitle>
          <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Difficulty Rating: (could be calculated in future plans) "}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-btn v-if="model" class="mx-2" color="green darken-2" outlined x-large rounded @click="dialog = false; loadPlan()" min-width="280px">
          Select
        </v-btn>
        <v-btn v-if="model" color="red darken-2" outlined x-large rounded @click="model = null;" min-width="280px">
          Cancel
        </v-btn>
      </v-list>
    </v-expand-transition>
    <v-card-actions>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card-actions>
      <v-btn color="red darken-1" outlined text @click="dialog = false; model = null">close</v-btn>
    </v-card-actions>
  </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { db } from '@/firebase';

export default {
  data () {
    return {
      model: null,
      NameSearchString: '',
      plan: '',
      dialog: false,
      y1s1Plan: [],
      y1s2Plan: [],
      y2s1Plan: [],
      y2s2Plan: [],
      y3s1Plan: [],
      y3s2Plan: [],
      y4s1Plan: [],
      y4s2Plan: []
    }
  },
  firestore() {
    return {
      plans: db.collection('plans'),
    }
  },
  methods: {
    emitData () {
      this.$emit('slectedPlan', this.y1s1Plan, this.y1s2Plan, this.y2s1Plan, this.y2s2Plan, this.y3s1Plan, this.y3s2Plan, this.y4s1Plan, this.y4s2Plan)
    },
    loadPlan () {
      this.y1s1Plan = this.model.y1s1
      this.y1s2Plan = this.model.y1s2
      this.y2s1Plan = this.model.y2s1
      this.y2s2Plan = this.model.y2s2
      this.y3s1Plan = this.model.y3s1
      this.y3s2Plan = this.model.y3s2
      this.y4s1Plan = this.model.y4s1
      this.y4s2Plan = this.model.y4s2
      this.emitData()
    }
  }
}
</script>

<style>
</style>
