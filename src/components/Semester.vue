<template>
    <div class="semester-box">
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
    </div>
</template>

<script>
import Vue from 'vue'
import Module from '../components/Module.vue'
import SearchBox from '../components/SearchBox/SearchBox.vue'
import axios from 'axios'

export default {
  name: 'Semester',
  components: {
    Module,
    SearchBox
  },
  data () {
    return {
      isHidden: false
    }
  },
  methods: {
    minimizeSearch (value) {
      this.isHidden = value
    },
    addModule (value) {
      this.isHidden = false
      this.modules.push(value)
      Vue.prototype.$currentlyplannedModules.push(value)
    },
    removeModule (value) {
      this.modules = this.modules.filter(mod => mod !== value)
      Vue.prototype.$currentlyplannedModules = Vue.prototype.$currentlyplannedModules.filter(mod => mod !== value)
    }
  },
  props: ['title', 'modules', 'plannedModules'],
  created (modules) {
    axios.get('https://api.nusmods.com/v2/2019-2020/moduleInfo.json')
      .then(response => (
        this.modules = response.data.filter(mod => this.plannedModules.includes(mod.moduleCode)))
      )
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>
  .semester-title {
    font-size:26px;
    font-weight: bold;
    margin: 5px;
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
