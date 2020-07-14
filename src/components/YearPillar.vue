<template>
  <v-container>
    <v-card class="mb-5">
      <v-card-title class="headline justify-center">Year {{title}} Sem 1</v-card-title>
    </v-card>
    <v-card class="mb-5">
      <v-card-title class="headline justify-center">Year {{title}} Sem 2</v-card-title>
    </v-card>
    <v-card v-if="specialTerm1" class="mb-5">
      <v-card-title class="headline justify-center">Year {{title}} Special Term 1</v-card-title>
    </v-card>
    <v-card v-if="specialTerm2" class="mb-5">
      <v-card-title class="headline justify-center">Year {{title}} Special Term 1</v-card-title>
    </v-card>
  </v-container>
  <!-- <div class="semester-box">
      <div class="semester-title">
        {{title}}
      </div>
      <div class="module-search" v-if="isHidden">
        <SearchBox v-on:minimize="isHidden = false" v-on:addModule="addModule"/>
      </div>
      <button id="add-module-button" v-if="!isHidden" v-on:click="isHidden = true">
        + Add Module
      </button>
      <ul style="list-style: none;">
        <li class="module-list" v-for="mod in modules" v-bind:key="mod.moduleCode">
          <div class="module-element">
            <Module v-bind:module='mod' v-on:removeModule="removeModule"/>
          </div>
        </li>
      </ul>
  </div> -->
</template>

<script>
// import Vue from 'vue'
// import Module from '../components/Module.vue'
// import SearchBox from '../components/SearchBox/SearchBox.vue'
// import axios from 'axios'

export default {
  name: 'YearPillar',
  components: {
    // Module,
    // SearchBox
  },
  data () {
    return {
      isHidden: false,
      specialTerm1: false,
      specialTerm2: false
    }
  },
  methods: {
    // minimizeSearch (value) {
    //   this.isHidden = value
    // },
    // addModule (value) {
    //   this.isHidden = false
    //   this.modules.push(value)
    //   this.$emit('addModule', value)
    // },
    // removeModule (value) {
    //   this.modules = this.modules.filter(mod => mod !== value)
    //   this.$emit('removeModule', value)
    // }
  },
  props: ['title'],
  created (modules) {
    // // if (!(this.plannedModules.length === 0)) {
    // axios.get('https://api.nusmods.com/v2/2019-2020/moduleInfo.json')
    //   .then(response => (
    //     this.modules = response.data.filter(mod => this.plannedModules.includes(mod.moduleCode)))
    //   )
    //   .catch(err => console.log(err))
    // // }
  }
}
</script>

<style scoped>
  .semester-title {
    font-size:26px;
    font-weight: bold;
    margin: 1px;
  }
  .semester-box {
    border-radius: 25px;
    width:400px;
    height:525px;
    background-color: rgb(114, 114, 114);
    border:1px solid #000;
    padding: 5px;
    color: rgb(0, 0, 0);
  }
  .module-element {
    /* position: relative; */
    float: right;
    padding: 2px;
    text-align: left;
  }
  #add-module-button {
    border-radius: 20px;
    font-size:18px;
    font-family: Avenir;
    font-weight: bold;
    color: rgb(0, 0, 0);
    border:1px solid #000;
    width: 99%;
    height: 10%;
    top: 82%;
  }
  #add-module-button:hover {
    border-radius: 20px;
    font-size:21px;
    font-family: Avenir;
    font-weight: bold;
    color: rgb(0, 0, 0);
    background: #dfdfdf;
    border:1px solid #000;
    width: 99%;
    height: 10%;
    top: 82%;
  }
</style>
